import React, { useState } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button } from '@mui/material';

const PostFooter = ({likes,comments,shares}) => {
    const [like,setLike]=useState(false);
    const [comment,setComment]=useState(false);
    const [share,setShare]=useState(false);
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Button variant='text' onClick={()=>setLike(!like)}>{(like)?<ThumbUpIcon/>:<ThumbUpOutlinedIcon />} <span style={{fontSize:'0.9rem', marginLeft:'10px'}}>{likes}</span></Button>
        <Button variant='text' onClick={()=>setComment(!comment)}>{(comment)?<ChatBubbleIcon/>:<ChatBubbleOutlineOutlinedIcon/>} <span style={{fontSize:'0.9rem', marginLeft:'10px'}}>{comments}</span></Button>
        <Button variant='text' onClick={()=>setShare(!share)}>{(share)?<ShareIcon/>:<ShareOutlinedIcon/>} <span style={{fontSize:'0.9rem', marginLeft:'10px'}}>{shares}</span></Button>
    </div>
  )
}

export default PostFooter