import React from "react";
import "./Navabar.css";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link mr-5 active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Dental Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-white" href="#">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
