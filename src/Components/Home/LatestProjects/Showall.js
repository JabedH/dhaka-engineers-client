import React, { useEffect, useState } from "react";
import p1 from "../../../Asset/img/latestProjects/p-2.jpg";
import p2 from "../../../Asset/img/latestProjects/ex.jpg";
import p3 from "../../../Asset/img/latestProjects/p-2.jpg";
import p4 from "../../../Asset/img/latestProjects/p-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Interior from "./Interior";
import { NavLink } from "react-router-dom";

const Showall = () => {
  const showall = [
    {
      img: require("../../../Asset/img/latestProjects/i1.jpg"),
      name: "INTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/i2.jpg"),
      name: "INTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/i3.jpg"),
      name: "INTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/ex.jpg"),
      name: " COMMERCIAL BUILDING",
    },
    {
      img: require("../../../Asset/img/latestProjects/e1.jpg"),
      name: "EXTERIOR DESIGN",
    },

    {
      img: require("../../../Asset/img/latestProjects/e7.jpg"),
      name: " COMMERCIAL BUILDING",
    },
  ];

  return (
    <div>
      <div className="grid  lg:grid-cols-3 grid-cols-2 lg:px-11 px-3">
        {showall.map((show) => (
          <div className="latest-col">
            <img src={show.img} alt="" />
            <div className="latest-text ">
              <h3 className="border">{show.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <ul>
        <li className="mt-10 pb-10">
          <NavLink to="/viewall" className="btn btn-primary">
            View All Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Showall;
