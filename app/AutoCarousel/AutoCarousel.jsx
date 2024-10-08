import "./AutoCarousel.css";
import CoroselImage_0 from "../assets/corosel_image_1.webp";
import Card from "../components/Card/Card";

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
    { src: CoroselImage_0, alt: "Apple" },
    { src: "https://logo.clearbit.com/google.com", alt: "Google" },
    { src: "https://logo.clearbit.com/amazon.com", alt: "Amazon" },
    { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft" },
    { src: "https://logo.clearbit.com/facebook.com", alt: "Facebook" },
    { src: "https://logo.clearbit.com/netflix.com", alt: "Netflix" },
    { src: "https://logo.clearbit.com/tesla.com", alt: "Tesla" },
    { src: "https://logo.clearbit.com/nike.com", alt: "Nike" },
    { src: "https://logo.clearbit.com/adidas.com", alt: "Adidas" },
    { src: "https://logo.clearbit.com/coca-cola.com", alt: "Coca-Cola" },
  ];

  return (
    <div className={`logos ${direction}`}>
      <LogosSlide items={items} />
      <LogosSlide items={items} />
    </div>
  );
};

export default AutoCarousel;
