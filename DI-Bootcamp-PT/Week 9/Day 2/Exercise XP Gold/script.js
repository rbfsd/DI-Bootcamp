// ex 1
function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`);
}
const fullName = printFullName({ first: 'John', last: 'Doe' });
console.log(fullName);

// ex2

function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
}
// Examples
const example1 = keysAndValues({ a: 1, b: 2, c: 3 });
console.log(example1); // Outputs: [["a", "b", "c"], [1, 2, 3]]

const example2 = keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
console.log(example2); // Outputs: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

const example3 = keysAndValues({ key1: true, key2: false, key3: undefined });
console.log(example3); // Outputs: [["key1", "key2", "key3"], [true, false, undefined]]

// ex3

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count);

//   output = 3