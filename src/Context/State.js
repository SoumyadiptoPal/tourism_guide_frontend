import React, { useState, useEffect } from 'react';
import Context from "./Context";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase.js';

const State = (props) => {
  const host = process.env.REACT_APP_BACKEND_URL;
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);
  const currentUser=JSON.parse(localStorage.getItem('userDetails'));
  
  const userRegister = async (data) => {
    try {
      const res = await axios.post(`${host}/auth/register`, data)
      setToken(res.data.token);
      setUserId(res.data.userId);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: res.data.userId,
          token: res.data.token
        })
      );
      localStorage.setItem(
        'userDetails',
        JSON.stringify(res.data.user)
      )
	  //alert(res.data.token);
	  // Replacing res.data.token with local var token
	  // Causes unwanted behaviour. Asynchronous Bug??
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      return res.data;
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  };
  
  const userLogin = async (data) => {
    try {
      const res = await axios.post(`${host}/auth/login`, data);
      setToken(res.data.token);
      setUserId(res.data.userId);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: res.data.userId,
          token: res.data.token
        })
      );
      localStorage.setItem(
        'userDetails',
        JSON.stringify(res.data.user)
      )
	  //alert(res.data.token);
	  // Replacing res.data.token with local var token
	  // Causes unwanted behaviour. Asynchronous Bug??
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      return res.data;
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  }

  const userAuth = async (data) => {
    try {
      const res = await axios.get(`${host}/auth/protected`);
      alert(res.data.title);
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  }

  const getPost = async () => {
    try {
      const res = await axios.get(`${host}/post/`);
      return res.data;
    } catch (err) {
        alert(err.response.data.errorMessage);
    }
  }

    const uploadPost = async (data) => {
        try {
            const res = await axios.put(`${host}/post/create`, data);
            alert(res.data.title);
            return res.data;
        } catch (err) {
            alert(err.response.data.errorMessage);
        }
    }

    const likePost = async (data) => {
        try {
            const res = await axios.post(`${host}/post/like`, data);
            // alert(res.data.title);
            return res.data;
        } catch (err) {
            alert(err.response.data.errorMessage);
        }
    }

    const commentPost = async (data) => {
        try {
            const res = await axios.post(`${host}/post/comment`, data);
            return res.data;
        } catch (err) {
            alert(err.response.data.errorMessage);
        }
    }

    const uploadImage = async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        let imgUrl;
        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
                console.log(error);
            }
        );

        await uploadTask;
        imgUrl = await getDownloadURL(ref(storage, `images/${image.name}`));
        // alert(imgUrl);
        return imgUrl;
    }

    const addFollower= async (id)=>{
        const data={_id: id};
        const res = await axios.post(`${host}/auth/addFollower`, data);

        //TODO: Make a call to update the local Storage
    }

    const removeFollower= async (id) => {
        const data={_id: id};
        const res = await axios.post(`${host}/auth/removeFollower`, data);

        //TODO: Make a call to update the local Storage
    }

    const updateArray=async (ids)=>{
        const data={
            ids:ids
        }

        const res = await axios.post(`${host}/auth/populate`, data);
        return res.data.ans;
    }


    const fetchPosts=async(id)=>{
        const params={
            "_id": id
        }
        const res =await axios.get(`${host}/post/getallposts`, {
            params: params
        }
        )
        console.log(res.data);
        return res.data.posts;
    }

    const getUserData = async (data) => {
        try {
            const res = await axios.get(`${host}/auth/userDetails`, data);
            return res.data;
        } catch (err) {
            alert(err.response.data.errorMessage);
        }
    }

    return(
        <Context.Provider value={{getUserData,uploadImage,userRegister,userLogin,userAuth,getPost,uploadPost,likePost,commentPost,userId,setUserId,addFollower,removeFollower, updateArray, fetchPosts}}>
        {props.children}
        </Context.Provider>
    )
}

export default State;
