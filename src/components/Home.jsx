import React from "react";
import "../css/home.scss";
import workImg from "../images/work.svg";
const Home = () => {
  return (
    <div id="home">
      <div className="container90rem twoSection homeContainer">
        <div className="partStyleOne">
          <h1>Your vision is our mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            exercitationem voluptatum suscipit libero! Voluptas sit aspernatur
            asperiores iste. Itaque voluptatibus accusamus consectetur
            laudantium culpa voluptas.
            <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Illo asperiores, totam saepe voluptate et quisquam sunt ea at
            corrupti praesentium soluta.
          </p>
          <div className="aboutUsLink">
            <a href="#about">About Us</a>
          </div>
        </div>
        <div className="partStyleTwo">
          <img src={workImg} alt="WorkImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
