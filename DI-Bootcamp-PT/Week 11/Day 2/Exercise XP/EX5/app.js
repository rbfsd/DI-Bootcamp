const _ = require("lodash");
const math = require("./math");

const resultAdd = math.add(5, 3);
const resultMultiply = math.multiply(5, 3);

const lodashArray = [1, 2, 3, 4, 5];
const lodashSum = _.sum(lodashArray);

console.log(`Result of addition: ${resultAdd}`);
console.log(`Result of multiplication: ${resultMultiply}`);
console.log(`Sum using lodash: ${lodashSum}`);
