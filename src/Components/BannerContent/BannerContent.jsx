import React from "react";
import "./BannerContent.css";
import Button from "@mui/material/Button";

export const BannerContent = () => {
  return (
    <div className="banner-main">
      <div className="row ">
        <div className="col-lg-4 offset-1">
          <div className="banner-box d-flex">
            <div className="banner-text">
              <h1>Your New Smaile Starts Here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                quo vitae vero modi saepe numquam sint. Quibusdam iusto
                asperiores !
              </p>
              <Button variant="contained">GET APPOINMENT</Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-img">
            <picture>
              <img className="img-fluid" src="./images/chair.png" alt="chair" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
