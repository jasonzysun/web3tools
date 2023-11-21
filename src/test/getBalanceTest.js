const Web3 = require('web3').Web3;
const rpcUrl = require('../config.json').FULL_RPC_URL;
const httpProvider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(httpProvider);
const address = '0xbFD86CC5c6fE5Caffc394c0B50188e16bDe660a7'
const block = 679875
async function main() {
    const balance = await web3.eth.getBalance(address,block);
    console.log(balance)
}

main()