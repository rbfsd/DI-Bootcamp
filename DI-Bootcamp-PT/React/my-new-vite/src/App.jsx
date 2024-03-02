import './App.css'
import users from './users.json';
import User from "./components/User"
// console.log(users);

function App() {
  return (<>
    {
      users.map(item => {
        return <User
        id = {item.id}
        name = {item.name}
        username = {item.username}
        email = {item.email}
        />
      })
    }
  </>);
}

export default App
