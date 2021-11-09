import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";

import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Authentication from './components/Authentication';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<UserCard/>} />
              <Route path="/login" element={<Authentication/>} />
            </Routes>
      </Router>
    </Provider>
  );
}

export default App;
