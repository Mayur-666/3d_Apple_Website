import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import SecondaryImg from "../assets/images/iphone-hand.png";

function Jumbotron() {
  const handleButton = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top - 40,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iphone" />
      <p className="text">Bigger And Faster</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a onClick={handleButton} className="link">
            Learn More
          </a>
        </li>
      </ul>
      <img src={SecondaryImg} alt="iphone in hand" className="iphone-img" />
    </div>
  );
}

export default Jumbotron;
