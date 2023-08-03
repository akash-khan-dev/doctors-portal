import React from "react";
import "./TestimonialITemCard.css";

export const TestimonialItemCard = ({ item }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="testimonial-card-wrapper">
          <p>{item.peragraph}</p>
          <div className="testimonital-info">
            <div className="info-pic">
              <div className="pic-desing">
                <img src={item.img} alt="people" />
              </div>
            </div>
            <div className="info-name">
              <h4>{item.name}</h4>
              <h6>{item.from}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
