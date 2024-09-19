import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";
import Azuki from "../../assets/Azuki Logo White.svg";

const navbarContents = ["About", "Akhil", "Lore", "More", "Social"];

const Header = () => {
  return (
    <header className="sticky_header">
      <div className="logo">
        <img src={Azuki} alt="" />
      </div>
      <div className="header_content">
        <div className="navbar">
          <div className="navbar_contents">
            {navbarContents.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="connect_wallet">
          <p>Connect</p>
        </div>
      </div>
      <div className="sidebar_wrapper">
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
