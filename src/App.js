import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Agency-Website/" element={<Homepage />} />
        <Route path="/Agency-Website/AboutUs" element={<AboutUs />} />
        <Route path="/Agency-Website/ContactUs" element={<ContactUs />} />
        <Route path="/Agency-Website/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
