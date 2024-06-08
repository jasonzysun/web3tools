const Web3 = require('web3').Web3;
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const axios = require("axios");

const account = process.env.ACCOUNT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const rpcUrl = process.env.RPC_URL;
const sendAmount = process.env.SEND_AMOUNT || '1';

// 初始化Web3
const httpProvider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(httpProvider);

// 使用启动时间和RPC URL生成唯一的文件名
const startTime = new Date();
const fileNameDatePart = startTime.toISOString().replace(/[:.]/g, '-');
const rpcUrlNamePart = rpcUrl.replace(/[:/.]/g, '_').slice(0, 30); // 提取RPC URL的部分作为文件名的一部分
const fileName = `transactions_${fileNameDatePart}_${rpcUrlNamePart}.csv`;
async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// 调用函数，每20秒发送一次交易，持续5分钟
const interval = 100;
const duration = 5 * 60 * 1000;
const endTime = Date.now() + duration;

async function waitForHash(txhash) {
    while (true) {
        try {
            let res = await web3.eth.getTransactionReceipt(txhash)
            if (res.status !== undefined) {
                console.log(`block packed succ ${txhash}`)
                return res.blockNumber
            }

        } catch (e) {
        }
        await sleep(interval);
    }
}

async function sendTransaction(nonce, gasPrice) {
    const tx = {
        from: account,
        to: account,
        value: Web3.utils.toWei(sendAmount, 'ether'),
        gas: 21000,
        gasPrice: gasPrice,
        nonce: nonce
    };



    try {
        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        const sentTime = new Date();
        console.log(`Sending transaction with nonce ${nonce} at ${sentTime.toISOString()}`);
        // await waitForHash(signedTx.rawTransaction);
        const payload = {
            jsonrpc: "2.0",
            id: 0,
            method: "eth_sendRawTransaction",
            params: [`${signedTx.rawTransaction}`]
        };
        const response = await axios.post(rpcUrl, payload)
        let txHash = response.data.result;

        let completedTime = new Date();
        let costTime = completedTime - sentTime; // 计算完成交易的时间和发送交易时间之间的差值
        console.log(`Transaction Send To Node cost:${costTime}ms`);

        console.log("txid",txHash)
        let blockNumber = await waitForHash(txHash)
        // const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        let completedTime1 = new Date();
        costTime = completedTime1 - sentTime; // 计算完成交易的时间和发送交易时间之间的差值
        const costTime1 = completedTime1 - completedTime;
        console.log(`Transaction completed with nonce ${nonce} cost: ${costTime}ms,block packed cost: ${costTime1}ms`);
        // setTimeout(run, 3000)
        const data = `${sentTime.toISOString()},${completedTime.toISOString()},${costTime},${costTime1},${nonce},${sendAmount},${txHash},${blockNumber},${rpcUrl}\n`;
        fs.appendFileSync(path.join(__dirname, fileName), data);
    } catch (error) {
        console.error(`Error with transaction for nonce ${nonce}: ${error}`);
    }
    if (Date.now() >= endTime) {
        return
    }
    setTimeout(run, interval)
}


async function run() {
    const gasPrice = await web3.eth.getGasPrice();
    let nonce = await web3.eth.getTransactionCount(account);
    console.log('nonce:', nonce)

    await sendTransaction(nonce++, gasPrice)
}

async function startSendingTransactions(interval, duration) {
    const gasPrice = await web3.eth.getGasPrice();
    let nonce = await web3.eth.getTransactionCount(account);
    console.log('nonce:', nonce)

    const endTime = Date.now() + duration;
    const transactionPromises = [];

    while (Date.now() < endTime) {
        transactionPromises.push(sendTransaction(nonce++, gasPrice));
        await new Promise(resolve => setTimeout(resolve, interval));
    }

    // 等待所有交易完成
    await Promise.all(transactionPromises).then(() => {
        console.log('All transactions have been processed.');
        // 所有异步任务完成后，手动结束进程
        process.exit(0);
    });
}

setTimeout(run, interval)
