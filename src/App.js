import React from "react";
import "./App.scss";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        <AboutUs />
      </Layout>
    </div>
  );
};

export default App;
