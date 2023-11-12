import { Button } from '@mui/material'
import React from 'react'

const Details = ({user}) => {
  return (
    <div>
        <div className='detail_img'>
            <img src={user.profile_pic} width={250} height={250}/>
        </div>
        <div className='detail_cont1'>
            <div style={{fontWeight:'bolder', fontSize:'1.5rem'}}>{user.Name}</div>
            <div style={{display:'flex', textAlign:'center'}}>{user.About_me}</div>
        </div>
        <div className='detail_cont1' style={{flexDirection:'row'}}>
            <Button variant='contained' style={{marginRight:'10px'}}>Followers</Button>
            <Button variant='contained'>Following</Button>
        </div>
        <div className='detail_cont2'>
            <div style={{border:'1px solid black', padding:'1px 5px'}}>
                <span>Email: </span>
                <span style={{marginLeft:'60px'}}>{user.email}</span>
            </div>
            <div style={{border:'1px solid black', padding:'1px 5px'}}>
                <span>Nationality: </span>
                <span style={{marginLeft:'10px'}}>{user.Nationality}</span>
            </div>
        </div>
    </div>
  )
}

export default Details