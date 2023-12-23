// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
// const divNodeMethod1 = document.getElementById("usersDiv");
// const divNodeMethod2 = document.querySelector("div");
// 2. The ul DOM node?
// const ulNodeMethod1 = document.getElementById("usersList");
// const ulNodeElement2 = document.querySelector("usersList");
// 3. The second li (with Pete)?
// const liNodeMethod1 = document.querySelector("li:nth-child(2)");
// const liNodeMethod2 = document.querySelector("ul li:nth-child(2)");

// Accessing Nodes With Methods
// element.getElementById()
// element.getElementsByClassName()
// element.getElementsByTagName()
// element.querySelector()

// Creating Elements: CreateElement()
Syntax: document.createElement("tag");
let newDiv = document.createElement("div");

// Creating Text: CreateTextNode()
Syntax: document.createTextNode("text");
let newTextNode = document.createTextNode("Here I am");

// Adding Element : AppendChild()
Syntax: `element.appendChild`;
newDiv.appendChild(newTextNode);
document.body.appendChild(newDiv);

// Accessing / Changing The HTML Content Of An Element: InnerHTML
document.getElementById("header").textContent = "Hello World!";
document.getElementsByTagName("div")[0].innerHTML = "<h1>Hello World!</h1>";

// Deleting Elements: RemoveChild()
let parentElem = document.getElementById("main");
let childElem = document.getElementById("hint");
parentElem.removeChild(childElem);

// Some More Examples:
// getElementById('id')
document.getElementById("demo");

// getElementsByClassName('class')
document.getElementsByClassName("demo");

// getElementsByTagName('tag')
document.getElementsByTagName("p");

// querySelector('css selector')
document.querySelector("#demo-query");

// querySelectorAll('css selector')
let demoQueryAll = document.querySelectorAll(".demo-query-all");

demoQueryAll.forEach((query) => {
  query.style.border = "1px solid green";
});

// If you are working several times with one element, you should put it in a variable.
let item = document.getElementById("menu");
item.style.background = "red";
item.style.display = "block";
