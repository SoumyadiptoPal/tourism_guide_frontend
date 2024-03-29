import { Box, Button, Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Context from "../../Context/Context";
import DisplayUser from "../displayUser";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Details = ({ user }) => {
  const {updateArray}=useContext(Context);
  const flag = JSON.parse(localStorage.getItem("userDetails"))._id == user._id;
  const [followerDetails,setFollowerDetails]=useState([]);
  const [followingDetails,setFollowingDetails]=useState([]);
  const editImage = () => {};
  const updateDetails = () => {
    //Open a modal, display a form to let the user update all the details
  };
  //Creata a modal for followers and following
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState(0);

  useEffect(() => {
    const populate=async()=>{
      setFollowerDetails(await updateArray(user.Followers));
      setFollowingDetails(await updateArray(user.Following));
    }
    populate();
  }, [])
  
  const handleOpen = (ch) => {
    setOpen(true);
    setChoice(ch);
  };
  const handleClose = () => {
    setOpen(false);
    setChoice(0);
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="detail_img">
          <img src={user.Profile_Pic} width={250} height={250} />
        </div>
        {flag ? (
          <div
            style={{ position: "absolute", bottom: 12, right: 12 }}
            onClick={() => editImage()}
          >
            <EditNoteOutlinedIcon
              sx={{ height: "50px", width: "50px", color: "#1976d2" }}
            />
          </div>
        ) : null}
      </div>

      <div className="detail_cont1">
        <div style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
          {user.Name}
        </div>
        <div style={{ display: "flex", textAlign: "center" }}>
          <div style={{flex:1}}>{user.About_me ? user.About_me : "Traveller"}{" "}</div>
          {flag ? (
            <Button
              variant="text"
              sx={{ padding: "0px" }}
              onClick={() => handleOpen(3)}
            >
              <EditNoteOutlinedIcon />
            </Button>
          ) : null}
        </div>
      </div>
      <div className="detail_cont1" style={{ flexDirection: "row" }}>
        <Button
          variant="contained"
          style={{ marginRight: "10px" }}
          onClick={() => handleOpen(1)}
        >
          Followers
        </Button>
        <Button variant="contained" onClick={() => handleOpen(2)}>
          Following
        </Button>
      </div>
      <div className="detail_cont2">
        <div style={{ border: "1px solid black", padding: "1px 5px" }}>
          <span>Email: </span>
          <span style={{ marginLeft: "10px" }}>
            {user.Email}{" "}
            {flag ? (
              <Button
                variant="text"
                sx={{ padding: "0px" }}
                onClick={() => handleOpen(3)}
              >
                <EditNoteOutlinedIcon />
              </Button>
            ) : null}
          </span>
        </div>
        <div style={{ border: "1px solid black", padding: "1px 5px" }}>
          <span>Nationality: </span>
          <span style={{ marginLeft: "10px" }}>
            {user.Nationality ? user.Nationality : "Unknown"}{" "}
            {flag ? (
              <Button
                variant="text"
                sx={{ padding: "0px" }}
                onClick={() => handleOpen(3)}
              >
                <EditNoteOutlinedIcon />
              </Button>
            ) : null}
          </span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {choice === 0 ? null : choice === 1 ? (
            <Followers Followers={user.Followers} followerDetails={followerDetails}/>
          ) : choice === 2 ? (
            <Following Following={user.Following} followingDetails={followingDetails}/>
          ) : (
            <>Update</>
          )}
        </Box>
      </Modal>
    </div>
  );
};

const Followers = ({followerDetails}) => {
  const [people,setPeople]=useState(followerDetails);
    
    return(
      <>
      {
        (followerDetails.length>0)?
          <div>
          {
            people.map((item)=>{
              return(
                <DisplayUser people={item}/>
              )
            })
          }
          </div>
          :
          <div>
            <i>You do not Have any Followers yet. </i>
          </div>
        
      }
      </>
    )
};

const Following = ({followingDetails}) => {
  const [people,setPeople]=useState(followingDetails);

    useEffect(() => {
      
    }, [])
    
    return(
      <>
      {
        (followingDetails.length>0)?
          <div>
          {
            people.map((item)=>{
              return(
                <DisplayUser people={item}/>
              )
            })
          }
          </div>
          :
          <div>
            <i>You do not Have any Followings yet. </i>
          </div>
        
      }
      </>
    )
};

export default Details;
