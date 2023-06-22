const Web3 = require('web3').Web3;
const rpcUrl = require('../config.json').RPC_URL;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const dayjs = require('dayjs')

const httpProvider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(httpProvider);

const startTimestamp = 1684713600;  // 开始时间戳 2023-05-22 00:00:00 UTC
// const startTimestamp = 1687410000;  // 开始时间戳 2023-06-22 5:00:00 UTC
const endTimestamp = 1687392000;  // 结束时间戳 2023-06-22 00:00:00 UTC
// const endTimestamp = 1687413600;  // 结束时间戳 2023-06-22 6:00:00 UTC

const startBlockNumber = 585000n//开始区块 2023-05-21 22:38:37 UTC
// const startBlockNumber = 661500n//开始区块 2023-05-21 22:38:37 UTC
const stopBlockNumber = 662000n//结束区块 2023-06-22 00:14:05 UTC
const batchSize = 500;  // 设置批处理的数量
// 计算总共需要进行的请求次数
const totalRequests = Math.ceil((parseInt(stopBlockNumber)-parseInt(startBlockNumber)+1) / batchSize);
const csvWriter = createCsvWriter({
    path: dayjs(startTimestamp*1000).format('YYYY-MM-DD hh:mm:ss')+' - '+dayjs(endTimestamp*1000).format('YYYY-MM-DD hh:mm:ss')+'-out.csv',
    header: [
        {id: 'address', title: 'ADDRESS'},
        {id: 'count', title: 'COUNT'},
    ]
});
async function fetchBlock(i) {
    const block = await web3.eth.getBlock(i, true);
    let activeAddresses = {};
    if (block.timestamp < startTimestamp || block.timestamp > endTimestamp) {
        return activeAddresses;
    }
    if(block.transactions && block.transactions.length>0)
    for (let tx of block.transactions) {
        const fromAddress = tx.from;
        const code = await web3.eth.getCode(fromAddress);

        // 排除合约地址
        if (code !== '0x') {
            continue;
        }

        if (!activeAddresses[fromAddress]) {
            activeAddresses[fromAddress] = 0;
        }

        activeAddresses[fromAddress]++;
    }

    return activeAddresses;
}
async function fetchBlocks(start, end) {
    const promises = Array.from({length: end - start}, (_, i) => fetchBlock(start + i));
    const results = await Promise.all(promises);
    let activeAddresses = {};

    for (let result of results) {
        for (let [address, count] of Object.entries(result)) {
            if (!activeAddresses[address]) {
                activeAddresses[address] = 0;
            }

            activeAddresses[address] += count;
        }
    }

    console.log(start,'-',end,' finished! ',new Date())
    return activeAddresses;
}

async function main() {
    console.log('开始时间：',new Date())
    let activeAddresses = {};
    for (let i = 0; i < totalRequests; i++) {
        const start = parseInt(startBlockNumber) + i * batchSize;
        const end = Math.min(start + batchSize, parseInt(stopBlockNumber) + 1);

        const result = await fetchBlocks(start, end);

        for (let [address, count] of Object.entries(result)) {
            if (!activeAddresses[address]) {
                activeAddresses[address] = 0;
            }

            activeAddresses[address] += count;
        }
    }

    const records = Object.entries(activeAddresses).map(([address, count]) => ({address, count: count.toString()}));
    csvWriter.writeRecords(records)
        .then(() => console.log('The CSV file was written successfully'));
}

main().catch(console.error);
