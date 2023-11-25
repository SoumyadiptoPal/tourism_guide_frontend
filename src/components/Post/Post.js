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
        <PostFooter likes={post.Likes.length} comments={post.Comments.length} shares={post.Shares}/>
    </div>
  )
}

export default Post
