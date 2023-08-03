import React from "react";
import "./Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-first-wapper">
                <ul>
                  <li>
                    <a href="#">Emergency Dental Care</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Treatment of Personal Diseases</a>
                  </li>
                  <li>
                    <a href="#">Tooth Extraction</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-second-wapper">
                <div className="second-heading">
                  <h3>Service</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Emergency Dental Care</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Treatment of Personal Diseases</a>
                  </li>
                  <li>
                    <a href="#">Tooth Extraction</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-third-wapper">
                <div className="third-heading">
                  <h3>Oral Health</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Emergency Dental Care</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Treatment of Personal Diseases</a>
                  </li>
                  <li>
                    <a href="#">Tooth Extraction</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                  <li>
                    <a href="#">Check Up</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-second-wapper">
                <div className="second-heading">
                  <h3>Our Address</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">New York - 101010100 Hudson</a>
                  </li>
                  <li>
                    <a href="#">Yards</a>
                  </li>
                </ul>
                <div className="footer-icon d-flex gap-2">
                  <div className="icon">
                    <BiLogoFacebook />
                  </div>
                  <div className="icon">
                    <AiOutlineGoogle />
                  </div>
                  <div className="icon">
                    <BiLogoInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
