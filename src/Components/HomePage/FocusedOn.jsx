import React from "react";
import "../css/FocusedOn.css";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineMobile, AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineDesignServices, MdOutlineAnimation } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FocusedOn() {
  return (
    <div className="focusSection">
      <div className="focusSectionLeft">
        <h2>Highly focused on</h2>
        <p>What we do best</p>
      </div>
      <div className="focusSectionRight">
        <div className="card">
          <div className="cardLogo">
            <CgWebsite />
          </div>
          <p>
            <strong>
              Web
              <br />
              Application
            </strong>
          </p>
        </div>
        <div className="card">
          <div className="cardLogo">
            <AiOutlineMobile />
          </div>
          <p>
            <strong>
              Mobile
              <br />
              Application
            </strong>
          </p>
        </div>
        <div className="card">
          <div className="cardLogo">
            <MdOutlineDesignServices />
          </div>
          <p>
            <strong>
              UI/UX
              <br />
              Design
            </strong>
          </p>
        </div>
        <div className="card">
          <div className="cardLogo">
            <MdOutlineAnimation />
          </div>
          <p>
            <strong>Animation</strong>
          </p>
        </div>
        <div className="card">
          <div className="cardLogo">
            <AiOutlineLineChart />
          </div>
          <p>
            <strong>
              Digital
              <br />
              Marketing
            </strong>
          </p>
        </div>
        <div className="card">
          <p>
            <strong>
              <Link to="/Services">More!</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
