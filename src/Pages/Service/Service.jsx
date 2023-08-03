import React from "react";
import ServiceHeader from "../../Components/ServiceHeader/ServiceHeader";
import { ServiceItem } from "../../Components/ServiceItem/ServiceItem";
import fluoride from "../../images/fluoride.png";
import cavity from "../../images/cavity.png";
import whitening from "../../images/whitening.png";
import { FeatureService } from "../../Components/FeatureService/FeatureService";
import { ServiceAppoinment } from "../../Components/ServiceAppoinment/ServiceAppoinment";

export const Service = () => {
  const serviaceInfo = [
    {
      img: fluoride,
      heading: "Fluoide Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore quam doloremque!",
    },
    {
      img: cavity,
      heading: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore quam doloremque!",
    },
    {
      img: whitening,
      heading: "Teath Whitening",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore quam doloremque!",
    },
  ];
  return (
    <>
      <ServiceHeader />
      <div className="service-item mb-5">
        <div className="container">
          <div className="row">
            {serviaceInfo.map((info, i) => (
              <ServiceItem info={info} key={i} />
            ))}
          </div>
        </div>
      </div>
      <FeatureService />
      <ServiceAppoinment />
    </>
  );
};
