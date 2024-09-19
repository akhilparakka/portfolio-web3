import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/home.css";

const _index = () => {
  return (
    <div className="home">
      <video className="video_background" loop autoPlay playsInline muted>
        <source
          src="https://static-content.azuki.com/assets/anime_trailer_3c951028-5466-4f8b-9e53-eaced0a9e0611.mp4"
          type="video/mp4"
        />
      </video>
      <Header />
      {/* <Sidebar /> */}
    </div>
  );
};

export default _index;
