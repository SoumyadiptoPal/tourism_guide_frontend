import React, { useState } from 'react';
import Context from "./Context";
import axios from "axios";

const State = (props) => {
  const host = "http://localhost:8082";
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  
  const userRegister = async (data) => {
    try {
      const res = await axios.post(`${host}/auth/register`, data)
      alert(res.data.title);
      return res.data
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  };
  
  const userLogin = async (data) => {
    try {
      const res = await axios.post(`${host}/auth/login`, data);
      alert(res.data.title);
      setToken(res.data.token);
      setUserId(res.data.userId);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: userId,
          token: token
        })
      );
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
      return res.data.posts;
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

	const likePost = async () => {
		try {
			const res = await axios.post(`${host}/post/like`);
			alert(res.data.title);
			return res.data;
		} catch (err) {
			alert(err.response.data.errorMessage);
		}
	}

	const commentPost = async (data) => {
		try {
			const res = await axios.post(`${host}/post/comment`, data);
			alert(res.data.title);
			return res.data;
		} catch (err) {
			alert(err.response.data.errorMessage);
		}
	}

  return(
    <Context.Provider value={{userRegister,userLogin,userAuth,getPost,uploadPost,likePost,commentPost}}>
      {props.children}
    </Context.Provider>
  )
}

export default State;
