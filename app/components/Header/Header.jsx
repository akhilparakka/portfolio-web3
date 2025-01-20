import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";
import Azuki from "../../assets/Azuki Logo White.svg";
import { useAccount } from "wagmi";
import { useNavigate } from "@remix-run/react";
import { useAppKit } from "@reown/appkit/react";

const navbarContents = ["About", "Akhil", "Lore", "More", "Social"];

const navbarRoutes = {
  About: "/about",
  Akhil: "/hero/test-value",
  Lore: "/lore",
  More: "/more",
  Social: "/social",
};

const Header = () => {
  const { address } = useAccount();
  const navigate = useNavigate();
  const { open } = useAppKit();

  const handleNavigate = (item) => {
    const route = navbarRoutes[item];
    if (route) {
      navigate(route);
    }
  };

  const handleConnectClick = () => {
    if (address) {
      open({ view: "Account" });
    } else {
      open();
    }
  };

  return (
    <header className="sticky_header">
      <div className="logo">
        <img src={Azuki} alt="" width={"80px"} />
      </div>
      <div className="header_content">
        <div className="navbar">
          <div className="navbar_contents">
            <div className="connect_wallet"></div>
            <div className="navbar_links">
              {navbarContents.map((item) => (
                <p
                  key={item}
                  onClick={() => handleNavigate(item)}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="connect_wallet" onClick={handleConnectClick}>
              <p>
                {address
                  ? `${address.slice(0, 6)}...${address.slice(-4)}`
                  : "Connect"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_wrapper">
        <Sidebar navContents={["Connect", ...navbarContents]} />
      </div>
    </header>
  );
};

export default Header;
