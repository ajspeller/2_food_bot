const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
  { name: 'name', type: String },
  { name: 'order', type: String },
  { name: 'payment', type: Number },
];

const options = commandLineArgs(optionsDefinitions);

console.log('options: ', options);
