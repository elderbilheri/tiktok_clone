import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({ user, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{user}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_icon" />
          <div className="videoFooterMusic_text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter_img"
        alt="ícone"
        src="https://icon-library.com/images/vinyl-icon-png/vinyl-icon-png-19.jpg"
      />
    </div>
  );
}

export default VideoFooter;
