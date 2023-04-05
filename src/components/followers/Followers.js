import React from "react";
import "./followers.css";
import VerifiedIcon from "@mui/icons-material/Verified";

function followers({ url, name, username }) {
  return (
    <div className="followers">
      <img className="followers_img" src={url} alt=""></img>
      <div className="followers_names">
        <h4>
          {username} <VerifiedIcon className="icon" fontSize="5px" />
        </h4>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default followers;
