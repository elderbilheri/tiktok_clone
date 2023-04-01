import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video
          likes={384}
          messages={165}
          shares={252}
          user="joãozinho"
          description="Miau, o gato goleiro!"
          music="epic music instrumental"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        />
        <Video
          likes={90}
          messages={12}
          shares={25}
          user="luluzinha"
          description="Tentando chamar a atenção da Marie."
          music="clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        {/* <Video likes={1245} messages={800} shares={612} />
        <Video likes={21} messages={15} shares={4} /> */}
      </div>
    </div>
  );
}

export default App;
