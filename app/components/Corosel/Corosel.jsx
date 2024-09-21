import { div } from "framer-motion/client";
import Switch from "../Switch/Switch";
import "./Corosel.css";
import { motion } from "framer-motion";

const coroselImages = [
  {
    url: "	https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75",
    title: "The Waiting man",
    subheading: "Anthology Series",
  },
  {
    url: "	https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75",
    title: "Sisters",
    subheading: "Story Animation",
  },
  {
    url: "	https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75",
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
    url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Forigin-of-the-garden.jpg&w=600&q=75",
    title: "Origin of the Garder",
    subheading: "Interactive Lore",
  },
];

const Corosel = () => {
  return (
    <div className="corosel">
      <div className="corosel_images">
        {coroselImages.map((image) => (
          <motion.div
            className="image_wrapper"
            key={image.url}
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
      {/* <Switch /> */}
    </div>
  );
};

export default Corosel;
