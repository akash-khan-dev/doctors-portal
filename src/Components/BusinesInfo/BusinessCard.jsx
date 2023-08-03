import React from "react";
import "./BusinesInfo.css";

export const BusinessCard = ({ info, i }) => {
  return (
    <>
      <div className="col-lg-4 info-m" key={i}>
        <div
          className={`info-card d-flex align-items-center info-${info.background}`}
        >
          <div className="info-icon">{info.icon}</div>
          <div className="info-text">
            <h3>{info.title}</h3>
            <p>{info.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
