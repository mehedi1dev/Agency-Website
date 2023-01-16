import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footerSlogan">
        <h1>Lets make a great project</h1>
        <p>A partner that handles the heavy lifting for you.</p>
      </div>
      <div className="footerContact">
        <div className="footerContactTitle">
          <h2>Start a conversation</h2>
          <div className="footerHrLine"></div>
        </div>
        <div className="footerContactDetails">
          <div className="footerContactCard">
            <h3>Phone</h3>
            <p>+880-1XXX-XXXXX</p>
          </div>
          <div className="footerContactCard">
            <h3>E-mail</h3>
            <p>abcd1234@dummy.com</p>
          </div>
          <div className="footerContactCard">
            <h3>Website</h3>
            <p>www.dummy-agency.com</p>
          </div>
          <div className="footerContactCard">
            <h3>Address</h3>
            <p>Road #1, Section A, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
