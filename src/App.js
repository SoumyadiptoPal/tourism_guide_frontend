import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Search from './components/Search';
import UploadPost from './components/UploadPost';
import State from './Context/State';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <State>
      <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/upload' element={<UploadPost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
      </Router>
    </State>
  );
}

export default App;
