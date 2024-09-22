import Switch from "../Switch/Switch";
import "./Corosel.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const coroselImages = [
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75",
    title: "The Waiting man",
    subheading: "Anthology Series",
  },
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75",
    title: "Sisters",
    subheading: "Story Animation",
  },
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75",
    title: "AZUKI X Satoshi Nakamoto",
    subheading: "Streetwear collab",
  },
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75",
    title: "Benz 101",
    subheading: "interactive Lore",
  },
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75",
    title: "Line Friends X Beans",
    subheading: "Physical Collectables",
  },
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75",
    title: "Benz 101",
    subheading: "interactive Lore ipsum",
  },
  {
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75",
    title: "Line Friends X Beans",
    subheading: "Physical Collectables ipsum",
  },
];

const Corosel = () => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const imageWidth = carousel.querySelector(".image_wrapper").clientWidth;
    const scrollAmount = carousel.clientWidth - imageWidth * 2;

    if (direction === "next") {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="corosel">
      <div className="corosel_images" ref={carouselRef}>
        {coroselImages.map((image) => (
          <motion.div
            className="image_wrapper"
            key={image.subheading}
            whileHover={{ y: -5 }}
          >
            <div className="heading_wrapper">
              <h3>{image.title}</h3>
              <p>{image.subheading}</p>
            </div>
            <motion.img src={image.url} className="corosel_image" />
          </motion.div>
        ))}
      </div>
      <div className="corosel_buttons">
        <button onClick={() => handleScroll("prev")}>Prev</button>
        <button onClick={() => handleScroll("next")}>Next</button>
      </div>
    </div>
  );
};

export default Corosel;
