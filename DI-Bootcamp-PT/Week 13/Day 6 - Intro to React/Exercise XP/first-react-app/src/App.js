import logo from "./logo.svg";
import "./App.css";
import UserFavoriteAnimals from "./Component/UserFavoriteAnimals";
import Exercise from "./Component/Exercices3";

function App() {
  // exercie 1
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // exercie 2
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* exercice 1 */}
        <p>Hello World!</p>
        {myelement}
        {sum}
        <p>React is {sum} times better with JSX</p>
        {/* exercice 2 */}
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />

        {/* exercice 3 */}
        <Exercise />
      </header>
    </div>
  );
}

export default App;
