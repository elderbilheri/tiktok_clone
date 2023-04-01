import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_items" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <span> {liked ? likes + 1 : likes} </span>
      </div>

      <div className="videoSidebar_items">
        <ChatIcon fontSize="large" />
        <span>{messages}</span>
      </div>

      <div className="videoSidebar_items">
        <ShareIcon fontSize="large" />
        <span>{shares}</span>
      </div>
    </div>
  );
}

export default VideoSidebar;
