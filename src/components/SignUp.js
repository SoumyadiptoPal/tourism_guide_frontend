import React, { useState,useContext } from 'react';
import '../App.css';
//import { userRegister } from '../Context/State';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {
  const { userRegister,uploadImage } = useContext(Context);
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })
  const [flag, setFlag] = useState(false);
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
  
  const onSignUp = async (e) => {
    e.preventDefault();
    setFlag(true);

    const data = {
      Email: email, 
      Name: name,
      Password: password
    };

    let url;
    if (img) url = await uploadImage(img);
    data['Profile_Pic'] = url;

    const res = await userRegister(data);

    if (res && res.status) {
      setTimeout(() => {
        window.location.href = '/';
      }, 100);
      window.location.reload();
    }
    setFlag(false);
  }

  return (
    <div className='whole'>
      {flag === true && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left:0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity:1,
            background: "rgba(255,255,255,0.5)",
            zIndex: 200,
          }}
        >
          <ClipLoader
            color="blue"
            loading={flag}
            size={50}
            cssOverride={{
              borderWidth: 5,
            }}
            width="30px"
            aria-label="Loading Spinner"
            data-testid="loader"
            borderWidth="20px"
          />
          <h3 style={{ marginLeft: "20px" }}>Please wait....</h3>
        </div>
      )}
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
        >Register</button>
      </form>
      </div>
    </div>
  )
}

export default SignUp;
