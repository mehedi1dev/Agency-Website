import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./css/Contact.css";

const ContactUs = () => {
  return (
    <div className="contactSection">
      <h1>Feel Free to Contact With Us</h1>
      <div className="contactDetails">
        <div className="contactLeft">
          <h2>Address</h2>
          <p>Road #1, Section A, City, Country</p>
          <h2>Mobile</h2>
          <p>+880-1XXX-XXXXX</p>
          <h2>WhatsApp</h2>
          <p>+880-1XXX-XXXXX</p>
          <h2>Email</h2>
          <p>abcd1234@dummy.com</p>
        </div>
        <div className="contactRight">
          <div className="socialMedia">
            <FaFacebookF style={{ color: "#1771e6" }} />
            <p>/agencyWebsite</p>
          </div>
          <div className="socialMedia">
            <FaInstagram style={{ color: "#513ecb" }} />
            <p>/agencyWebsite</p>
          </div>
          <div className="socialMedia">
            <FaLinkedinIn style={{ color: "#026eaa" }} />
            <p>/agencyWebsite</p>
          </div>
          <div className="socialMedia">
            <FaTwitter style={{ color: "#1c93e4" }} />
            <p>/agencyWebsite</p>
          </div>
          <div className="socialMedia">
            <FaYoutube style={{ color: "#f10000" }} />
            <p>/agencyWebsite</p>
          </div>
        </div>
      </div>
      <div className="contactBox">
        <h1>Send a message</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" cols="50" rows="10"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactUs;
