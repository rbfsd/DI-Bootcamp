let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

var displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log("fruits :" + fruit);
  });
};

var cloneGroceries = () => {
  let user = client;

  client = "Betty";

  var shopping = groceries;

  shopping.totalPrice = "35$";

  shopping.other.paid = false;

  displayGroceries();
};

cloneGroceries();
