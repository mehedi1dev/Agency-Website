import React from "react";
import "../css/aboutUs.scss";

import howImage from "../images/how.svg";
import whyChooseUsImage from "../images/whyChooseUs.svg";

import iconUX from "../icon/ux-design.png";
import iconImplementation from "../icon/implementation.png";
import iconDeploy from "../icon/deploy.png";
import iconSupport from "../icon/support.png";
import checkIcon from "../icon/check.png";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="container90rem aboutContainer">
        {/* TITLE */}
        <div className="aboutText">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum
            laborum saepe doloribus nam tempora provident pariatur, facilis
            magni, necessitatibus nisi nesciunt consequatur dolorem maiores
            temporibus recusandae ipsa quidem esse rerum commodi mollitia iste
            soluta cumque neque! Est, nulla amet.
          </p>
        </div>
        {/* HOW We WORK */}
        <div className="howWeWork twoSection">
          <div className=" partStyleOne">
            <div className="workText">
              <h2>How we work!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veniam ducimus aliquid quisquam illum! Nobis recusandae placeat
                quae eligendi commodi.Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <p style={{ textAlign: "center" }}>
                <img src={howImage} alt="Process" />
              </p>
              <p>
                Animi veniam ducimus aliquid quisquam illum! Nobis recusandae
                placeat quae eligendi commodi.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Animi veniam ducimus aliquid
                quisquam illum! Nobis recusandae placeat quae eligendi commodi.
              </p>
            </div>
          </div>
          <div className="partStyleOne">
            <div className="cardStyleRow">
              <div className="card">
                <img src={iconUX} alt="iconUx" />
                <div className="cardText">
                  <h3>UI/UX Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi veniam ducimus aliquid quisquam illum.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={iconImplementation} alt="iconImplementation" />
                <div className="cardText">
                  <h3>Implementation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi veniam ducimus aliquid quisquam illum.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={iconDeploy} alt="iconDeploy" />
                <div className="cardText">
                  <h3>Deploy</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi veniam ducimus aliquid quisquam illum.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={iconSupport} alt="iconSupport" />
                <div className="cardText">
                  <h3>Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi veniam ducimus aliquid quisquam illum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WHY CHOOSE US */}
        <div className="whyChooseUs twoSection">
          <div className="partStyleTwo">
            <img src={whyChooseUsImage} alt="whyChooseUsImage" />
          </div>
          <div className="partStyleOne">
            <h2>Why Choose Us!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              repudiandae voluptates magnam rerum delectus! Nostrum eaque
              voluptatum exercitationem nobis fuga! Sunt ullam nisi alias est
              esse. Aperiam, enim, ipsa esse perspiciatis fugiat excepturi optio
              at error similique aut distinctio. Quasi.
            </p>
            <div className="cardStyleColumnTwo">
              <div className="card">
                <img src={checkIcon} alt="checkIcon" />
                <div className="cardText">
                  <p>Active Communication</p>
                </div>
              </div>
              <div className="card">
                <img src={checkIcon} alt="checkIcon" />
                <div className="cardText">
                  <p>On-Time Delivery</p>
                </div>
              </div>
              <div className="card">
                <img src={checkIcon} alt="checkIcon" />
                <div className="cardText">
                  <p>24/7 Support</p>
                </div>
              </div>
              <div className="card">
                <img src={checkIcon} alt="checkIcon" />
                <div className="cardText">
                  <p>After Sell Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
