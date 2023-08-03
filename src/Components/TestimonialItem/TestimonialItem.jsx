import React from "react";
import "./TestimonialItem.css";
import peopleOne from "../../images/people1.png";
import peopleTwo from "../../images/people2.png";
import peopleThree from "../../images/people3.png";
import { TestimonialItemCard } from "../TestimonialItemCard/TestimonialItemCard";

export const TestimonialItem = () => {
  const testimonitalInfo = [
    {
      peragraph:
        " elit. Rem error nisi fuga corrupti expedita incidunt deserunt quidem elit. Rem error nisi cum obcaecati ipsa maiores, quos totam ut, quibusdam reiciendis ipsam sint alias in.",
      name: "Winson Herry",
      from: "California",
      img: peopleOne,
    },
    {
      peragraph:
        " elit. Rem error nisi fuga corrupti expedita incidunt deserunt quidem elit. Rem error nisi cum obcaecati ipsa maiores, quos totam ut, quibusdam reiciendis ipsam sint alias in.",
      name: "Ema Gomez",
      from: "California",
      img: peopleTwo,
    },
    {
      peragraph:
        " elit. Rem error nisi fuga corrupti expedita incidunt deserunt quidem elit. Rem error nisi cum obcaecati ipsa maiores, quos totam ut, quibusdam reiciendis ipsam sint alias in.",
      name: "Aliza Farabi",
      from: "California",
      img: peopleThree,
    },
  ];
  return (
    <>
      <div className="testimonial-item">
        <div className="container">
          <div className="row">
            {testimonitalInfo.map((item) => (
              <TestimonialItemCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
