import React from 'react'
import { Posts } from './data'
import Post from './Post'
const PostContainer = () => {
  return (
    <div style={{display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center"}}>
        {
            Posts.map((post,index)=>(
                <Post post={post} key={index}/>
            ))
        }
    </div>
  )
}

export default PostContainer