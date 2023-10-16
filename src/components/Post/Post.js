import React from 'react'
import './post.css'
import PostHeader from './PostHeader'
import PostPics from './PostPics'
import PostFooter from './PostFooter'
const Post = ({post}) => {
  return (
    <div className='cont1'>
        <PostHeader name={post.Name} profilePic={post.profile_pic}/>
        <div className='post_caption'>
            {post.Caption}
        </div>
        <PostPics images={post.Images}/>
        <PostFooter likes={post.Likes} comments={post.Comments} shares={post.Shares}/>
    </div>
  )
}

export default Post