import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import Followers from "./components/followers/Followers";
import Tags from "./components/tags/Tags";
import Musics from "./components/musics/Musics";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SendIcon from "@mui/icons-material/Send";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

function App() {
  let maxHeight;
  if (window.innerHeight <= 740) {
    maxHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([]);

  const [user, setUsers] = useState([]);

  const [tag, setTags] = useState([]);

  const [music, setMusics] = useState([]);

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

  async function getTags() {
    const tagsCollection = collection(db, "tags");
    const tagsSnapshot = await getDocs(tagsCollection);
    const tagsList = tagsSnapshot.docs.map((doc) => doc.data());
    setTags(tagsList);
  }

  async function getMusics() {
    const musicsCollection = collection(db, "musics");
    const musicsSnapshot = await getDocs(musicsCollection);
    const musicsList = musicsSnapshot.docs.map((doc) => doc.data());
    setMusics(musicsList);
  }

  useEffect(() => {
    getVideos();
    getUsers();
    getTags();
    getMusics();
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

      {/* Menu Direito */}
      <div className="menuRight">
        <div className="menuRight_navbar">
          <button>+ Carregar</button>
          <SendIcon className="iconSend" fontSize="large" />
          <MoveToInboxIcon className="iconNotification" fontSize="large" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tiktokclone-714b1.appspot.com/o/user.jpg?alt=media&token=40e8e2b9-6222-4e40-961d-f8cf1b0ba054"
            alt="foto usuário"
          />
        </div>
        <input
          className="menuRight_input"
          type="text"
          placeholder="Pesquisar contas e vídeos"
        />
        <div>
          <h4 className="menuRight_titles">Descobrir</h4>
          <div className="menuRight_component">
            {tag.map((item) => {
              return <Tags name={item.name} />;
            })}
          </div>
        </div>
        <div>
          <h4 className="menuRight_titles">Principais Músicas</h4>
          <div className="menuRight_component">
            {music.map((item) => {
              return <Musics name={item.name} />;
            })}
          </div>
        </div>
        <div className="menuRight_download">
          <span>Obter aplicativo</span>
          <DownloadForOfflineIcon className="iconDown" />
        </div>
      </div>
    </div>
  );
}

export default App;
