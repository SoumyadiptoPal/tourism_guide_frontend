import React, { useState } from 'react';
import './Navbar';
import '../App.css';
import { userLogin } from '../Context/State';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const { email, password } = user;
  const navigate = useNavigate();

  const onChange = (e) => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  
  const onLogin = (e) => {
    e.preventDefault();

    const data = {
      _id: email, 
      Password: password
    };

    userLogin(data);
  }

  return (
    <div className='whole1'>
      <h1 className='head'>Welcome to Tourism Guide!</h1>
      <h2 className='topic'>Enter your Credentials</h2>
      <form noValidate onSubmit={onLogin}>    
        <input className='name'
          type="text"
          placeholder="Enter email"
          name='email'
          value = {email}
          onChange = {onChange}
           required
         />
         <br/>
        <input className='name'
          type="text"
          placeholder="Enter password"
          name='password'
          value = {password}
          onChange = {onChange}
          required
        />
        <br/>
        <input className='button btn-outline-primary'
          type="submit"
        />  
      </form>
    </div>
  )
}

export default Login;