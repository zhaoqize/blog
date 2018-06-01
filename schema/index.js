const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
const chalk = require('chalk');

// schema
const topicSchema = require('./schemas/cnode.topic.json');

// json
const getTopic = require('./json/cnode.topic.js');

function checkTopic () {
  getTopic()
    .then((resp) => {
      const validate = ajv.compile(topicSchema);
      const valid = validate(resp.data);
      console.log('---------------------------------------');
      console.log(chalk.green(`请求url: ${resp.request.path}`));
      if (valid) {
        console.log(chalk.green(`校验成功: ${valid}`));
      } else {
        console.log(chalk.red(`校验失败: ${validate.errors}`));
      }
      console.log('---------------------------------------');
    })
    .catch((err) => {
      console.log('---------------------------------------');
      console.log(chalk.red(`请求失败: ${err}`));
      console.log('---------------------------------------');
    })
}

checkTopic();
