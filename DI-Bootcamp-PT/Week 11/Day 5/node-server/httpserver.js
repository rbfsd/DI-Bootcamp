const { log } = require("console");
const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log("Hello from my first server");
  //   console.log("url=>", request.url);
  //   console.log("method=>", request.method);
  //   console.log("headers=>", request.headers);
  //   response.end("<h1>Hi from my server</h1>");

  const products = [
    {
      name: "Iphone",
      price: 300,
      category: "Electronics",
    },
    {
      name: "Laptop",
      price: 800,
      category: "Electronics",
    },
    {
      name: "Running Shoes",
      price: 50,
      category: "Sports",
    },
  ];

  response.end(JSON.stringify(products));
});

server.listen(3001);
// on the browser open http://localhost:3001 and see the h1
