// const arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//   console.log(item);
// });

/** nodejs module system - share js file
 * 1. how to create a module
 * 2. NPM node package manager
 * 3. cores modules - NodeJS installation
 */

const hello = (name) => {
  console.log("Hello, ${name}");
};

// hello('john');
const sayhellotojs = (name) => {
  console.log("Hello, ${name}, welcome to node js");
};
// module.exports = hello;
module.exports = {
  hello: hello,
  sayhellotojs: sayhellotojs,
};

/* Instruction */
[
  { id: 1, name: "iPhone", price: 700 },
  { id: 2, name: "iPad", price: 600 },
  { id: 3, name: "iWatch", price: 500 },
];
