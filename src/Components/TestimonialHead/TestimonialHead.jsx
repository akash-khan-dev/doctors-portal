import React from "react";
import "./testimonialHead.css";
import { ImQuotesLeft } from "react-icons/im";

export const TestimonialHead = () => {
  return (
    <>
      <div className="testimotial-head">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-content">
                <h3>TESTIMONIAL</h3>
                <h1>What's Our patients says</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-icon text-end">
                <ImQuotesLeft />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
