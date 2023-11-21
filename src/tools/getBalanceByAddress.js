const Web3 = require('web3').Web3;
const fs = require('fs');
const rpcUrl = require('../config.json').FULL_RPC_URL;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const httpProvider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(httpProvider);
function readCSV(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
        }, {});
    });
}

const userList = readCSV('./addresses.csv');
console.log(userList.length)

区块高度列表
const blocks = [774358, 1049066];


const outputFile = 'user_balances_at_block_' + block + '.csv';
const totalAddresses = userList.length;
const concurrency = 5;


// 设置CSV文件的列
const csvHeader = [{ id: 'user_address', title: 'User Address' }];
blocks.forEach(block => {
    csvHeader.push({ id: `block_${block}`, title: `Balance at Block ${block}` });
});


// 设置CSV文件输出路径和标题
const csvWriter = createCsvWriter({
    path: outputFile,
    header: csvHeader
});

// 异步函数用于查询每个地址在不同区块的余额
async function fetchBalance(userAddress, block) {
    return await web3.eth.getBalance(userAddress, block);
}

// 处理每个地址的所有区块
async function processAddress(index) {
    const user = userList[index];
    const userBalanceData = { user_address: user.user_address };

    for (const block of blocks) {
        userBalanceData[`block_${block}`] = await fetchBalance(user.user_address, block);
    }

    // 将余额数据写入CSV文件
    await csvWriter.writeRecords([userBalanceData]);
    console.log('CSV file updated for address index', index);

    // 继续请求下一个地址
    if (index + concurrency < totalAddresses) {
        processAddress(index + concurrency);
    }
}

// 清空或创建输出文件
fs.writeFileSync(outputFile, '');
console.log('任务开始，时间：',new Date())
// 开始发起第一页的请求（创建五个并发）
for (let i=0; i< concurrency; i++){
    fetchBalances(i);
}
