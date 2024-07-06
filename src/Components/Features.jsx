import React from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
import analyticPic from "../Components/assets/analyticImgavif.avif";
import AnalyticList from "./AnalyticList";
function Features() {
  return (
    <>
      <div className="sectionFeature">
        <div
          className="breakerF relative flex-none overflow-hidden w-[190px] h-[113px] "
          style={{ zIndex: 3 }}
        ></div>
        <div className="head-div">
          <h2 className="heading">
            <span className="heading-span">Features</span>
          </h2>
        </div>

        <div className="feature-des-div">
          <p className="feature-p">
            Improve your API experience with privacy, scalability, migration
            tools, job management, CLI support, and cutting-edge experimental
            features.
          </p>
        </div>
        <div className="feature-card-div">
          <FeatureCard description="Ensure data security with our privacy-centric approach to API management." />
          <FeatureCard description="Seamlessly adapt to your evolving API needs, ensuring efficiency at any scale." />
          <FeatureCard description="Effortlessly transition with robust tools for smooth API migration processes." />
          <FeatureCard description="Schedule recurring tasks effortlessly with our intuitive job management." />
          <FeatureCard description="Streamline operations with seamless command line interface compatibility." />
          <FeatureCard description="Unlock cutting-edge capabilities with our innovative experimental toolkit." />
        </div>
        <div className="breaker-feature"></div>
        <section className="feature-analytic-sec">
          <figure className="f-fig">
            <div className="f-fig-div">
              <img
                decoding="async"
                loading="lazy"
                src={analyticPic}
                alt="An analytic Pic"
                className="f-fig-img"
              />
            </div>
          </figure>
          <div className="analysis-insight">
            <div className="analytic-head-div">
              <h3 className="analytic-heading">Analytics Insights</h3>
            </div>
            <ul className="analytic-list">
              <AnalyticList
                title="API Performance"
                description="Real-time metrics for optimal API performance. Monitor response times and optimize user experiences."
              />
              <AnalyticList
                title="Usage Trends"
                description="Analyze usage patterns for informed decision-making and employ data-driven insights to strategize effectively."
              />
              <AnalyticList
                title="Error Analysis"
                description="Identify and resolve issues with detailed error analytics. Enhance reliability by addressing potential bottlenecks."
              />
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Features;
