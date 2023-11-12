import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate=useNavigate();
  return (
    <div>
      <ul>
        <li><button onClick={()=>navigate('/login')}>Login</button></li>
        <li><button onClick={()=>navigate('/signup')}>SignUp</button></li>
        <li><button onClick={()=>navigate('/home')}>Home</button></li>
        <li><button onClick={()=>navigate('/upload')}>UploadPost</button></li>
        <li><button onClick={()=>navigate('/search')}>Search</button></li>
        <li><button onClick={()=>navigate('/profile')}>Profile</button></li>
      </ul>
    </div>
  )
}

export default LandingPage