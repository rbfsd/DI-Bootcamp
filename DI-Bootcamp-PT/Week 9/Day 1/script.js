// object

// accessing object method
objectName.methodName();
name = person.fullName();

// method of the object constructor

// Object.keys(obj): return an array of key;
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: ["a", "b", "c"]
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// expected output: ["somestring", 42, false]

// Object.values(obj) – returns an array of values.
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.entries(object1));
// expected output:
// [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]

// Object.entries(obj)– returns an array of [key, value] pairs.
for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// a: somestring
// b: 42
// c: false

// Object.fromEntries(array)– returns an object of {key: value} pairs.
const shopping = [
  ["apple", "$2"],
  ["pear", "$1"],
  ["banana", "$0.77"],
];

const shoppingObject = Object.fromEntries(shopping);
console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }

// exercice

let myObj = {
  name: "John",
  lastName: "Doe",
  age: 25,
  friends: ["Mark", "Lucie", "Ana"],
};

// Count keys and values
const keys = Object.keys(myObj);
const values = Object.values(myObj);

// Display information
for (let i = 0; i < keys.length; i++) {
  console.log(
    `The ${i + 1} key is: ${keys[i]} - The ${i + 1} value is: ${values[i]}`
  );
}

// object destructuring
// Créer un objet
const personne = {
  nom: "John",
  age: 30,
  ville: "Paris",
};

// Utiliser la déstructuration pour extraire des valeurs
const { nom, age, ville } = personne;

// Afficher les valeurs extraites
console.log(nom); // Output: John
console.log(age); // Output: 30
console.log(ville); // Output: Paris

// nested object destructuring
// La déstructuration d'objet imbriqué en JavaScript permet d'extraire des valeurs à partir d'objets qui contiennent d'autres objets comme propriétés.
// Cela permet d'accéder facilement aux valeurs des objets internes sans avoir à utiliser une notation par points multiple.
const personne = {
  nom: "John",
  age: 30,
  adresse: {
    rue: "123 Rue Principale",
    ville: "Paris",
    codePostal: "75001",
  },
};
// Utiliser la déstructuration pour extraire des valeurs d'un objet imbriqué
const {
  nom,
  age,
  adresse: { rue, ville, codePostal },
} = personne;

// Afficher les valeurs extraites
console.log(nom); // Output: John
console.log(age); // Output: 30
console.log(rue); // Output: 123 Rue Principale
console.log(ville); // Output: Paris
console.log(codePostal); // Output: 75001

// Object Destructuring Used As An Assignment To A Function
const student = {
  name: "John Doe",
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

// Without Destructuring
function displaySummary(student) {
  console.log("Hello, " + student.name);
  console.log("Your Maths score is " + (student.scores.maths || 0));
  console.log("Your English score is " + (student.scores.english || 0));
  console.log("Your Science score is " + (student.scores.science || 0));
}

// With Destructuring
function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 },
}) {
  console.log("Hello, " + name);
  console.log("Your Maths score is " + maths);
  console.log("Your English score is " + english);
  console.log("Your Science score is " + science);
}

displaySummary(student);

// Spreading
let obj = { foo: 1, bar: 2 };
let newObj = { ...obj, baz: 3 };
console.log(newObj); //{ foo: 1, bar: 2, baz: 3 }

// If property keys clash, the property that is mentioned last “wins”:
let obj = { foo: 1, bar: 2, baz: 3 };
let newObj = { ...obj, foo: true };
console.log(newObj); //{ foo: true, bar: 2, baz: 3 }

let newObj = { foo: true, ...obj };
console.log(newObj); //{ foo: 1, bar: 2, baz: 3 }

et newObj = {...'abc'}
console.log(newObj) //{ '0': 'a', '1': 'b', '2': 'c' }

let newObj = {...['a', 'b']}
console.log(newObj) //{ '0': 'a', '1': 'b' }

