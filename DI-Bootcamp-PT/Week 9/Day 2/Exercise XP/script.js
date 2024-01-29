// exercice 1

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);
// output:I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// ----------------------------------------------------------------------------------------
//  Exercise 2: Display Student Info
function displayStudentInfo(objUser) {
  //destructuring
  const { first, last } = objUser;

  return "your full name is ${first} ${last}";
}

const result = displayStudentInfo({ first: "Elie", last: "Schoppik" });

console.log(XPathResult);
// -----------------------------------------------------------------------------------------

// Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);

console.log("original array :", usersArray);

const modifyOutcome = usersArray.map(([user, id]) => [user, id * 2]);

console.log("Modified array :", modifyOutcome);
// ------------------------------------------------------------------------------------------

// Exercise 4 : Person Class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);
//   output: object
// ---------------------------------------------------------------------------------------------

// Exercise 5 : Dog Class

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
//   This option successfully extends the Dog class. It calls super(name) to invoke the constructor of the parent class, ensuring that the name property is properly initialized.
// ---------------------------------------------------------------------------------------------

// Exercise 6 : Challenges

// Evaluate these (ie True or False)

[2] === [2] // flase
{} === {} // false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number); // Outputs 4
console.log(object3.number); // Outputs 4
console.log(object4.number); // Outputs 5

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Creating an instance of the Animal class
const loula = new Animal('Loula', 'dog', 'red');
console.log(loula);

class mamal extends Animal {
  sound () {
    return `Name: ${this.name}, Type: ${this.type}, Color: ${this.color}, Sound: ${sound}`;
  }
}
// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
const farmerCow = new Mammal('Bessie', 'cow', 'white');
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const cowSoundDetails = farmerCow.sound('Moooo');
// Displaying the result
console.log(cowSoundDetails);