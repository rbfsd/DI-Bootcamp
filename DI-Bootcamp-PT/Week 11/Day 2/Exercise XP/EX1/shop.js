// shop.js
const products = require("./product.js");

// Fonction de recherche
function searchProduct(productName) {
  const product = products.find((item) => item.name === productName);

  if (product) {
    console.log(
      `Product found: ${product.name} - Price: ${product.price} - Category: ${product.category}`
    );
  } else {
    console.log(`Product not found with name: ${productName}`);
  }
}

// Testez la fonction de recherche avec différents noms de produits
searchProduct("Iphone");
searchProduct("Laptop");
searchProduct("Running Shoes");
searchProduct("Non-existent Product");
