// Exercise 1 : Users

// Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);
// Change the name “Pete” to “Richard”.
document.querySelector(".list").children[1].textContent = "Richard";
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
lists[1].children[1].remove();
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
const list = document.querySelectorAll(".list");
list.forEach((list) => (list.firstElementChild.textContent = "Ilay"));

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
list.forEach((list) => list.classList.add("student_list"));
// Add the classes university and attendance to the first <ul>.
const firstUl = document.querySelector("ul.list.student_list");
firstUl.classList.add("university", "attendance");

// Exercise 2 : Users And Style

var divBackgroundColor = document.querySelector("div").style.backgroundColor;
if (divBackgroundColor === "lightblue") {
  alert("Hello John and Pete");
}

// Exercise 3 : Change The Navbar

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navBar = document.getElementById("#navBar");
navBar.setAttribute("id", "socialNetworkNavigation");
// First, create a new <li> tag (use the createElement method).
let liTag = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
const node = document.createTextNode("Logout");
// Append the text node to the newly created list node (<li>).
liTag.appendChild(node);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
navBar.appendChild(liTag);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
const firstLi = ul?.firstElementChild;
const lastLi = ul?.lastElementChild;
console.log("firstLi:", firstLi);
console.log("lastLi:", lastLi);
// Display the text of each link. (Hint: use the textContent property).
console.log("firstLi?.textcontent");
console.log("lastLi?.textcontent");

// Exercice 4: My Book List

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Create an array called allBooks with objects representing books
var allBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://example.com/great-gatsby.jpg",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://example.com/to-kill-a-mockingbird.jpg",
    alreadyRead: false,
  },
  // Add more books as needed
];

const table = document.createElement("table");
table.innerHTML = (
  <thead>
    <tr>
      <th>My Book Lit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>one</td>
    </tr>
  </tbody>
);

const bookListDiv = document.querySelector(".list-books");
bookListDiv?.append(table);
