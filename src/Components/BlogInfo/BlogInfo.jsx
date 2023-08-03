import React from "react";
import "./BlogInfo.css";
import peopleOne from "../../images/people1.png";
import peopleTwo from "../../images/people2.png";
import peopleThree from "../../images/people3.png";

import { BlogItem } from "./BlogItem";

export const BlogInfo = () => {
  const blogInfo = [
    {
      title: "Check at Least a doctor in a Year For Your Teeth ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam voluptatibus rerum a odio, dignissimos, incidunt quo, delectus fugiat quam minima.",
      author: "Dr. Cudi",
      date: "23 April 2019",
      img: peopleOne,
    },
    {
      title: "Two time brush in a day can keep you healthy ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam voluptatibus rerum a odio, dignissimos, incidunt quo, delectus fugiat quam minima.",
      author: "Dr. Sinthia",
      date: "23 April 2019",
      img: peopleTwo,
    },
    {
      title: "The booth cancer is taking a challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam voluptatibus rerum a odio, dignissimos, incidunt quo, delectus fugiat quam minima.",
      author: "Dr. cudi",
      date: "23 April 2019",
      img: peopleThree,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {blogInfo.map((info, i) => (
            <BlogItem info={info} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};
