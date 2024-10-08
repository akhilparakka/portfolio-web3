const Card = ({ item }) => {
  return <img src={item.src} alt={item.alt || "Logo"} />;
};

export default Card;
