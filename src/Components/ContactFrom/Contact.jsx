import React from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="contact-from">
                <TextField
                  className="inputs"
                  fullWidth
                  id="outlined-basic"
                  label="Email *"
                  variant="outlined"
                />
                <TextField
                  className="inputs"
                  fullWidth
                  id="outlined-basic"
                  label="Subject *"
                  variant="outlined"
                />
                <textarea
                  name="message"
                  cols="114"
                  rows="10"
                  placeholder="message *"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
