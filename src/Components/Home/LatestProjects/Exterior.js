import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import e1 from "../../../Asset/img/latestProjects/e1.jpg";
import e2 from "../../../Asset/img/latestProjects/e2.jpg";
import e3 from "../../../Asset/img/latestProjects/e3.jpg";
import e4 from "../../../Asset/img/latestProjects/e4.jpg";
import { NavLink } from "react-router-dom";

const Exterior = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:px-11 px-3">
        <div className="latest-col">
          <img src={e1} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>{" "}
        <div className="latest-col">
          <img src={e2} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>{" "}
        <div className="latest-col">
          <img src={e3} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>{" "}
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

export default Exterior;
