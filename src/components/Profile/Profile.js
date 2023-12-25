import React, { useState } from 'react'
import './profile.css'
import Details from './Details'
import AllPosts from './AllPosts'
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const user = location.state?.user || {};
  console.log(location);
  return (
    <div className='profile_cont1'>
        <div className='profile_cont2'>
          <Details user={user}/>
        </div>
        <div className='profile_cont3'>
          <AllPosts user={user}/>
        </div>
    </div>
  )
}

export default Profile