import React from "react";
import "./overview.css";
import pic from '../Components/assets/main_pic.png';
import power from '../Components/assets/power-fig.png';

function Overview() {
  return (
    <>
      <div className="overview-container">
        <section className="content-container">
          <div className="inner-left-section">
            <div className="left-head">
              <h3 className="Head_text">API MANAGEMENT MADE EASY</h3>
            </div>
          </div>
          <div className="head-2">
            <h1 className="heading">
              Unmatched<span className="space"> </span>scale and
              <span className="space"> </span>security
            </h1>
          </div>
          <div className="spacer"></div>
          <div className="para">
            <p className="p_text">
              API management tool for crafting, overseeing, securing API across
              varied use cases, environment, and scales.
            </p>
          </div>
          <div className="spacer2"></div>
          <div className="email-signup-container">
            <div className="form-wrapper">
              <form method="POST" className="email-form">
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  className="email-input"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
                <div className="submit-button-wrapper">
                  <input type="submit" value="Join" className="submit-button" />
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="right-section">
          <figure className="image-container2">
            <div className="image-wrapper">
              <img
                decoding="async"
                sizes="301px"
                srcSet={`${pic}?scale-down-to=512 512w, ${pic} 960w`}
                src={pic}
                alt="An abstract image that represents scalability"
                className="section-image"
              />
            </div>
          </figure>
        </section>
      </div>
      <div className="break-section"></div>
      <section className="powerControl">
        <div className="power-head-div">
          <h2 className="power-heading">
            <span className="power-heading-span">Powerful Controls</span>
          </h2>
        </div>
        <div className="power-des-div">
          <p className="power-des">
            Fuel your curiosity, expand your horizons, and achieve greatness by joining a vibrant community of learners.
          </p>
        </div>
        <div className="breaker"></div>
        <figure className="power-fig">
          <div className="power-fig-div">
            <img
              decoding="async"
              sizes="740px"
              className="power-fig-img"
              srcSet={`${power}?scale-down-to=512 512w, ${power}?scale-down-to=1024 1024w, ${power}?scale-down-to=2048 2048w, ${power} 3361w`}
              src={`${power}?scale-down-to=2048`}
              alt="A visual from the dashboard of Solaris"
            />
          </div>
        </figure>
      </section>
    </>
  );
}

export default Overview;
