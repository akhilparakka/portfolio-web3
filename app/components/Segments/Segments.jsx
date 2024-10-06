import "./Segments.css";

const Segment = ({ details }) => {
  return (
    <>
      <div className="anthology-section">
        <div className="anthology-content">
          <div className="text-section">
            <div className="title-description">
              <h2 className="anthology-title">{details.title}</h2>
              <p className="anthology-description">{details.subheading}</p>
            </div>
            <div className="button-container">
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
          <img
            src={details.image}
            alt="Anthology Series"
            className="anthology-image"
          />
        </div>
      </div>
    </>
  );
};

export default Segment;