// how to copy an object 
let myCar = {
    color : 'blue',
    details : {
      plateNumber: 123,
      name : "Ford"
    }
  }
  
  let myNewCar = {...myCar}
  console.log("myNewCar : ", myNewCar) 
  // myNewCar :  
  // { 
  //      color: 'blue', 
  //      details: { plateNumber: 123, name: 'Ford' } 
  // }
  
  // SHALLOW COPYING
  myCar.color = "red"
  console.log("myNewCar.color :", myNewCar.color)
  // myNewCar.color : blue -- UNCHANGED
  console.log("myCar.color :", myCar.color)
  // myCar.color : red -- CHANGED
  
  // DEEP COPYING
  myCar.details.plateNumber = 345
  console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
  // myNewCar.details.plateNumber : 345 -- CHANGED
  console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
  // myCar.details.plateNumber : 345 : red -- CHANGED


// Object & Classes

// Classes are a template for creating objects.
// Class Declarations
 class Rectangle {
    // use the class keyword with the name of the class (“Rectangle” here).
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  Constructor
// The constructor method is a unique method for creating 
// and initializing an object created with a class. 
// The properties are assigned inside a constructor() method.

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  //instance of the class Rectangle
  const square = new Rectangle(10, 10);
  
  //calling the method
  console.log(square.calcArea()); // 100
  
  console.log(square)
  //Rectangle {height: 10, width: 10}
  //__proto__:
  //  constructor: class Rectangle
  //  calcArea: ƒ calcArea()
  //__proto__: Objec


//   Exercise
// Analyse the code below. Display the type of each rabbit and make them speak

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// display the type for each rabbit
console.log('type of killerRabbit: ${killerRabbit.type}');
console.log('type of blackRabbit: ${blackRabbit.type}');

// make them speak
killerRabbit.speak("I'm very dangerous!");
blackRabbit.speak("I'm dark and mysterious!");


// Gater & Setter

// Getters, as the name suggests, is a method that lets us get some data from a class.
// Setters are methods that give us the ability to set some fields of the class.

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
  
    }
    // Getter
    get area() {
      return this.height * this.width;
    }
  
    // Setter
    set area(factor) {
      this.width = this.height*factor
    }
  }
  
  const square = new Rectangle(10, 10);
  square.area = 2
  square.area //200

// The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

class Animal { 
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  
  class Dog extends Animal {
    constructor(name,noise) {
      super(name); // call the super class constructor and pass in the name parameter
      // Add a new property
      this.noise = noise;
    }
  
    speak() {
      console.log(`${this.name} barks.It says ${this.noise}`);
    }
  }
  
  let d = new Dog('Mitzie', "Wouaf");
  console.log(d.name) // Mitzie
  d.speak(); // Mitzie barks.It says Wouaf
  console.log(d)
  //Dog {name: "Mitzie", noise: "Wouaf"}
  //__proto__: Animal
  //  constructor: class Dog
  //  speak: ƒ speak()
  //__proto__: Object





// date 
let date = document.getElementById('datetime');
date.addEventListener("change",function(event){
    let date = new Date(event.target.value);
    console.log(date);
  }
);

let now = new Date();
console.log(now);

let dateString = now.toString();
console.log('toString',dateString);

let day = now.getDay();
console.log('getDay',day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
console.log('dayNames',dayName);

console.log('getMonth',now.getMonth() + 1)
//returns the month of the date from 0 to 11,
//with 0 being January and 11 being December.

console.log('getDate',now.getDate())
// gives us the number for the dat of the month.

console.log('getFullYear',now.getFullYear())
// returns the 4 digit version of the year.

console.log('getHours',now.getHours())
// gives us a number from 0 to 23,
//which corresponds to midnight and 11pm.

console.log('getMinutes',now.getMinutes())
// returns the minutes of the hour from 0 to 59.

console.log('getSeconds',now.getSeconds())
// returns the seconds of the minute from 0 to 59.

console.log('getMilliseconds',now.getMilliseconds())
// returns a number from 0 to 999.

console.log('getTime',now.getTime())
// gives us the number of milliseconds that have elapsed since Jan 1, 1970 midnight UTC.

let today = new Date();
let anotherDay = new Date(2021,1,19, 11, 55)
let diff = anotherDay - today;
console.log('diff',diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log('days',days);
console.log(Math.floor(days));