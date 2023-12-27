import React from 'react'
import './post.css'
import PostHeader from './PostHeader'
import PostPics from './PostPics'
import PostFooter from './PostFooter'
const Post = ({post,currentUser}) => {
  return (
    <div className='cont1'>
        <PostHeader owner={post.Owner_id} currentUser={currentUser}/>
        <div className='post_caption'>
            <h5>{post.Title}</h5>
            {post.Description}
        </div>
        <PostPics images={post.Picture}/>
        <PostFooter likes={post.Likes} comments={post.Comments} shares={post.Shares} currentUser={currentUser} id={post._id}/>
    </div>
  )
}

export default Post
