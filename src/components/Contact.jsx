import React from "react";
import "../css/contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactSection container90rem">
        <h1>Contact Us</h1>
        <div className="twoSection">
          <form className="partStyleOne">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
            <label>Email</label>
            <input type="email" placeholder="Email" required />
            <label>Message</label>
            <textarea cols="30" rows="10"></textarea>
            <input type="submit" className="submitButton" />
          </form>

          <div className="partStyleOne info">
            <h2>Lets here from you!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum porro architecto incidunt eveniet hic non!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              unde!
            </p>
            <h3>Lets discuss over a coffee.</h3>
            <span>
              <strong>Email:</strong> agency@company.com
            </span>
            <span>
              <strong>Contact:</strong> +123-456-78900
            </span>
            <span>
              <strong>Address:</strong> #53 Street, City, Country.
            </span>
            <span>
              <strong>Gmail </strong>
              <strong>LinkedIn </strong>
              <strong>Facebook</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
