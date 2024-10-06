import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";
import Azuki from "../../assets/Azuki Logo White.svg";
// import { useAppKit } from "@reown/appkit/react";
// import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

const navbarContents = ["About", "Akhil", "Lore", "More", "Social"];

const Header = () => {
  // const { open } = useAppKit();
  // const { address } = useAccount();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleConnectClick = () => {
    open();
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
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="connect_wallet" /*onClick={handleConnectClick}*/>
              {/* <p>
                {isHydrated && address
                  ? `${address.slice(0, 6)}...${address.slice(0, 6)}`
                  : "Connect"}
              </p> */}
              <p>Connect</p>
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
