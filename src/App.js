import { BrowserRouter , Routes , Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Authentication from './components/Authentication';
import Notfound from "./components/Notfound";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path = "/" element = {<UserCard/>} />
            <Route path = "/login" element = {<Authentication/>} />
            <Route path = "/*"element = {<Notfound/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
