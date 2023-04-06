import React from "react";
import "./musics.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Musics({ name }) {
  return (
    <div className="music">
      <MusicNoteIcon fontSize="small" /> <span>{name}</span>
    </div>
  );
}

export default Musics;
