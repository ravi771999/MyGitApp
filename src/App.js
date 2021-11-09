import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Authentication from './components/Authentication';

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<UserCard/>} />
            <Route path="/login" element={<Authentication/>} />
          </Routes>
      </Router>
  );
}

export default App;
