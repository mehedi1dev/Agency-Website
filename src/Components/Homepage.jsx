import React, { useEffect, useState } from "react";
import Banner from "./HomePage/Banner";
import FocusedOn from "./HomePage/FocusedOn";
import FollowStep from "./HomePage/FollowStep";
import ExpertIn from "./HomePage/ExpertIn";
import "./css/Homepage.css";

const Homepage = () => {
  const style = {
    height: "100%",
    width: "100%",
  };
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1400px)")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMatches(window.matchMedia("(min-width: 1400px)"));
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (matches.matches) {
      console.log("te");
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

        if (
          scrollTop >= distanceFromTop &&
          scrollTop <= scrollDistance &&
          matches.matches
        ) {
          document.querySelector(".elementWrapper").style.transform =
            "translateX(-" + (scrollTop - distanceFromTop) + "px)";
        }
      };
    }
  });

  if (matches.matches) {
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
  } else {
    return (
      <div>
        <div style={style}>
          <Banner />
        </div>
        <FocusedOn />
        <ExpertIn />
        <FollowStep />
      </div>
    );
  }
};

export default Homepage;
