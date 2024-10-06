import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import "./Sidebar.css";
// import { useAppKit } from "@reown/appkit/react";

const sidebar = {
  open: {
    x: 0,
    transition: {
      stiffness: 600,
      damping: 40,
      duration: 0.5,
    },
  },
  closed: {
    x: "100vw",
    transition: {
      stiffness: 600,
      damping: 40,
      duration: 0.5,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const Sidebar = ({ navContents }) => {
  // const { open } = useAppKit();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleConnectClick = () => {
    toggleOpen(true);
    // open();
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="sidebar"
    >
      <motion.div className="sidebar_background" variants={sidebar}>
        <nav className="nav-main">
          <ul className="menu">
            {navContents.map((item) => (
              <div
                className="menu__item"
                key={item}
                onClick={handleConnectClick}
              >
                <div className="menu__link">{item}</div>
              </div>
            ))}
          </ul>
        </nav>
      </motion.div>
      <button className="sidebar_toggle_button" onClick={() => toggleOpen()}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
};

export default Sidebar;
