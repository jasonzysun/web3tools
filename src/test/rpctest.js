const Web3 = require('web3').Web3;
const rpcUrl = require('../config.json').RPC_URL;
const httpProvider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(httpProvider);

async function main() {
    const latestBlockNumber = '0x8ed28';
    const block = await web3.eth.getBlock(latestBlockNumber, true);
    console.log('block:', block)
    console.log('timestamp:', block.timestamp)
    for (let tx of block.transactions) {
        const fromAddress = tx.from;
        const code = await web3.eth.getCode(fromAddress);

        console.log('fromAddress:', fromAddress)
        console.log('code:', code)
    }
}

main()
