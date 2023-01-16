import React from "react";
import "../css/HomepageCss/ExpertIn.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNode, FaPython } from "react-icons/fa";
import { FcVideoProjector } from "react-icons/fc";
import {
  SiCss3,
  SiFirebase,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiMongodb,
} from "react-icons/si";

export default function ExpertIn() {
  return (
    <div className="expertSection">
      <div className="title">
        <h1>We are expert in</h1>
      </div>
      <div className="expertCards">
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#e44d26" }}>
            <AiFillHtml5 />
          </div>
          <p>Html</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#2449d8" }}>
            <SiCss3 />
          </div>
          <p>css</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#e4d04b" }}>
            <SiJavascript />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#5ccfee" }}>
            <FaReact />
          </div>
          <p>React</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#3b7f3a" }}>
            <FaNode />
          </div>
          <p>NodeJs</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#118b4b" }}>
            <SiMongodb />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#f2c201" }}>
            <SiFirebase />
          </div>
          <p>Firebase</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#336d9d" }}>
            <FaPython />
          </div>
          <p>Python</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#e01e23" }}>
            <SiJava />
          </div>
          <p>Java</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo" style={{ color: "#bf14cd" }}>
            <SiKotlin />
          </div>
          <p>Kotlin</p>
        </div>
        <div className="expertCard">
          <div className="expertCardLogo">
            <FcVideoProjector />
          </div>
          <p>Animation</p>
        </div>
      </div>
    </div>
  );
}
