import React from "react";
import "./Doctor.css";

export const DoctorItem = ({ item }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="item-box">
          <div className="doctor-img">
            <picture>
              <img src={item.img} alt="doctor" className="img-fluid w-100 " />
            </picture>
          </div>
          <div className="doctor-info">
            <h2 className="text-center">{item.name}</h2>
            <div className="doctor-contact">
              <div className="contact-icon">{item.call}</div>
              <div className="contact-number">
                <h4>{item.phone}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
