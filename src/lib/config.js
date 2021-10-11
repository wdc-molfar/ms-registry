const path = require('path');
const yaml_config = require('node-yaml-config');

const config = yaml_config.load(path.join(__dirname, '../../config/common.yml'));
	// console.log(process.env)
	// const config = yaml_config.load(path.resolve(process.cwd(), './config/common.yml'));
	// console.log(path.resolve(process.cwd(), './config/common.yml'), config)

module.exports = config
