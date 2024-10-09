import "./AutoCarousel.css";
import CoroselImage_1 from "../../assets/corosel_image_1.webp";
import CoroselImage_2 from "../../assets/corosel_image_2.webp";
import CoroselImage_3 from "../../assets/corosel_image_3.webp";
import CoroselImage_4 from "../../assets/corosel_image_4.webp";
import CoroselImage_5 from "../../assets/corosel_image_5.webp";
import CoroselImage_6 from "../../assets/corosel_image_6.webp";
import CoroselImage_7 from "../../assets/corosel_image_7.webp";
import CoroselImage_8 from "../../assets/corosel_image_8.webp";
import CoroselImage_9 from "../../assets/corosel_image_9.webp";
import CoroselImage_10 from "../../assets/corosel_image_10.webp";

import Card from "../Card/Card";

const LogosSlide = ({ items }) => {
  return (
    <div className="logos-slide">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

const AutoCarousel = ({ direction = "left" }) => {
  const items = [
    { src: CoroselImage_1, alt: "Apple", title: "Apple" },
    {
      src: CoroselImage_2,
      alt: "Google",
      title: "Google",
    },
    {
      src: CoroselImage_3,
      alt: "Amazon",
      title: "Amazon",
    },
    {
      src: CoroselImage_4,
      alt: "Microsoft",
      title: "Microsoft",
    },
    {
      src: CoroselImage_5,
      alt: "Facebook",
      title: "Facebook",
    },
    {
      src: CoroselImage_6,
      alt: "Netflix",
      title: "Netflix",
    },
    {
      src: CoroselImage_7,
      alt: "Tesla",
      title: "Tesla",
    },
    { src: CoroselImage_8, alt: "Nike", title: "Google" },
    {
      src: CoroselImage_9,
      alt: "Adidas",
      title: "Adidas",
    },
    {
      src: CoroselImage_10,
      alt: "Coca-Cola",
      title: "Coca-Cola",
    },
  ];

  return (
    <div className={`logos ${direction}`}>
      <LogosSlide items={items} />
      <LogosSlide items={items} />
    </div>
  );
};

export default AutoCarousel;
