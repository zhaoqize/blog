const axios = require('axios');
const API = require('../api/index');

/**
 * 描述：获取cnode topic
 */
const getTopic = function () {
  return new Promise((resolve, reject) => {
    axios.get(API.topic)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
  })
}

module.exports = getTopic;