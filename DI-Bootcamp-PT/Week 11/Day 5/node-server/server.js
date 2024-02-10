const express = require("express");
const { products } = require("./config/db");
// initialize express.js

const app = express();

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
