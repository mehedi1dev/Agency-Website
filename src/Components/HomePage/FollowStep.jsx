import React from "react";
import "../css/HomepageCss/FollowStep.css";
import step from "../../img/step.svg";
import {
  FcPlanner,
  FcSettings,
  FcDeployment,
  FcTreeStructure,
  FcCheckmark,
  FcLandscape,
} from "react-icons/fc";

export default function FollowStep() {
  return (
    <div className="followSection">
      <h2>To make a perfect project</h2>
      <p>We follow the steps</p>
      <div className="followSectionTwo">
        <div className="followSectionLeft">
          <img src={step} alt="steps" />
        </div>
        <div className="followSectionRight">
          <div className="followCard">
            <FcPlanner />
            <p>Planning</p>
          </div>
          <div className="followCard">
            <FcTreeStructure style={{ color: "red" }} />
            <p>Analysis</p>
          </div>
          <div className="followCard">
            <FcLandscape />
            <p>Design</p>
          </div>
          <div className="followCard">
            <FcSettings />
            <p>Implementation</p>
          </div>
          <div className="followCard">
            <FcCheckmark />
            <p>Testing</p>
          </div>
          <div className="followCard">
            <FcDeployment />
            <p>Deploy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
