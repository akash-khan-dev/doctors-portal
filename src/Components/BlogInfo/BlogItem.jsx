import React from "react";
import "./BlogInfo.css";

export const BlogItem = ({ info, i }) => {
  console.log("images", info.img);
  return (
    <>
      <div className="col-lg-4" key={i}>
        <div className="blog-card">
          <div className="blog-card-top">
            <div className="blog-pic">
              <div className="pic-desing">
                <img src={info.img} alt="peaple" />
              </div>
            </div>
            <div className="blog-name">
              <h3>{info.author}</h3>
              <h4>{info.date}</h4>
            </div>
          </div>
          <div className="blog-content">
            <h1>{info.title}</h1>
            <p>{info.description}</p>
          </div>
          <div className="blog-verlay">
            <div className="blog-overlay-name">
              <h3>{info.author}</h3>
              <h4>{info.date}</h4>
            </div>
            <div className="blog-content">
              <h1>{info.title}</h1>
              <p>{info.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
