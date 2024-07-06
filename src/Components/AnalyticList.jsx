import React from "react";
import "./analyticListItem.css";
function AnalyticList({ title, description }) {
  return (
    <li className="list-item">
      <div className="item-title-div">
        <h4 className="item-title-h">{title}</h4>
      </div>
      <div className="item-des-div">
        <p className="item-des-p">{description}</p>
      </div>
      <div className="list-break"></div>
    </li>
  );
}

export default AnalyticList;
