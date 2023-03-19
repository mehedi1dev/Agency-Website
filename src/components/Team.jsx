import React, { useEffect, useRef } from "react";
import "../css/team.scss";

import { sliderFunction } from "../lib/slider";

const Team = () => {
  const cardsRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    sliderFunction(cardsRef.current, cardRef.current, 1.5, 16, null, null);
  }, [cardRef, cardsRef]);

  return (
    <div id="team">
      <div className="teamSection container90rem">
        <h1>Meet the team</h1>
        <div className="cardStyleColumn" ref={cardsRef}>
          <div className="card" ref={cardRef}>
            <img src="https://robohash.org/1" alt="user" />
            <div className="cardText">
              <h2>BOT 101</h2>
              <h3>Front-end Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/2" alt="user" />
            <div className="cardText">
              <h2>BOT 102</h2>
              <h3>Front-end Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/3" alt="user" />
            <div className="cardText">
              <h2>BOT 103</h2>
              <h3>Full Stack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/4" alt="user" />
            <div className="cardText">
              <h2>Bot 104</h2>
              <h3>Back-end Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/5" alt="user" />
            <div className="cardText">
              <h2>BOT 105</h2>
              <h3>Android Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/6" alt="user" />
            <div className="cardText">
              <h2>BOT 106</h2>
              <h3>IOS Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/7" alt="user" />
            <div className="cardText">
              <h2>BOT 107</h2>
              <h3>Data Analyst</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/8" alt="user" />
            <div className="cardText">
              <h2>BOT 108</h2>
              <h3>UI/UX Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://robohash.org/9" alt="user" />
            <div className="cardText">
              <h2>BOT 109</h2>
              <h3>UI/UX Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
