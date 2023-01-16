import React from "react";
import "./css/AboutUs.css";
import priorityImg from "../img/aboutUsIcon/priority.png";
import customerImg from "../img/aboutUsIcon/customer.png";
import securityImg from "../img/aboutUsIcon/security.png";

const AboutUs = () => {
  return (
    <div className="aboutSection">
      <h1>Anonymous Agency Limited</h1>
      <div className="aboutSubSection left">
        <h2>About us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          commodi praesentium cumque illum sunt, exercitationem amet eos
          laborum, quod nemo reiciendis ratione laudantium dolore itaque
          corporis rerum. Repudiandae nulla magnam odio rerum? Ducimus saepe,
          magnam animi deserunt voluptatum dolorum amet dolore fugiat quidem
          inventore aut optio nesciunt expedita, fugit, eum iusto. Perferendis
          aliquam aliquid velit perspiciatis sint, ab et laborum architecto
          porro voluptate itaque magni, sunt dolore, fugit doloribus illo
          necessitatibus vero fuga. Magnam, fugit iste error soluta repudiandae
          temporibus doloribus ullam quis, saepe deserunt et distinctio,
          veritatis ipsum maiores expedita tempora aspernatur doloremque quam.
          Dolor, modi quam deleniti quo obcaecati odio cum eligendi, doloremque
          minus ut pariatur corporis, veniam dicta voluptas facere molestias
          aliquam eveniet vitae. Voluptate, quo, doloribus dolorum veritatis
          possimus eveniet est voluptatum incidunt eaque facere vero alias nemo
          obcaecati doloremque itaque mollitia velit quae temporibus error!
          Vitae est odio, temporibus quod, tempora sapiente non explicabo, ea
          necessitatibus aperiam consectetur! Laboriosam, culpa? Doloribus
          dolorum fuga sit veniam illum iusto deserunt perferendis aspernatur.
          Impedit maxime officia dolorum natus perspiciatis mollitia at
          similique debitis ab? Aliquid, quo vero quasi quas ad a nihil quae.
          Repudiandae rerum doloremque quaerat, itaque sed architecto maiores
          corrupti ad, repellendus dicta explicabo ab eveniet.
        </p>
      </div>
      <div className="aboutSubSection right">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          commodi praesentium cumque illum sunt, exercitationem amet eos
          laborum, quod nemo reiciendis ratione laudantium dolore itaque
          corporis rerum. Repudiandae nulla magnam odio rerum? Ducimus saepe,
          magnam animi deserunt voluptatum dolorum amet dolore fugiat quidem
          inventore aut optio nesciunt expedita, fugit, eum iusto. Perferendis
          aliquam aliquid velit perspiciatis sint, ab et laborum architecto
          porro voluptate itaque magni, sunt dolore, fugit doloribus illo
          necessitatibus vero fuga. Magnam, fugit iste error soluta repudiandae
          temporibus doloribus ullam quis, saepe deserunt et distinctio,
          veritatis ipsum maiores expedita tempora aspernatur doloremque quam.
          Dolor, modi quam deleniti quo obcaecati odio cum eligendi, doloremque
          minus ut pariatur corporis, veniam dicta voluptas facere molestias
          aliquam eveniet vitae. Voluptate, quo, doloribus dolorum veritatis
          possimus eveniet est voluptatum incidunt eaque facere vero alias nemo
          obcaecati doloremque itaque mollitia velit quae temporibus error!
          Vitae est odio, temporibus quod, tempora sapiente non explicabo, ea
          necessitatibus aperiam consectetur! Laboriosam, culpa? Doloribus
          dolorum fuga sit veniam illum iusto deserunt perferendis aspernatur.
          Impedit maxime officia dolorum natus perspiciatis mollitia at
          similique debitis ab? Aliquid, quo vero quasi quas ad a nihil quae.
          Repudiandae rerum doloremque quaerat, itaque sed architecto maiores
          corrupti ad, repellendus dicta explicabo ab eveniet.
        </p>
      </div>
      <div className="aboutSubSection left">
        <h2>Our Vission</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          commodi praesentium cumque illum sunt, exercitationem amet eos
          laborum, quod nemo reiciendis ratione laudantium dolore itaque
          corporis rerum. Repudiandae nulla magnam odio rerum? Ducimus saepe,
          magnam animi deserunt voluptatum dolorum amet dolore fugiat quidem
          inventore aut optio nesciunt expedita, fugit, eum iusto. Perferendis
          aliquam aliquid velit perspiciatis sint, ab et laborum architecto
          porro voluptate itaque magni, sunt dolore, fugit doloribus illo
          necessitatibus vero fuga. Magnam, fugit iste error soluta repudiandae
          temporibus doloribus ullam quis, saepe deserunt et distinctio,
          veritatis ipsum maiores expedita tempora aspernatur doloremque quam.
          Dolor, modi quam deleniti quo obcaecati odio cum eligendi, doloremque
          minus ut pariatur corporis, veniam dicta voluptas facere molestias
          aliquam eveniet vitae. Voluptate, quo, doloribus dolorum veritatis
          possimus eveniet est voluptatum incidunt eaque facere vero alias nemo
          obcaecati doloremque itaque mollitia velit quae temporibus error!
          Vitae est odio, temporibus quod, tempora sapiente non explicabo, ea
          necessitatibus aperiam consectetur! Laboriosam, culpa? Doloribus
          dolorum fuga sit veniam illum iusto deserunt perferendis aspernatur.
          Impedit maxime officia dolorum natus perspiciatis mollitia at
          similique debitis ab? Aliquid, quo vero quasi quas ad a nihil quae.
          Repudiandae rerum doloremque quaerat, itaque sed architecto maiores
          corrupti ad, repellendus dicta explicabo ab eveniet.
        </p>
      </div>
      <div className="whyUs">
        <p>we are ensuring</p>
        <h1>why us ?</h1>
        <div className="whyUsCards">
          <div className="whyUsCard">
            <img src={priorityImg} alt="" />
            <h2>Priority on Perfection</h2>
          </div>
          <div className="whyUsCard">
            <img src={customerImg} alt="" />
            <h2>Customer Satisfaction</h2>
          </div>
          <div className="whyUsCard">
            <img src={securityImg} alt="" />
            <h2>Security & Privacy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
