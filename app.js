const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
  { name: 'name', type: String },
  { name: 'order', type: String },
  { name: 'payment', type: Number },
  { name: 'exit', type: Boolean },
];

const { name, order, payment, exit } = commandLineArgs(optionsDefinitions);

// node app.js
// node app.js --name=ajspeller
// node app.js --order=PIZZA
// node app.js --payment=100
// node app.js --exit

if (name) {
  console.log(`hello, ${name}, we are serving cake, pizza and salad`);
} else if (order) {
  console.log(`ok, that would be $25, you will pay with ...`);
} else if (payment) {
  console.log(
    `your change is ..... thanks for eating with us .. type --exit to get the order`
  );
} else if (exit) {
  console.log(`thanks`);
} else {
  console.log(`hello, please enter your name`);
}
