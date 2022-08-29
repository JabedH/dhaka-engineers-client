import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import i1 from "../../../Asset/img/latestProjects/i1.jpg";
import i2 from "../../../Asset/img/latestProjects/i2.jpg";
import i3 from "../../../Asset/img/latestProjects/i3.jpg";
import i4 from "../../../Asset/img/latestProjects/i4.jpg";
import { NavLink } from "react-router-dom";

const Interior = () => {
  return (
    <div>
      <div className="grid  lg:grid-cols-3 grid-cols-2 lg:px-11 px-3">
        <div className="latest-col">
          <img src={i1} alt="" />
          <div className="latest-text ">
            <h3 className=" ">INTERIOR DESIGN</h3>
          </div>
        </div>{" "}
        <div className="latest-col">
          <img src={i2} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>{" "}
        <div className="latest-col">
          <img src={i3} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>
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

export default Interior;
