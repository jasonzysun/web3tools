const axios = require('axios');
const fs = require('fs');

const apiUrl = 'https://qng.meerscan.io/api';
const batchSize = 1000;
const totalAddresses = 143079;
const outputFile = 'output.csv';
const concurrency = 20;
// 计算总共需要进行的请求次数
const totalRequests = Math.ceil(totalAddresses / batchSize);

// 定义一个辅助函数，用于追加写入数据到文件中
function appendToFile(data) {
    fs.appendFile(outputFile, data, (err) => {
        if (err) {
            console.error('写入CSV文件时出错:', err);
        }
    });
}
// 发起每个请求获取地址数据
async function fetchData(page) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                module: 'account',
                action: 'listaccounts',
                page: page,
                offset: batchSize
            }
        });

        const data = response.data;
        if (data.status === '1') {
            const result = data.result;

            // 处理获取到的数据，将其存储到CSV文件中
            const csvData = result.map(item => `${item.address},${item.balance},${item.stale}\n`).join('');
            appendToFile(csvData);

            console.log(`第 ${page}/${totalRequests} 页数据已成功写入到 ${outputFile}，完成时间：`,new Date());

            // 继续请求下一页数据
            if (page + concurrency <= totalRequests) {
                fetchData(page + concurrency);
            }
        } else {
            console.error('获取数据失败:', data.message);
        }
    } catch (error) {
        console.error('发生错误:', error.message);
    }
}

// 清空或创建输出文件
fs.writeFileSync(outputFile, '');
console.log('任务开始，时间：',new Date())
// 开始发起第一页的请求（创建五个并发）
for (let i=1; i<= concurrency; i++){
    fetchData(i);
}
