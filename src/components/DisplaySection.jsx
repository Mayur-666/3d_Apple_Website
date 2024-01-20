import React from "react";

function DisplaySection({ triggerPreview }) {

  const handleButton = () => {
    const element = document.querySelector(".jumbotron-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant !!</p>
      <span className="description">
        A display that's upto 2x <b>brighter</b> in the Sun.
      </span>
      <button onClick={triggerPreview} className="button">Try Me!</button>
      <button onClick={handleButton} className="back-button">Top</button>
    </div>
  );
}

export default DisplaySection;
