import React from "react";
import "../css/home.scss";
import workImg from "../images/work.svg";
const Home = () => {
  return (
    <div id="home" className="container twoSectionWithOneImage">
      <div className="textPart">
        <h1>Your vision is our mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          exercitationem voluptatum suscipit libero! Voluptas sit aspernatur
          asperiores iste. Itaque voluptatibus accusamus consectetur laudantium
          culpa voluptas.
        </p>
        <div className="aboutUsLink">
          <a href="#about">About Us</a>
        </div>
      </div>
      <div className="imagePart">
        <img src={workImg} alt="WorkImage" />
      </div>
    </div>
  );
};

export default Home;
