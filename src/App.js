import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from './components/LandingPage';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Search from './components/Search';
import UploadPost from './components/UploadPost';
import State from './Context/State';

function App() {
  return (
    <State>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/upload' element={<UploadPost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
    </Router>
    </State>
  );
}

export default App;
