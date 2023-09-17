import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
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

    axios.post('http://localhost:8082/auth/login', data)
    .then((res) => {
      alert(res.data.title);
      navigate('/home')
    })
    .catch((err) => {
      alert(err.response.data.errorMessage);
      navigate('/login');
    });
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