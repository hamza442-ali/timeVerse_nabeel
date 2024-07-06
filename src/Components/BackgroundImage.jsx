import React from "react";
import "./bg.css";
import gridFront from "../Components/assets/gridFront.png";
const BackgroundImage = () => {
  return (
    <>
      <div className="background-image">
        <img
          src={`${process.env.PUBLIC_URL}/largegrid.png`}
          srcSet={`
          ${process.env.PUBLIC_URL}/largegrid.png?scale-down-to=512 512w,
          ${process.env.PUBLIC_URL}/largegrid.png?scale-down-to=1024 1024w,
          ${process.env.PUBLIC_URL}/largegrid.png?scale-down-to=2048 2048w,
          ${process.env.PUBLIC_URL}/largegrid.png 3254w
        `}
          sizes="100vw"
          alt="Background"
          className="background-img m-0"
        />
      </div>
      <figure
        className="image-container"
        style={{
          position: "absolute",
          height: "100vw",
        }}
        data-framer-name="Image"
      >
        <div className="image-wrapper">
          <img
            src={gridFront}
            sizes="100vw"
            alt="Foreground"
            className="foreground-img"
          />
        </div>
      </figure>
      <div
        className="shadow"
        aria-label="shadow"
        data-framer-name="Shadow"
      ></div>
    </>
  );
};

export default BackgroundImage;
