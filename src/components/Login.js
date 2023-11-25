import React, { useState,useContext,useEffect } from 'react';
import './Navbar';
import '../App.css';
//import { userLogin } from '../Context/State';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';

const Login = () => {
  const { userLogin,User } = useContext(Context);
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const { email, password } = user;
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.location.reload();
  //   }, [User])
    
  const onChange = (e) => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  
  const onLogin = async (e) => {
    e.preventDefault();

    const data = {
      Email: email, 
      Password: password
    };

    const response = await userLogin(data);

    if (response && response.status) {
      console.log(User);
      setTimeout(() => {
        window.location.href = '/';
      }, 100);
      window.location.reload();
    }
  }

  return (
    <div className='whole'>
      <div className='auth_container'>
      <h1 className='head'>Welcome to Tourism Guide!</h1>
      <h2 className='topic'>Enter your Credentials</h2>
      <span className='auth_cont1'>New to Tourism Guide? <span className='auth_cont2' onClick={()=>navigate('/signup')}>Register Here!</span></span>
      <form noValidate onSubmit={onLogin} className='form'>    
        <input className='name'
          type="email"
          placeholder="Enter email"
          name='email'
          value = {email}
          onChange = {onChange}
           required
         />
        <input className='name'
          type="password"
          placeholder="Enter password"
          name='password'
          value = {password}
          onChange = {onChange}
          required
        />
        <br/>
        <input className='button btn-outline-primary'
          type="submit"
          value="Login"
        />  
      </form>
      </div>
    </div>
  )
}

export default Login;
