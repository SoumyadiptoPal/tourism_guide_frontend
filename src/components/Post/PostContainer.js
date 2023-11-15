import React,{ useContext, useState, useEffect } from 'react'
//import { Posts } from './data'
import Post from './Post'
import Context from '../../Context/Context';

const PostContainer = () => {
  const { getPost } = useContext(Context);
  const [postData, setPostData] = useState({ status: false, posts: [] });
  
  useEffect(() => {
	const fetchData = async () => {
	  try {
		const data = await getPost();
		setPostData(data);
	  } catch (err) {
		  alert(err.response.data.errorMessage);
	  }
	};

	fetchData();
  }, [getPost]);

  return (
    <div style={{display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center"}}>
        {
            postData.posts.map((post,index)=>(
                <Post post={post} key={index}/>
            ))
        }
    </div>
  )
}

export default PostContainer
