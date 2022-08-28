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

const Interior = () => {
  return (
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
      <SwiperSlide>
        <div className="latest-col">
          <img src={i1} alt="" />
          <div className="latest-text ">
            <h3 className=" ">INTERIOR DESIGN</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="latest-col">
          <img src={i2} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="latest-col">
          <img src={i3} alt="" />
          <div className="latest-text ">
            <h3 className="border">INTERIOR DESIGN</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="latest-col">
          <img src={i4} alt="" />
          <div className="latest-text ">
            <h3 className="border ">INTERIOR DESIGN</h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Interior;
