import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import Followers from "./components/followers/Followers";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function App() {
  let maxHeight;
  if (window.innerHeight <= 740) {
    maxHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([]);

  const [user, setUsers] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  async function getUsers() {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    setUsers(usersList);
  }

  useEffect(() => {
    getVideos();
    getUsers();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="menuLeft">
        <img
          className="menuLeft_logo"
          src="https://firebasestorage.googleapis.com/v0/b/tiktokclone-714b1.appspot.com/o/tiktok-logo.png?alt=media&token=77a9a392-7b25-456a-9912-733e06f1785c"
          alt="tiktok logo"
        ></img>

        <div className="menuLeft_items">
          <ul>
            <li className="menuLeft_home">
              <HomeIcon fontSize="large" />
              <span>Para você</span>
            </li>
            <li>
              <PeopleIcon fontSize="large" />
              <span>Seguindo</span>
            </li>
            <li>
              <LiveTvIcon fontSize="large" />
              <span>Live</span>
            </li>
          </ul>
        </div>

        <div className="menuLeft_sugestions">
          <h3>Contas Sugeridas</h3>
          <div className="app_users">
            {user.map((item) => {
              return (
                <Followers
                  url={item.url}
                  name={item.name}
                  username={item.username}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="app_videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              user={item.user}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
