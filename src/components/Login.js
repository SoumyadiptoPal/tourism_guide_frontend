import React, { useState } from 'react';
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
    <div>
      <form noValidate onSubmit={onLogin}>    
        <input
          type="text"
          placeholder="Enter email"
          name='email'
          value = {email}
          onChange = {onChange}
           required
         />
        <input
          type="text"
          placeholder="Enter password"
          name='password'
          value = {password}
          onChange = {onChange}
          required
        />
        <input
          type="submit"
        />  
      </form>
    </div>
  )
}

export default Login