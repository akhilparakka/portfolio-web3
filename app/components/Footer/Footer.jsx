import "./Footer.css";
import X from "../../assets/icons/x-social-media-black-icon.svg";
import Insta from "../../assets/icons/black-instagram-icon.svg";
import YT from "../../assets/icons/youtube-icon.svg";
import Github from "../../assets/icons/github-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="footer_left_container">
          <img src="https://www.azuki.com/azuki-logo-red.svg" alt="" />
        </div>
        <img src="https://www.azuki.com/shao-sitting.png" alt="" />
      </div>
      <div className="footer_right">
        <div className="footer_right_container">
          <div className="footer_right_content_box">
            <h4>About Us</h4>
            <p>Projects</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Communities</p>
          </div>
          <div className="footer_right_content_box">
            <h4>technology</h4>
            <p>pbt</p>
            <p>ERC721A</p>
          </div>
        </div>
        <div className="footer_right_container">
          <div className="footer_right_content_box">
            <h4>Lore</h4>
            <p>Anime</p>
          </div>
          <div className="footer_right_content_box">
            <h4>Other</h4>
            <p>License</p>
            <p>Termas & Conditions</p>
          </div>
        </div>
        <div className="footer_right_container">
          <div className="footer_right_content_box">
            <h4>Socials</h4>
            <div className="footer_icons">
              <img
                src={Github}
                alt=""
                style={{ width: "20px", cursor: "pointer" }}
              />
              <img
                src={Insta}
                alt=""
                style={{ width: "20px", cursor: "pointer" }}
              />
              <img
                src={YT}
                alt=""
                style={{ width: "20px", cursor: "pointer" }}
              />
              <img
                src={X}
                alt=""
                style={{ width: "20px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
