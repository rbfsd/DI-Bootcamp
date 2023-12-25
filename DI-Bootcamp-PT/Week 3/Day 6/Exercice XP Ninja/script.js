// Exercise 1 : Checking The BMI

let person1 = {
  fullName: "raphael Belhassen",
  mass: 79,
  height: 180,
  BMI: function calculateBmi() {
    let bmi = this.mass / (this.height / 100) ** 2;
    console.log(bmi);
    return bmi;
  },
};

let person2 = {
  fullName: "Johana Belhassen",
  mass: 50,
  height: 160,
  BMI: function calculateBmi() {
    let bmi = this.mass / (this.height / 100) ** 2;
    console.log(bmi);
    return bmi;
  },
};

function compareTheBmi() {
  if (person1.BMI() > person2.BMI()) {
    console.log(`${person1.fullName} has the higher BMI`);
  } else if (person1.BMI() < person2.BMI()) {
    console.log(`${person2.fullName} has the higher BMI`);
  } else {
    console.log("They have the same BMI");
  }
}
compareTheBmi();

// Exercise 2 : Grade Average
// Create a function called findAvg(gradesList) that takes an argument called gradesList.
function calculateAverage(gradesList) {
  let sum = 0;

  // Parcourir toutes les notes et les additionner
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  // Calculer la moyenne
  let average = sum / gradesList.length;

  return average;
}
function findAvg(gradesList) {
  // Appeler la fonction pour calculer la moyenne
  let average = calculateAverage(gradesList);

  // Afficher la moyenne
  console.log("La moyenne est : " + average);

  // Vérifier si la moyenne est supérieure à 65
  if (average > 65) {
    console.log("Félicitations, vous avez réussi !");
  } else {
    console.log("Désolé, vous devez refaire le cours.");
  }
}
let grades = [85, 90, 78, 92, 60];
findAvg(grades);
