import React, { useState } from 'react';
import '../App.css';
import { userRegister } from '../Context/State';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../firebase.js';

const SignUp = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const { name, email, password } = user;
  const [img, setImg] = useState('');
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
      Password: password,
      Profile_Pic: `images/${email}`
    };

    userRegister(data);
  }

  const onUpload = () => {
    if (!img) return;

    const storageRef = ref(storage, `images/${user.email}`);
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    )
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
          type="file"
          accept="image/"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button
          type="submit"
          className="button"
          onClick={onUpload}>Register</button>
      </form>
    </div>
  )
}

export default SignUp;