import React from "react";

import "./Sliders.css";
import SliderItem from "./SliderItem";
import Image1 from "../Components/assets/sliders/11.png";
import Image2 from "../Components/assets/sliders/12.png";
import Image3 from "../Components/assets/sliders/13.png";
import Image4 from "../Components/assets/sliders/14.png";
import Image5 from "../Components/assets/sliders/15.png";
import Image6 from "../Components/assets/sliders/16.png";
import Image7 from "../Components/assets/sliders/17.png";
import Image8 from "../Components/assets/sliders/18.png";

import Image9 from "../Components/assets/sliders/p1.png";
import Image10 from "../Components/assets/sliders/p11.png";
import Image11 from "../Components/assets/sliders/p12.png";
import Image12 from "../Components/assets/sliders/p2.png";
import Image13 from "../Components/assets/sliders/p3.png";
import Image14 from "../Components/assets/sliders/p6.png";
import Image15 from "../Components/assets/sliders/p7.png";
import Image16 from "../Components/assets/sliders/p8.png";

function Slider() {
  return (
    <>
      <div className="slider">
        <section className="slider-section">
          <ul className="slider1">
            <li className="list-items-1">
              <SliderItem imag={Image1} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image2} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image3} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image4} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image5} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image6} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image7} />
            </li>{" "}
            <li className="list-items-1">
              <SliderItem imag={Image8} />
            </li>
          </ul>
        </section>
      </div>
      <div className="slider">
        <section className="slider-section">
          <ul className="slider2">
            <li className="list-items-1">
              <SliderItem imag={Image10} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image11} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image12} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image9} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image13} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image14} />
            </li>
            <li className="list-items-1">
              <SliderItem imag={Image15} />
            </li>{" "}
            <li className="list-items-1">
              <SliderItem imag={Image16} />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Slider;
