import React from 'react'
import './post.css'
import PostHeader from './PostHeader'
import PostPics from './PostPics'
import PostFooter from './PostFooter'
const Post = ({post}) => {
  return (
    <div className='cont1'>
        <PostHeader name={post.Title} profilePic={post.profile_pic}/>
        <div className='post_caption'>
            {post.Caption}
        </div>
        <PostPics images={post.Picture}/>
        <PostFooter likes={post.Likes.length} comments={post.Comments.length} shares={post.Shares}/>
    </div>
  )
}

export default Post
