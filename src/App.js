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
import Profile from "./components/Profile";
import NotFound from "./components/NotFound"

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<UserCard/>} />
              <Route path="/login" element={<Authentication/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
      </Router>
    </Provider>
  );
}

export default App;
