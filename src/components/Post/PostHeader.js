import { Avatar, Button } from '@mui/material'
import React from 'react'

const PostHeader = ({name, profilePic}) => {
  return (
    <div className='head_cont1'>
        <div className='head_cont2'>
        <Avatar
  alt="Remy Sharp"
  src={profilePic}
  sx={{ width: 45, height: 45 }}
/>

    <div style={{marginLeft:8, fontWeight:"bolder", fontSize:'1.2rem'}}>{name}</div>
        </div>
        <div>
            <Button variant='contained'>Follow</Button>
        </div>
    </div>
  )
}

export default PostHeader