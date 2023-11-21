import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Search from './components/Search';
import UploadPost from './components/UploadPost';
import State from './Context/State';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound';
import Context from './Context/Context';
import { useContext } from 'react';

function App() {
  const {userId}=useContext(Context);
  return (
    <State>
      <Router>
      <div>
        <Navbar/>
        <Routes>
          {/* commented out code will add security to the code. Only if the user is logged in, the user will be allowed to enter home. */}
          {/* {(userId)?
          <> */}
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/upload' element={<UploadPost/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
          {/* </>
          :
          <> */}
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<NotFound/>}/>
          {/* </>} */}
        </Routes>
      </div>
      </Router>
    </State>
  );
}

export default App;
