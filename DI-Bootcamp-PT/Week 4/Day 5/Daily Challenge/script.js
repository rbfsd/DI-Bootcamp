let i = 99;
let num = 1;

while (i > 0) {
  console.log(i + " bottles of beer on the wall");
  console.log(i + " bottles of beer");

  i = i - num;
  if (i < 0) {
    console.log("Take " + (num + i) + "down, pass them arround");
    console.log("0 bottles of beer on the walll");
  } else if (num === 1) {
    console.log("Take " + num + " down, pass it around");
  } else {
    console.log("Take " + num + " down, pass them around");
  }

  num++;
}
