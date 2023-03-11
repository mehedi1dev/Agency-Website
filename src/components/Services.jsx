import React from "react";

import "../css/services.scss";

import webDesignIcon from "../icon/webDesign.png";
import webDevelopmentIcon from "../icon/webDevelopment.png";
import androidDevelopmentIcon from "../icon/andoirdDevelopment.png";
const Services = () => {
  return (
    <div id="services">
      <div className="servicesSection container90rem">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum
          laborum saepe doloribus nam tempora provident pariatur, facilis magni,
          necessitatibus nisi nesciunt consequatur dolorem maiores temporibus
          recusandae ipsa quidem esse rerum commodi mollitia iste soluta cumque
          neque! Est, nulla amet. Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="cardStyleColumn">
          <div className="card">
            <img src={webDesignIcon} alt="webDesignIcon" />
            <div className="cardText">
              <h3>Graphic Design</h3>
              <p>
                Lorem ipsum dolor sit amet sit amet consec adipisicing elit.
                Delemas repellat perspiciatis dignissimos illum.
              </p>
              <div className="linkLearnMore">
                <a href="#!">Learn More →</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={webDevelopmentIcon} alt="webDevelopmentIcon" />
            <div className="cardText">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet sit amet consec adipisicing elit.
                Delemas repellat perspiciatis dignissimos illum.
              </p>
              <div className="linkLearnMore">
                <a href="#!">Learn More →</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={androidDevelopmentIcon} alt="androidDevelopmentIcon" />
            <div className="cardText">
              <h3> IOS Development</h3>
              <p>
                Lorem ipsum dolor sit amet sit amet consec adipisicing elit.
                Delemas repellat perspiciatis dignissimos illum.
              </p>
              <div className="linkLearnMore">
                <a href="#!">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
