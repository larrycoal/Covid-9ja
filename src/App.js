import React from "react";
import { Element } from "react-scroll";
import Header from "./components/header_footer/header";
import "./resources/styles.css";
import Featured from "./components/Featured";
import Info from "./components/Info";
import Highlight from "./components/Highlights";
import Donation from "./components/Donations.js";
import Location from "./components/Location";
import Footer from "./components/header_footer/footer";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Element>
        <Header />
      </Element>
      <Element name="home">
        <Featured />
      </Element>
      <Element name="info">
        <Info />
      </Element>
      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="donation">
        <Donation />
      </Element>
      <Element name="map">
        <Location />
      </Element>
      <Element>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
