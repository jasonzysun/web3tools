const Web3 = require('web3').Web3;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

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

async function sendTransaction(nonce, gasPrice) {
    const tx = {
        from: account,
        to: account,
        value: Web3.utils.toWei(sendAmount, 'ether'),
        gas: 21000,
        gasPrice: gasPrice,
        nonce: nonce
    };

    const sentTime = new Date();
    console.log(`Sending transaction with nonce ${nonce} at ${sentTime.toISOString()}`);

    try {
        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        const completedTime = new Date();
        const costTime = completedTime - sentTime; // 计算完成交易的时间和发送交易时间之间的差值
        console.log(`Transaction completed with nonce ${nonce} at ${completedTime.toISOString()}`);

        const data = `${sentTime.toISOString()},${completedTime.toISOString()},${costTime},${nonce},${sendAmount},${receipt.transactionHash},${receipt.blockNumber},${rpcUrl}\n`;
        fs.appendFileSync(path.join(__dirname, fileName), data);
    } catch (error) {
        console.error(`Error with transaction for nonce ${nonce}: ${error}`);
    }
}

async function startSendingTransactions(interval, duration) {
    const gasPrice = await web3.eth.getGasPrice();
    let nonce = await web3.eth.getTransactionCount(account);
    console.log('nonce:',nonce)

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

// 调用函数，每20秒发送一次交易，持续5分钟
const interval = 20000;
const duration = 5 * 60 * 1000;
startSendingTransactions(interval, duration);
