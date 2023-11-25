import React, { useState,useContext } from 'react';
import '../App.css';
//import { userRegister } from '../Context/State';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../firebase.js';
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
      Email: email, 
      Name: name,
      Password: password
    };

    const res = userRegister(data);

    if (res && res.status) {
      setTimeout(() => {
        window.location.href = '/';
      }, 100);
      window.location.reload();
    }
  }

  const onUpload = () => {
    if (!img) return;

    const storageRef = ref(storage, `images/${user.email}`);
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    )
  }

  return (
    <div className='whole'>
      <div className='auth_container'>
        <h1 className='head'>Welcome to Tourism Guide!</h1>
        <h2 className='topic' style={{padding:'5px'}}>Create an Account</h2>
        <span className='auth_cont1'>Already a member? <span className='auth_cont2' onClick={()=>navigate('/login')}>Login!</span></span>
        <form noValidate onSubmit={onSignUp} className='form'>
        <input className='name'
          type="text"
          placeholder="Enter name"
          name='name'
          value = {name}
          onChange = {onChange}
          required
         />      
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
        <p><span>Upload your profile picture</span>
        <input className='browse'
          type="file"
          accept="image/"
          onChange={(e) => setImg(e.target.files[0])}
        />
        </p>
        <button
          type="submit"
          className="button btn-outline-success"
          onClick={onUpload}>Register</button>
      </form>
      </div>
    </div>
  )
}

export default SignUp;
