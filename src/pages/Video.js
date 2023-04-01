import React, { useRef, useState } from "react";
import VideoSidebar from "../components/sidebar/VideoSidebar";
import VideoFooter from "../components/footer/VideoFooter";
import "./video.css";

function Video({ likes, messages, shares, user, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>

      {/* Sidebar */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />

      {/* footer */}
      <VideoFooter user={user} description={description} music={music} />
    </div>
  );
}

export default Video;
