import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card_wrapper">
      <div className="card">
        <img
          src={item.src}
          alt={item.alt || "Anime character"}
          className="card_image"
        />
        <div className="card_title_popup">
          <h3 className="popup_title">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
