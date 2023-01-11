import React from "react";
import "../css/Banner.css";
import BannerImage from "../../img/banner.svg";
import { CiPhone } from "react-icons/ci";

export default function Banner() {
  return (
    <div className="bannerSection">
      <div className="bannerSectionLeft">
        <h1>Help your business grow with technology</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          aperiam eveniet voluptate sit voluptatibus, necessitatibus recusandae
          qui esse voluptas non.
        </p>
        <div className="button">
          <button>Services</button>
          <button>About Us</button>
        </div>
        <div className="horizontalLine"></div>
        <div className="hotline">
          <p>
            *If you are hurry, quick call us.
            <br />
            Our support is open for 24/7!
          </p>
          <div className="hotlineNumber">
            <div className="hotlineNumberLogo">
              <CiPhone />
            </div>
            <div>
              <h2>Hotline</h2>
              <p>+880-1XXX-XXXXXX</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerSectionRight">
        <img src={BannerImage} alt="bannerImage" />
        <div className="horizontalList">
          <p>
            Web
            <br />
            Development
          </p>
          <p>
            Android
            <br />
            Development
          </p>
          <p>
            UX
            <br />
            Design
          </p>
        </div>
      </div>
    </div>
  );
}
