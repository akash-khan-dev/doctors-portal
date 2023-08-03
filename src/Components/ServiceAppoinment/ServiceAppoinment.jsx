import React from "react";
import "./ServiceAppoinment.css";
import doctor from "../../images/doctor.png";
import Button from "@mui/material/Button";

export const ServiceAppoinment = () => {
  return (
    <>
      <div className="service-appoinment">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="serice-appoinment-pic">
                <picture>
                  <img src={doctor} alt="doctor" className="img-fluid w-100" />
                </picture>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-appoinmen-content">
                <h3>APPOINMENT</h3>
                <h1>Make On Appoinment Today</h1>
                <p>
                  It is a long astablished fact that a reader will be
                  distractedby the readable content of page when looking at its{" "}
                </p>
                <Button variant="contained">learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
