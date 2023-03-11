import React from "react";
import "./App.scss";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ExtraInformation from "./components/ExtraInformation";

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        <AboutUs />
        <Services />
        <ExtraInformation />
      </Layout>
    </div>
  );
};

export default App;
