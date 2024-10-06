import "./Banner.css";

const Banner = () => {
  return (
    <div className="home_poster">
      <div className="noise_overlay"></div>
      <div className="home_banner">
        <div className="banner_content">
          <h1>Building the future of Anime</h1>
          <div className="paragraphs">
            <p>
              In 2022, Azuki set out to create a decentralized anime brand,
              where the community can co-create and contribute to the IP and
              stories we tell, forging a new model of community-driven
              entertainment.
            </p>
            <br />
            <p>
              The Azuki community, through its creation of 100 subcommunities, a
              vast collection of fan and commissioned art, multiple
              community-led events around the world, and much more, has
              emphatically shown that it's possible to birth a new IP that
              originates from web3 in the fast world of anime.
            </p>
            <br />
            <p>We rise together. We build together. We grow together.</p>
            <p>AZUKI!</p>
          </div>
        </div>
        <div className="banner_image_wrapper">
          <img
            src="https://www.azuki.com/_next/image?url=%2Fhomepage%2FManifestoSection%2Fshao-sisters-scene.jpg&w=1920&q=75"
            alt=""
            className="banner_image"
          />
        </div>
        <img
          alt=""
          loading="lazy"
          width="300"
          height="400"
          decoding="async"
          className="custom_image md:hidden"
          src="https://www.azuki.com/_next/image?url=%2Fhomepage%2FManifestoSection%2Fshao-sisters-scene.jpg&w=600&q=75"
        />
      </div>
    </div>
  );
};

export default Banner;
