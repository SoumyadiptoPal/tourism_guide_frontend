import React from 'react'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
const NotFound = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
        <WarningAmberRoundedIcon color='error' sx={{fontSize:"300px"}}/>
        <div style={{fontSize:'2.5rem', fontWeight:"bolder"}}>404 Error: Page Not Found</div>
    </div>
  )
}

export default NotFound