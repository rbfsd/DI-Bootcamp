// exercice1

// let myFavoriteFood = "bkeila";
// let favoriteMeal = "dinner";

// console.log("I eat " + myFavoriteFood + " at every " + favoriteMeal);

// exercise 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// part 1
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
const Sentence =
  " I have watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}";

// Console.log a sentence using both of the variables created above
console.log(Sentence);

// part 2
myWatchedSeries[2] = "friends";

myWatchedSeries.push("breaking bad");

myWatchedSeries.unshift("bettter call saul");

delete myWatchedSeries(1);

const moneyHeist = myWatchedSeries[2];

console.log(moneyHeist[2]);

console.log(myWatchedSeries);

// Exercice 3

let celsiusTemperature = 22;
let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
console.log(" ${celciusTemperature}°C is ${fahrenheitTemperature}°F");

// exercice 4

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55 because 34+21 is equal to 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23 because a=2 & b=21
// Actual: 23

// exercice 5

typeof 15;
// Prediction:number
// Actual:number

typeof 5.5;
// Prediction:number
// Actual: number

typeof NaN;
// Prediction:number
// Actual:number

typeof "hello";
// Prediction:string
// Actual:string

typeof true;
// Prediction:boolean
// Actual:boolean

typeof (1 != 2);
// Prediction: boolean
// Actual:boolean

"hamburger" + "s";
// Prediction:string
// Actual:strings

"hamburgers" - "s";
// Prediction:NaN
// Actual:NaN

"1" + "3";
// Prediction: 13
// Actual:13

"1" - "3";
// Prediction:-2
// Actual: -2

"johnny" + 5;
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5;
// Prediction:NaN
// Actual:NaN

99 * "hello";
// Prediction:NaN
// Actual:NaN

1 != 1;
// Prediction:false
// Actual:false

1 == "1";
// Prediction:true
// Actual:true

1 === "1";
// Prediction:false
// Actual:false

// exercice 6

5 + "34";
// Prediction: 534
// Actual:534

5 - "4";
// Prediction:1
// Actual:1

10 % 5;
// Prediction:0
// Actual:0

5 % 10;
// Prediction:5
// Actual:5

"Java" + "Script";
// Prediction:JavaScript
// Actual:JavaScript

" " + " ";
// Prediction:
// Actual: ' '

" " + 0;
// Prediction:'0'
// Actual:'0'

true + true;
// Prediction:2
// Actual:2

true + false;
// Prediction: 1
// Actual:1

false + true;
// Prediction:1
// Actual:1

false - true;
// Prediction:-1
// Actual:-1

!true;
// Prediction: false
// Actual:false

3 - 4;
// Prediction: -1
// Actual:-1

"Bob" - "bill";
// Prediction:NaN
// Actual:NaN
