import "./Carousel.css";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const carouselImages = [
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/1d/12/10/1d1210673d4cb650dba75676a4182d32.jpg",
    title: "The Waiting man",
    subheading: "Anthology Series",
  },
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/78/c0/20/78c020d8032194f0dca8cfae7bab78c9.jpg",
    title: "Sisters",
    subheading: "Story Animation",
  },
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/1e/b0/9a/1eb09aa0775b6f4b6052fae1f781ac8b.jpg",
    title: "AZUKI X Satoshi Nakamoto",
    subheading: "Streetwear collab",
  },
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/dc/c1/74/dcc174975b75765ebcc3bb57f5ebd293.jpg",
    title: "Benz 101",
    subheading: "interactive Lore",
  },
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/f3/f8/8f/f3f88fd1ed1dde2afb55d05e387a7d5c.jpg",
    title: "Line Friends X Beans",
    subheading: "Physical Collectables",
  },
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/4d/50/b0/4d50b09ae95fa8d277471994555ca55d.jpg",
    title: "Benz 101",
    subheading: "interactive Lore ipsum",
  },
  {
    // url: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75",
    url: "https://i.pinimg.com/736x/91/51/47/915147a0cda7ca17ef6f5e28b311b175.jpg",
    title: "Line Friends X Beans",
    subheading: "Physical Collectables ipsum",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [scrollInfo, setScrollInfo] = useState({
    position: 0,
    max: 0,
    viewportWidth: 0,
  });
  const [totalSteps, setTotalSteps] = useState(1);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const updateScrollInfo = () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        setScrollInfo({
          position: carousel.scrollLeft,
          max: maxScroll,
          viewportWidth: carousel.clientWidth,
        });
      };

      const calculateTotalSteps = () => {
        const scrollStep = carousel.clientWidth - 100;
        const steps = Math.ceil(carousel.scrollWidth / scrollStep);
        setTotalSteps(Math.max(steps, 1));
      };

      updateScrollInfo();
      calculateTotalSteps();

      carousel.addEventListener("scroll", updateScrollInfo);
      window.addEventListener("resize", () => {
        updateScrollInfo();
        calculateTotalSteps();
      });

      return () => {
        carousel.removeEventListener("scroll", updateScrollInfo);
        window.removeEventListener("resize", calculateTotalSteps);
      };
    }
  }, []);

  const activeIndex = useMemo(() => {
    if (scrollInfo.max === 0) return 0;
    return Math.round(
      (scrollInfo.position / scrollInfo.max) * (totalSteps - 1)
    );
  }, [scrollInfo, totalSteps]);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = carousel.clientWidth - 100;
      carousel.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollStep = carousel.clientWidth - 100;
      const targetScroll = index * scrollStep;
      carousel.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const canScrollLeft = scrollInfo.position > 0;
  const canScrollRight = scrollInfo.position < scrollInfo.max;

  return (
    <div className="corosel">
      <div className="corosel_images" ref={carouselRef}>
        {carouselImages.map((image) => (
          <motion.div
            className="image_wrapper"
            key={image.subheading}
            whileHover={{ y: -5 }}
          >
            <div className="heading_wrapper">
              <h3>{image.title}</h3>
              <p>{image.subheading}</p>
            </div>
            <motion.img
              src={image.url}
              alt={image.title}
              className="corosel_image"
            />
          </motion.div>
        ))}
      </div>
      {scrollInfo.viewportWidth > 0 && (
        <div className="scroll_button_wrapper">
          <div className="scroll_indicator">
            <button
              onClick={() => handleScroll("prev")}
              className={`indicator_button ${!canScrollLeft ? "disabled" : ""}`}
              disabled={!canScrollLeft}
            >
              &lt;
            </button>
            <div className="indicator_dots">
              {[...Array(totalSteps)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`indicator_dot ${
                    index === activeIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => handleScroll("next")}
              className={`indicator_button ${
                !canScrollRight ? "disabled" : ""
              }`}
              disabled={!canScrollRight}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
