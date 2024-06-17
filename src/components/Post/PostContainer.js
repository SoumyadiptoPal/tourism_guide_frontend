import React, { useContext, useState, useEffect } from "react";
//import { Posts } from './data'
import Post from "./Post";
import Context from "../../Context/Context";
import ClipLoader from "react-spinners/ClipLoader";

const PostContainer = () => {
  const { getPost } = useContext(Context);
  const [postData, setPostData] = useState({ status: false, posts: [] });
  const [flag, setFlag] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (postData.posts.length === 0) setFlag(true);
        const data = await getPost();
        setPostData(data);
        setFlag(false);
      } catch (err) {
        setFlag(false);
        alert(err.response.data.errorMessage);
      }
    };

    fetchData();
  }, [getPost]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {flag === true && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
            zIndex: 200,
          }}
        >
          <ClipLoader
            color="blue"
            loading={flag}
            size={50}
            cssOverride={{
              borderWidth: 5,
            }}
            width="30px"
            aria-label="Loading Spinner"
            data-testid="loader"
            borderWidth="20px"
          />
          <h3 style={{ marginLeft: "20px" }}>Please wait....</h3>
        </div>
      )}
      {postData.posts.map((post, index) => (
        <Post
          post={post}
          key={index}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ))}
    </div>
  );
};

export default PostContainer;
