import React from "react";
import "./App.css"; // Assuming Tailwind CSS is imported here
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import BackgroundImage from "./Components/BackgroundImage";
import Features from "./Components/Features";
import References from "./Components/References";
const App = () => {
  return (
    <div
      id="main "
      className="m-0 p-0 box-border font-sans z-0 "
      style={{
        backgroundColor: "#0b0e0f",
      }}
    >
      <div
        id="sub-main  "
        className=" box-border flex flex-col flex-wrap justify-start items-center content-center overflow-hidden relative min-h-screen "
        style={{
          "--rem": "16",
          fontSize: "12px",
          fontFamily: "sans-serif",
          "--token-a8e28c9d-4ce6-4ad2-96a7-a1a12837bc97": "rgb(254, 232, 76)",
          "--token-b86e4be1-9c71-4182-8aae-893747175d3f": "rgb(23, 30, 32)",
          "--framer-aspect-ratio-supported": "auto",
          WebkitFontSmoothing: "inherit",
          gap: "0px",
          padding: "100px 0 0",

          backgroundColor: "#0b0e0f",
          width: "auto",
        }}
      >
        <Navbar />

        <Overview />
        <Features />
        <References />
        <BackgroundImage />
      </div>
    </div>
  );
};

export default App;
