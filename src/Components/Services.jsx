import React, { useEffect, useState } from "react";
import "./css/Services.css";
import ServicesImg from "../img/services.svg";
import webImg from "../img/servicesIcon/web.png";
import mobileImg from "../img/servicesIcon/mobile.png";
import domainImg from "../img/servicesIcon/domain.png";
import digitalImg from "../img/servicesIcon/digital.png";
import animationImg from "../img/servicesIcon/animation.png";
import illustrationImg from "../img/servicesIcon/illustration.png";

const Services = () => {
  const serviceList = [
    "Web Development",
    "App Development",
    "Domain hosting",
    "Digital Marketing",
    "Animation",
    "UI/UX Design",
  ];

  const [textUpdate, setTextUpdate] = useState("Web Development");
  useEffect(() => {
    const interval = setInterval(() => {
      if (serviceList.indexOf(textUpdate) === serviceList.length - 1) {
        setTextUpdate(serviceList[0]);
      } else {
        setTextUpdate(serviceList[serviceList.indexOf(textUpdate) + 1]);
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="servicesSection">
      <div className="servicesBanner">
        <div className="servicesBannerLeft">
          <h1>
            Better services for your{" "}
            <span style={{ color: "#6c63ff" }}>user</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            tempora quaerat, impedit animi laboriosam modi.
          </p>
          <div className="text">
            <div className="textAnimation">{textUpdate}</div>
          </div>
        </div>
        <div className="servicesBannerRight">
          <img src={ServicesImg} alt="servicesImage" />
        </div>
      </div>
      <p>Expolor our solution</p>
      <h1>Services</h1>
      <div className="servicesCards">
        <div className="serviceCard">
          <img src={webImg} alt="webImg" />
          <h2>Web Application</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae aperiam tempora quia aliquam corrupti asperiores sunt quas
            consectetur eveniet optio aut ad excepturi ratione soluta explicabo
          </p>
          <button>Learn More</button>
        </div>
        <div className="serviceCard">
          <img src={mobileImg} alt="mobileImg" />
          <h2>Mobile Application</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae aperiam tempora quia aliquam corrupti asperiores sunt quas
            consectetur eveniet optio aut ad excepturi ratione soluta explicabo
          </p>
          <button>Learn More</button>
        </div>
        <div className="serviceCard">
          <img src={domainImg} alt="domainImg" />
          <h2>Domain Hosting</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae aperiam tempora quia aliquam corrupti asperiores sunt quas
            consectetur eveniet optio aut ad excepturi ratione soluta explicabo
          </p>
          <button>Learn More</button>
        </div>
        <div className="serviceCard">
          <img src={digitalImg} alt="digitalImg" />
          <h2>Digital Marketing</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae aperiam tempora quia aliquam corrupti asperiores sunt quas
            consectetur eveniet optio aut ad excepturi ratione soluta explicabo
          </p>
          <button>Learn More</button>
        </div>
        <div className="serviceCard">
          <img src={animationImg} alt="animationImg" />
          <h2>Animation</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae aperiam tempora quia aliquam corrupti asperiores sunt quas
            consectetur eveniet optio aut ad excepturi ratione soluta explicabo
          </p>
          <button>Learn More</button>
        </div>
        <div className="serviceCard">
          <img src={illustrationImg} alt="illustartionImg" />
          <h2>UI/UX Design</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae aperiam tempora quia aliquam corrupti asperiores sunt quas
            consectetur eveniet optio aut ad excepturi ratione soluta explicabo
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
