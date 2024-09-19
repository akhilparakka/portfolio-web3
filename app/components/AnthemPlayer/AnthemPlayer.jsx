import { useState } from "react";
import "./AnthemPlayer.css";
import { motion } from "framer-motion";

const AnthemPlayer = () => {
  const [isSquare, setIsSquare] = useState(true);

  const toggleShape = () => {
    setIsSquare(!isSquare);
  };

  return (
    <motion.div
      style={{
        width: "8rem",
        height: "80px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        overflow: "visible",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      animate={{
        width: isSquare ? "8rem" : "25rem",
        height: "80px",
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        alt=""
        src="https://azuki.com/_next/image?url=https%3A%2F%2Fstatic-content.azuki.com%2Fassets%2Fjax.png&w=128&q=75"
        loading="lazy"
        decoding="async"
        data-nimg="1"
        style={{
          position: "absolute",
          left: "0px",
          zIndex: 1,
        }}
        animate={{
          width: isSquare ? "80px" : "100px",
          height: isSquare ? "80px" : "100px",
          top: isSquare ? "0px" : "-20px",
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.button
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          backgroundColor: isSquare ? "white" : "rgba(225, 29, 72, 10)",
          border: "none",
          color: isSquare ? "#000000" : "#fff",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
        }}
        onClick={toggleShape}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.1 }}
      >
        {isSquare ? "+" : "×"}
      </motion.button>

      <motion.div
        className="anthem_contents"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSquare ? 0 : 1 }}
        transition={{
          opacity: {
            duration: 0.1,
            delay: isSquare ? 0 : 0.5,
          },
        }}
        style={{ pointerEvents: isSquare ? "none" : "auto" }}
      >
        <div className="anthem_content_left">
          <h3>BADDERS</h3>
          <h4>PEEKABOO, Flowdan, Skrillex, G-Rex</h4>
        </div>
        <div className="anthem_content_right">
          <div className="buttons prev_button">
            <svg
              stroke="currentColor"
              className="player_icon"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path>
            </svg>
          </div>
          <div className="buttons play_button">
            <svg
              stroke="currentColor"
              className="player_icon"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 6v12l10-6z"></path>
            </svg>
          </div>
          <div className="buttons next_button">
            <svg
              stroke="currentColor"
              className="player_icon"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnthemPlayer;
