import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const { name, email, password } = user;
  const navigate = useNavigate();

  const onChange = (e) => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  
  const onSignUp = (e) => {
    e.preventDefault();

    const data = {
      _id: email, 
      Name: name,
      Password: password
    };

    axios.post('http://localhost:8082/auth/register', data)
    .then((res) => {
      alert(res.data.title);
      navigate('/home')
    })
    .catch((err) => {
      alert(err.response.data.errorMessage);
      navigate('/signup');
    });
  }

  return (
    <div>
      <form noValidate onSubmit={onSignUp}>
        <input
          type="text"
          placeholder="Enter name"
          name='name'
          value = {name}
          onChange = {onChange}
          required
         />         
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

export default SignUp