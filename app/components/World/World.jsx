import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorldMap from "../../assets/world-map.svg";
import "./World.css";

const locations = [
  { id: 1, name: "Bangalore", x: 72, y: 55, color: "#ef4444", icon: "🏙️" },
  { id: 2, name: "Singapore", x: 78, y: 58, color: "#3b82f6", icon: "🦁" },
  { id: 3, name: "Taiwan", x: 82, y: 48, color: "#22c55e", icon: "🍵" },
  { id: 4, name: "Bangalore", x: 32, y: 55, color: "#eab308", icon: "🌴" },
  { id: 5, name: "Washington", x: 19, y: 38, color: "#a855f7", icon: "🏛️" },
  { id: 6, name: "London", x: 47, y: 30, color: "#6366f1", icon: "🎡" },
  { id: 7, name: "Belgium", x: 49, y: 29, color: "#ec4899", icon: "🍺" },
  { id: 8, name: "Tokyo", x: 87, y: 42, color: "#f87171", icon: "🗼" },
  { id: 9, name: "Sydney", x: 90, y: 75, color: "#facc15", icon: "🏄" },
  { id: 10, name: "Cairo", x: 33, y: 68, color: "#ca8a04", icon: "🐪" },
  { id: 11, name: "Cairo", x: 57, y: 48, color: "#ca8a04", icon: "🐪" },
  { id: 12, name: "Moscow", x: 59, y: 25, color: "#dc2626", icon: "⛪" },
  { id: 13, name: "New York", x: 23, y: 37, color: "#2563eb", icon: "🗽" },
  { id: 14, name: "Paris", x: 47, y: 32, color: "#60a5fa", icon: "🗼" },
  { id: 15, name: "Cape Town", x: 52, y: 80, color: "#16a34a", icon: "🦁" },
];

const World = () => {
  const [visiblePointers, setVisiblePointers] = useState([]);

  useEffect(() => {
    const showPointers = () => {
      const selectedPointers = locations
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setVisiblePointers(selectedPointers);
    };

    showPointers();
    const interval = setInterval(showPointers, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="world-map-container">
      <div>
        <div className="map-text-section">
          <div className="title-description">
            <h2 className="anthology-title">find your community</h2>
            <p className="anthology-description">
              Azuki consists of 100 communities around the world. Connect with
              others who share your passions.
            </p>
          </div>
          <button className="square-btn-white-small">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="icon"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <img src={WorldMap} alt="World Map" className="world-map" />
      <AnimatePresence>
        {visiblePointers.map((pointer) => (
          <motion.div
            key={pointer.id}
            className="pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: { duration: 0.5 },
            }}
            style={{
              left: `${pointer.x}%`,
              top: `${pointer.y}%`,
            }}
          >
            <div
              className="pointer-circle"
              style={{ backgroundColor: pointer.color }}
            >
              <div className="pointer-icon">{pointer.icon}</div>
            </div>
            <div
              className="pointer-arrow"
              style={{ borderTopColor: pointer.color }}
            ></div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default World;
