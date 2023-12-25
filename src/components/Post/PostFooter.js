import React, { useContext, useEffect, useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Avatar, Box, Button, Divider, Modal } from "@mui/material";
import Context from "../../Context/Context";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PostFooter = ({ likes, comments, shares, currentUser, id }) => {
  const [like, setLike] = useState(
    likes.some((obj) => obj._id === currentUser._id)
  );
  const [comment, setComment] = useState(
    comments.some((obj) => obj.Owner_id === currentUser._id)
  );
  const [share, setShare] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { commentPost } = useContext(Context);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98vw",
    maxWidth: 600,
    minHeight: 100,
    maxHeight: "98vh",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    // populateComments()
  }, []);

  const handleLike = () => {
    setLike(!like);
  };

  const handleComment = () => {
    setOpen(true);
  };
  const handleSubmitComment = async () => {
    handleClose();
    setComment(true);
    const data = {
      Description: text,
      _id: id,
    };
    await commentPost(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Button variant="text" onClick={handleLike}>
        {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}{" "}
        <span style={{ fontSize: "0.9rem", marginLeft: "10px" }}>
          {likes.length}
        </span>
      </Button>
      <Button variant="text" onClick={() => handleComment()}>
        {comment ? <ChatBubbleIcon /> : <ChatBubbleOutlineOutlinedIcon />}{" "}
        <span style={{ fontSize: "0.9rem", marginLeft: "10px" }}>
          {comments.length}
        </span>
      </Button>
      <Button variant="text" onClick={() => setShare(!share)}>
        {share ? <ShareIcon /> : <ShareOutlinedIcon />}{" "}
        <span style={{ fontSize: "0.9rem", marginLeft: "10px" }}>{shares}</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {comments.length > 0 &&
            comments.map((comment, index) => (
              <div key={index} style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <div>
                  <Avatar
                    alt="Name"
                    src=""
                    sx={{ width: 45, height: 45, margin:1 }}
                  />
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                <div>{comment.Description}</div>
                <div>{<Button><FavoriteBorderIcon/></Button>} {comment.Likes.length}</div>
                </div>
              </div>
            ))}
          {comments.length == 0 && (
            <i
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
              }}
            >
              No Comments to display
            </i>
          )}

          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <textarea
              rows={2}
              value={text}
              name="comment"
              onChange={(e) => setText(e.target.value)}
              style={{
                width: "100%",
                marginRight: 5,
                resize: "none",
                border: "1px solid black",
              }}
              placeholder="Type Your Comment Here"
            />
            <Button variant="contained" onClick={handleSubmitComment}>
              Post
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PostFooter;
