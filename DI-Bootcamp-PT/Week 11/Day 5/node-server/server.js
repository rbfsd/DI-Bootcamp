const express = require("express");
const bodyParser = require("body-parser");
const { products } = require("./config/db");
// initialize express.js

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(3001);

app.get("/api/products", (req, res) => {
  // const newProducts = products.map(item=>{
  //     return {}
  // })
  res.json(products);
});

app.get("/api/products/:name", (req, res) => {
  console.log(req.params);
  const { name } = req.params;
  const product = products.find((item) => item.name === name);
  if (!products) {
    res.status(404).json({ msg: "not found" });
  }
  res.json(products);
});

app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filterproducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filterproducts.length === 0) {
    return res.status(404).json({ msg: "no product for your search querry" });
  }

  //   http://localhost:3001/api/search?name=ip
  res.json(filterproducts);
});

/** POST, PUT, DELETE, UPDATE */
app.put("/api/products", (req, res) => {
  const { name, price } = req.body;

  const indx = products.findIndex((item) => item.id == id);

  products[indx] = { ...products[indx], name, price };
  res.json(products);
});

/**create a new product */
app.post("/api/products", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);
  res.json(products);
});
