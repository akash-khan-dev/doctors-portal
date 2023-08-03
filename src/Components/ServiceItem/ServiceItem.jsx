import React from "react";
import "./ServiceItem.css";

export const ServiceItem = ({ info, i }) => {
  return (
    <>
      <div className="col-lg-4" key={i}>
        <div className="service-box text-center mt-5">
          <img src={info.img} alt="" />
          <h2>{info.heading}</h2>
          <p>{info.description}</p>
        </div>
      </div>
    </>
  );
};
