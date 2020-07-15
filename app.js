const commandLineArgs = require('command-line-args');
const fs = require('fs');

const optionsDefinitions = [
  { name: 'name', type: String },
  { name: 'order', type: String },
  { name: 'payment', type: Number },
  { name: 'exit', type: Boolean },
];

let { name, order, payment, exit } = commandLineArgs(optionsDefinitions);

// node app.js
// node app.js --name=ajspeller
// node app.js --order=PIZZA
// node app.js --payment=100
// node app.js --exit

let getJson = fs.readFileSync('db.json');
const data = JSON.parse(getJson);

const saveIt = (newData) => {
  fs.writeFileSync('db.json', JSON.stringify(newData));
};

if (name) {
  console.log(`hello, ${name}, we are serving cake, pizza and salad`);
  data.name = name;
  saveIt(data);
} else if (order) {
  console.log(`ok, ${data.name} that would be $25, you will pay with ...`);
  data.order = order;
  saveIt(data);
} else if (payment) {
  data.payment = payment;
  console.log(
    `your change is ${
      payment - 25
    } thanks for eating with us .. type --exit to get the order`
  );
  saveIt(data);
} else if (exit) {
  console.log(`data: `, data);
  console.log(`thanks`);
  for (prop in data) {
    data[prop] = '';
  }
  saveIt(data);
} else {
  console.log(`hello, please enter your name`);
}
