import React, { useState,useContext } from 'react';
import '../App.css';
//import { userRegister } from '../Context/State';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable } from "firebase/storage";
//import { storage } from '../firebase.js';
import Context from '../Context/Context';

const SignUp = () => {
  const { userRegister } = useContext(Context);
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

    const res = userRegister(data);

    if (res && res.status) {
      navigate('/home');
    }
  }

  const onUpload = () => {
    // if (!img) return;

    // const storageRef = ref(storage, `images/${user.email}`);
    // const uploadTask = uploadBytesResumable(storageRef, img);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //   }
    // )
  }

  return (
    <div className='whole'>
      <form noValidate onSubmit={onSignUp}>
        <h1>Welcome to Tourism Guide!</h1>
        <h2>Create an Account</h2>
        <div className='form'>
        <input className='name'
          type="text"
          placeholder="Enter name"
          name='name'
          value = {name}
          onChange = {onChange}
          required
         />    
         <br/>     
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
        <p><span>Upload your profile picture</span>
        <input className='browse'
          type="file"
          accept="image/"
          onChange={(e) => setImg(e.target.files[0])}
        />
        </p>
        <br/>
        <button
          type="submit"
          className="button btn-outline-success"
          onClick={onUpload}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
