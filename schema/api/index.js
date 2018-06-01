/**
 * 针对不同环境切换接口
 */
const api = {
   prod: {
      topic: 'https://cnodejs.org/api/v1/topics?page=1&limit=1'
   }
}

module.exports = api.prod;