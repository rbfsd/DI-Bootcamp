function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let buttonJs = document.getElementById("button");
buttonJs.addEventListener("click", displayRandomPerson);

async function displayRandomPerson() {
  const idNumber = getRandomNumber(1, 83);

  fetch(`https://www.swapi.tech/api/people/${idNumber}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const nameJS = data.result.properties.name;
      let displayName = document.getElementById("name");
      displayName.textContent = `${nameJS}`;

      const heightJS = data.result.properties.height;
      let displayHeight = document.getElementById("height");
      displayHeight.textContent = `HEIGHT: ${heightJS}`;

      const genderJS = data.result.properties.gender;
      let displayGender = document.getElementById("gender");
      displayGender.textContent = `GENDER: ${genderJS}`;

      const birthYearJS = data.result.properties.birth_year;
      let displayBirthYear = document.getElementById("birth-year");
      displayBirthYear.textContent = `BIRTH YEAR: ${birthYearJS}`;

      const homeWorldJS = data.result.properties.homeworld;
      let displayHomeworld = document.getElementById("home-world");
      displayHomeworld.textContent = `HOME WORLD: ${homeWorldJS}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
