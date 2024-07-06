import React from "react";
import "./Sliders.css";
function SliderItem({ imag }) {
  return (
    <figure className="list-item-fig">
      <div className="list-item-div">
        <img
          className="list-item-img"
          decoding="async"
          sizes="197.717px"
          src={imag}
          alt="logo of Company"
        />
      </div>
    </figure>
  );
}

export default SliderItem;
