import React from "react";
import "./BusinesInfo.css";
import { BusinessCard } from "./BusinessCard";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdAddCall } from "react-icons/md";

export const BusinesInfo = () => {
  const infoData = [
    {
      title: "Openig Hourse",
      description: "lorem iqsume simply dummy toct ",
      icon: <AiOutlineClockCircle />,
      background: "primary",
    },
    {
      title: "Visir our location",
      description: "brookyn ,NY 10036 united stotos",
      icon: <HiLocationMarker />,
      background: "dark",
    },
    {
      title: "Contact Us",
      description: "+19043589",
      icon: <MdAddCall />,
      background: "primary",
    },
  ];
  return (
    <>
      <div className="card-contaier d-flex justify-content-center">
        <div className="row w-75">
          {infoData.map((info, i) => (
            <BusinessCard info={info} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};
