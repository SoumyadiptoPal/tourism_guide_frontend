import React from 'react'
import '../App.css';
import { Avatar } from '@mui/material';
const Navbar = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"0px 20px", backgroundColor:"rgb(25,118,210)", height:"50px"}}>
      <div style={{color:"white", fontSize:"1.5rem", fontWeight:"bolder", cursor:"pointer"}}>Tourism Guide</div>
      <div>
        <Avatar
        src='https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/person1.jpg?alt=media&token=1f3332fb-8d4c-4875-8bcb-a6c9e00027fc&_gl=1*pd3h8n*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM4NzU2MC41My4xLjE2OTczODc2ODYuNjAuMC4w'/>
      </div>

    </div>
  )
}

export default Navbar