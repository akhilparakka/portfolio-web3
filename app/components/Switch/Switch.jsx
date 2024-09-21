import "./Switch.css";

const Switch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <input type="checkbox" id="switch" className="switch-input" />
      <label htmlFor="switch" className="switch-label">
        Toggle
      </label>
    </div>
  );
};

export default Switch;
