import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Roles from './components/Roles';
import UserRoles from './components/UserRoles';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Users />
      <Roles />
      <UserRoles />
    </div>
  );
}

export default App;
