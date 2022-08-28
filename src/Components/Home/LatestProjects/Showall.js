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

const Showall = () => {
  const showall = [
    {
      img: require("../../../Asset/img/latestProjects/e1.jpg"),
      name: "EXTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/e2.jpg"),
      name: "EXTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/e3.jpg"),
      name: "EXTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/e4.jpg"),
      name: " COMMERCIAL BUILDING",
    },
    {
      img: require("../../../Asset/img/latestProjects/e5.jpg"),
      name: "COMMERCIAL BUILDING",
    },
    {
      img: require("../../../Asset/img/latestProjects/e6.jpg"),
      name: " COMMERCIAL BUILDING",
    },
    {
      img: require("../../../Asset/img/latestProjects/e7.jpg"),
      name: " COMMERCIAL BUILDING",
    },
    {
      img: require("../../../Asset/img/latestProjects/ex.jpg"),
      name: " COMMERCIAL BUILDING",
    },
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
      img: require("../../../Asset/img/latestProjects/i4.jpg"),
      name: "INTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/i5.jpg"),
      name: "INTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/latestProjects/i6.jpg"),
      name: "INTERIOR DESIGN",
    },
  ];

  // const [shaowall, setShow] = useState([]);
  // console.log(shaowall);
  // useEffect(() => {
  //   fetch("Showall.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setShow(data);
  //     });
  // }, []);
  return (
    <div>
      <Swiper
        slidesPerView={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {showall.map((show) => (
          <SwiperSlide>
            <div className="latest-col">
              <img src={show.img} alt="" />
              <div className="latest-text ">
                <h3 className="border">{show.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Showall;
