import AnthemPlayer from "../components/AnthemPlayer/AnthemPlayer";
import Banner from "../components/Banner/Banner";
import Corosel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Segment from "../components/Segments/Segments";
import PrimaryImage from "../assets/azuki_section_tumbnail.jpg";
import SecondaryImage from "../assets/azuki_section_tumbnail_sec.jpg";
import World from "../components/World/World";
import "../styles/home.css";
import AutoCarousel from "../components/AutoCarousel/AutoCarousel";
import useWindowSize from "../hooks/useWindowSize";
import Footer from "../components/Footer/Footer";

const _index = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const segmentDetails = {
    primary: {
      title: "Anthology Series",
      subheading:
        "Enter the Garden is a 3-part anime anthology series created in collaboration with Dentsu and Goro Taniguch",
      image: PrimaryImage,
    },
    secondary: {
      title: "world of azuki",
      subheading:
        "Explore the Azuki universe from the Alley to the Garden through interactive web experiences.",
      image: SecondaryImage,
    },
  };

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
        <div className="anthem_player_wrapper">{<AnthemPlayer />}</div>
      </div>
      <div className="corosel_wrapper">
        <Corosel />
      </div>
      <div className="home_poster_wrapper">
        <Banner />
      </div>
      <div className="segments_wrapper">
        <Segment details={segmentDetails.primary} />
        <Segment details={segmentDetails.secondary} />
      </div>
      <div className="world_wrapper">
        <World />
      </div>
      <div className="auto_carousel_wrapper">
        <AutoCarousel direction="left" />
        <AutoCarousel direction="right" />
        {isMobile && <AutoCarousel direction="left" />}
      </div>
      <div className="footer_wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default _index;
