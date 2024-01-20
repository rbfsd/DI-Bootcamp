// Daily Challenge: Car Inventory
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars

let getCarHonda = (carInventory) => {
  const foundCar = carInventory.find((car) => car.car_make === "Honda");

  if (foundCar) {
    return `This is a ${foundCar.car_make} ${foundCar.car_model} from ${foundCar.car_year}.`;
  } else {
    return "No Honda car found in the inventory.";
  }
};

const result = getCarHonda(inventory);
console.log(result);

// part 2
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function sortCarInventoryByYear(carInventory) {
  const sortedInventory = [...carInventory];

  function compareByCarYear(car1, car2) {
    return car1.car_year - car2.car_year;
  }

  sortedInventory.sort(compareByCarYear);

  return sortedInventory;
}

const sortedInventory = sortCarInventoryByYear(inventory);
console.log(sortedInventory);
