// Exercise 1 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// output = [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]
// on utilise l'operateur de decomposition

// ------2------
const country = "USA";
console.log([...country]);
// output = [ 'U', 'S', 'A' ]

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray);
// output = [ undefined, undefined ]

//  Exercise 2 : Employees

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// Using the map() method, push into a new array the firstname of the user and a welcome message.

const welcomeStudent = users.map((user) => "Hello ${user.firstName}");
console.log(welcomeStudent);

// Use filter() to create a new array that only contains Full Stack Residents.
const fullStackResidents = users.filter(
  (user) => user.role === "Full Stack Resident"
);
console.log(fullStackResidents);

const fullStackResidentsLastNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);

console.log(fullStackResidentsLastNames);

// Exercise 3 : Star Wars

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// Use the reduce() method to combine all of these into a single string

let string = epic.reduce((accumulator, currentElement) => {
  return (accumulator = " " + currentElement);
}, "");

console.log(string);

// Exercise 4 : Employees #2

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const studentCoursePassed = students.filter((student) => student.isPassed);

// Bonus : Utilisation de forEach pour féliciter les étudiants qui ont réussi
studentCoursePassed.forEach((student) => {
  console.log(
    `Good job ${student.name}, you passed the course in ${student.course}`
  );
});
