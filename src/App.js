import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Authentication from './components/Authentication';

function App() {
  return (
      <div>
          <Navbar/>
          <UserCard/>
          {/* <Authentication/> */}
      </div>
  );
}

export default App;
