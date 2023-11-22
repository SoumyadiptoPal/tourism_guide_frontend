import React from 'react'
import PostContainer from './Post/PostContainer'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();

  return (
    <div>
      <PostContainer/>
      <div className='Home_button' onClick={()=>navigate('/upload')}>
        <AddIcon sx={{height:"100px",width:"100px", color:'#1976d2'}}/>
      </div>
    </div>
  )
}

export default Home