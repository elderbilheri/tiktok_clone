import React from "react";
import "./tags.css";
import TagIcon from "@mui/icons-material/Tag";

function Tags({ name }) {
  return (
    <div className="tags">
      <TagIcon fontSize="small" /> <span>{name}</span>
    </div>
  );
}

export default Tags;
