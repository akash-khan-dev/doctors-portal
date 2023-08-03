import React from "react";
import "./Doctor.css";
import doctor from "../../images/doctor-small.png";
import { DoctorItem } from "./DoctorItem";
import { IoMdCall } from "react-icons/io";

export const Doctor = () => {
  const doctors = [
    {
      name: "Dr.Choudi",
      phone: "+880-1704801533",
      img: doctor,
      call: <IoMdCall />,
    },
    {
      name: "Dr.Choudi",
      phone: "+880-1704801533",
      img: doctor,
      call: <IoMdCall />,
    },
    {
      name: "Dr.Choudi",
      phone: "+880-1704801533",
      img: doctor,
      call: <IoMdCall />,
    },
  ];
  return (
    <>
      <div className="doctors pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="doctor-heading text-center">
                <h2>Our Doctors</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {doctors.map((item) => (
              <DoctorItem item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
