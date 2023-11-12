import React from 'react'
import './profile.css'
import Details from './Details'
import AllPosts from './AllPosts'
import { user } from '../Post/data'
const Profile = () => {
  return (
    <div className='profile_cont1'>
        <div className='profile_cont2'>
          <Details user={user}/>
        </div>
        <div className='profile_cont3'>
          <AllPosts/>
        </div>
    </div>
  )
}

export default Profile