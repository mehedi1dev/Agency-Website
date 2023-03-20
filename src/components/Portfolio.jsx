import React from "react";
import "../css/portfolio.scss";

import imageOne from "../images/portfolioImage/1.jpg";
import imageTwo from "../images/portfolioImage/2.jpg";
import imageThree from "../images/portfolioImage/3.jpg";
import imageFour from "../images/portfolioImage/4.jpg";
import imageFive from "../images/portfolioImage/5.jpg";
import imageSix from "../images/portfolioImage/6.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolioSection container90rem">
        <h1>Our Portfolio</h1>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={imageOne} class="gallery__img" alt="imageOne" />
            <div className="hoverText">
              <h2>Project #1</h2>
              <a href="#portfolio">Link</a>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={imageTwo} class="gallery__img" alt="imageOne" />
            <div className="hoverText">
              <h2>Project #2</h2>
              <a href="#portfolio">Link</a>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={imageThree} class="gallery__img" alt="imageOne" />
            <div className="hoverText">
              <h2>Project #3</h2>
              <a href="#portfolio">Link</a>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={imageFour} class="gallery__img" alt="imageOne" />
            <div className="hoverText">
              <h2>Project #4</h2>
              <a href="#portfolio">Link</a>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={imageSix} class="gallery__img" alt="imageOne" />
            <div className="hoverText">
              <h2>Project #5</h2>
              <a href="#portfolio">Link</a>
            </div>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={imageFive} class="gallery__img" alt="imageOne" />
            <div className="hoverText">
              <h2>Project #6</h2>
              <a href="#portfolio">Link</a>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
