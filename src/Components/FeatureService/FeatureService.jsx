import React from "react";
import "./FeatureService.css";
import Button from "@mui/material/Button";

export const FeatureService = () => {
  return (
    <>
      <div className="feature-service pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-service-img">
                <picture>
                  <img
                    src="./images/treatment.png"
                    alt="treatment "
                    className="img-fluid w-100 "
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="feature-service-content mt-5">
                <h1>Exceptional Dental Care, On Your Teems</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta maiores quidem ea rerum esse laborum iure nisi placeat
                  aperiam fugit mollitia necessitatibus tenetur culpa adipisci
                  magnam voluptatibus similique, perferendis corporis. Est saepe
                  neque, libero id vero incidunt, nemo beatae ea eum animi
                  voluptate odit officia dicta mollitia ipsum corporis alias!
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
