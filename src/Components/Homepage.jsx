import React, { useEffect } from "react";
import Banner from "./HomePage/Banner";
import FocusedOn from "./HomePage/FocusedOn";
import FollowStep from "./HomePage/FollowStep";
import ExpertIn from "./HomePage/ExpertIn";
import "./css/Homepage.css";

const Homepage = () => {
  useEffect(() => {
    var windowWidth = window.innerWidth;

    var horizontalLength =
      document.querySelector(".elementWrapper").scrollWidth;

    var distanceFromTop =
      document.querySelector(".horizontalSection").offsetTop;

    var scrollDistance = distanceFromTop + horizontalLength - windowWidth;

    document.querySelector(".horizontalSection").style.height =
      horizontalLength + "px";

    window.onscroll = function () {
      var scrollTop = window.pageYOffset;
      console.log(scrollTop);

      if (scrollTop >= distanceFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".elementWrapper").style.transform =
          "translateX(-" + (scrollTop - distanceFromTop) + "px)";
      }
    };
  });

  return (
    <div className="horizontalSection">
      <div className="stickyWrapper">
        <div className="elementWrapper">
          <div className="element">
            <Banner />
          </div>
          <div className="element">
            <FocusedOn />
          </div>
          <div className="element">
            <ExpertIn />
          </div>
          <div className="element">
            <FollowStep />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
