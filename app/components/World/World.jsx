import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorldMap from "../../assets/world-map.svg";
import "./World.css";

const locations = [
  { id: 1, name: "Kashmir", x: 32, y: 30, color: "#ef4444", icon: "🏔️" },
  { id: 2, name: "Singapore", x: 24, y: 58, color: "#3b82f6", icon: "🦁" },
  { id: 3, name: "Taipei", x: 18, y: 40, color: "#22c55e", icon: "🍵" },
  { id: 4, name: "Bangalore", x: 31.5, y: 38, color: "#eab308", icon: "🌴" },
  {
    id: 5,
    name: "Washington D.C.",
    x: 77,
    y: 38,
    color: "#a855f7",
    icon: "🏛️",
  },
  { id: 6, name: "London", x: 53, y: 28, color: "#6366f1", icon: "🎡" },
  { id: 7, name: "Brussels", x: 52, y: 27, color: "#ec4899", icon: "🍺" },
  { id: 8, name: "Tokyo", x: 13, y: 37, color: "#f87171", icon: "🗼" },
  { id: 9, name: "Sydney", x: 12, y: 75, color: "#facc15", icon: "🏄" },
  { id: 10, name: "Cairo", x: 43, y: 42, color: "#ca8a04", icon: "🐪" },
  { id: 11, name: "Moscow", x: 41, y: 22, color: "#dc2626", icon: "⛪" },
  { id: 12, name: "New York", x: 75, y: 35, color: "#2563eb", icon: "🗽" },
  { id: 13, name: "Paris", x: 53, y: 29, color: "#60a5fa", icon: "🗼" },
  { id: 14, name: "Cape Town", x: 47, y: 78, color: "#16a34a", icon: "🦁" },
  {
    id: 15,
    name: "Rio de Janeiro",
    x: 67,
    y: 68,
    color: "#4ade80",
    icon: "🏖️",
  },
  { id: 16, name: "Mumbai", x: 30, y: 48, color: "#f472b6", icon: "🎬" },
  { id: 17, name: "Dubai", x: 38, y: 45, color: "#fbbf24", icon: "🏙️" },
  { id: 18, name: "Seoul", x: 16, y: 35, color: "#8b5cf6", icon: "🍱" },
  { id: 19, name: "Berlin", x: 49, y: 26, color: "#10b981", icon: "🍺" },
  { id: 20, name: "Mexico City", x: 82, y: 48, color: "#f97316", icon: "🌮" },
];

const World = () => {
  const [visiblePointers, setVisiblePointers] = useState([]);
  const mapWrapperRef = useRef(null);

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

  const calculatePosition = (x, y) => {
    return {
      left: `${x}%`,
      top: `${y}%`,
    };
  };

  return (
    <div className="world-map-container">
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
      <div className="map-wrapper" ref={mapWrapperRef}>
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
              style={calculatePosition(pointer.x, pointer.y)}
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
    </div>
  );
};

export default World;
