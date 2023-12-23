// Create an array which value is the planets of the solar system.
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Sat"];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (const planet of planets) {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.classList.add(planet.toLowerCase());

  const section = document.querySelector(".listPlanets");
  section?.appendChild(div);
}
