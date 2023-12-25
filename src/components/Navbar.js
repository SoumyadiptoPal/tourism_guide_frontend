import React, { useContext } from 'react'
import '../App.css';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
const Navbar = () => {
  const user=JSON.parse(localStorage.getItem('userDetails'));
  const navigate=useNavigate();
  const handleLogout=async()=>{
    localStorage.removeItem('userData');
    localStorage.removeItem('userDetails');
    setTimeout(() => {
      window.location.href = '/login';
    }, 200);
    window.location.reload();
  }
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"0px 20px", backgroundColor:"rgb(25,118,210)", height:"50px", position:"sticky", top:"0px", zIndex:"100"}}>
      <div style={{color:"white", fontSize:"1.5rem", fontWeight:"bolder", cursor:"pointer"}}onClick={()=>navigate('/')}>Tourism Guide</div>
      {(localStorage.getItem('userData'))?
      <>
      <div style={{display:"flex", flexDirection:'row'}}>
        <div style={{marginRight:'15px'}}><Button variant="text" color='error' sx={{fontWeight:'bolder', color:'#ff6262'}} onClick={handleLogout}>Logout</Button></div>
        <Avatar
        src={user.Profile_Pic}
        alt={user.Name}
        onClick={()=>navigate('/profile')}/>
      </div>
      </>
      :
      <>
      </>}
      

    </div>
  )
}

export default Navbar
