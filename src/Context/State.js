import React, { useState, useEffect } from 'react';
import Context from "./Context";
import axios from "axios";

const State = (props) => {
  const host = "http://localhost:8082";
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);

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
      setToken(res.data.token);
      setUserId(res.data.userId);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: res.data.userId,
          token: res.data.token
        })
      );
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
    <Context.Provider value={{userRegister,userLogin,userAuth,getPost,uploadPost,likePost,commentPost,userId,setUserId}}>
      {props.children}
    </Context.Provider>
  )
}

export default State;
