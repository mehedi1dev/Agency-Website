import React, { useEffect } from "react";
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
          <div className="element">M</div>
          <div className="element">e</div>
          <div className="element">h</div>
          <div className="element">e</div>
          <div className="element">d</div>
          <div className="element">i</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
