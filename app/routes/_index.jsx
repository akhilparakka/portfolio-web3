import AnthemPlayer from "../components/AnthemPlayer/AnthemPlayer";
import Banner from "../components/Banner/Banner";
import Corosel from "../components/Corosel/Corosel";
import Header from "../components/Header/Header";
import "../styles/home.css";

const _index = () => {
  return (
    <div className="home">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Header />
        </div>
        <video className="video_background" loop autoPlay playsInline muted>
          <source
            src="https://static-content.azuki.com/assets/anime_trailer_3c951028-5466-4f8b-9e53-eaced0a9e0611.mp4"
            type="video/mp4"
          />
        </video>
        <img
          className="background_image"
          src="https://static-content.azuki.com/assets/anime_trailer_mobile_3c951028-5466-4f8b-9e53-eaced0a9e0611.jpg"
          alt=""
        />
        <div className="anthem_player_wrapper">
          <AnthemPlayer />
        </div>
      </div>
      <div className="corosel_wrapper">
        <Corosel />
      </div>
      <div className="home_poster_wrapper">
        <Banner />
      </div>
    </div>
  );
};

export default _index;
