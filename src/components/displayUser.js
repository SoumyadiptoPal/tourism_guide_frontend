import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DisplayUser = ({ people }) => {
  const navigate = useNavigate();

  const handleNavigate=()=>{
    //Fetch complete details of a user.
    // navigate("/profile", { state: { user: people } })
    //close the Modal
  }
  return (
    <div
      className="head_cont1"
      style={{ cursor: "pointer" }}
      onClick={handleNavigate}
    >
      <div className="head_cont2">
        <Avatar
          alt={people.Name}
          src={people.Profile_Pic}
          sx={{ width: 45, height: 45 }}
        />
        <div
          style={{ marginLeft: 8, fontWeight: "bolder", fontSize: "1.2rem" }}
        >
          {people.Name}
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
