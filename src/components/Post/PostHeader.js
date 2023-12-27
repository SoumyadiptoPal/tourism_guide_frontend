import { Avatar, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const PostHeader = ({owner, currentUser}) => {
  const [flag,setFlag]=useState(owner.Followers.includes(currentUser._id));
  const navigate=useNavigate();
  const {addFollower,removeFollower}=useContext(Context);
  
  const addFollowers= async ()=>{
    owner.Followers=[...owner.Followers, currentUser._id];
    await addFollower(owner._id);
    setFlag(true);
  }
  const removeFollowers= async ()=>{
    owner.Followers=owner.Followers.filter(item => item !== currentUser._id);
    await removeFollower(owner._id);
    setFlag(false);
  }
  return (
    <div className='head_cont1'>
        <div className='head_cont2'>
        <Avatar
  alt={owner.Name}
  src={owner.Profile_Pic}
  sx={{ width: 45, height: 45, cursor:"pointer" }}
  onClick={()=>navigate('/profile',{state:{user: owner}})}
/>

    <div style={{marginLeft:8, fontWeight:"bolder", fontSize:'1.2rem'}}>{owner.Name}</div>
        </div>
        <div>
          {
            (flag)
            ?
            <Button variant='outlined' onClick={()=>removeFollowers()}>Following</Button>
            :
            <Button variant='contained' onClick={()=>addFollowers()}>Follow</Button>
          }
        </div>
    </div>
  )
}

export default PostHeader