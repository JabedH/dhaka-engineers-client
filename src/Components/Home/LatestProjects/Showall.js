import React from "react";
import p1 from "../../../Asset/img/latestProjects/p-2.jpg";
import p2 from "../../../Asset/img/latestProjects/ex.jpg";
import p3 from "../../../Asset/img/latestProjects/p-2.jpg";
import p4 from "../../../Asset/img/latestProjects/p-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Showall = () => {
  return (
    <div>
      {/* <div>
        <div className="grid justify-items-center lg:grid-cols-3 ">
          <div className="latest-col">
            <img src={p3} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
          <div className="latest-col">
            <img src={p2} alt="" />
            <div className="latest-text">
              <h3 className="border">EXTERIOR DESIGN</h3>
            </div>
          </div>
          <div className="latest-col">
            <img src={p4} alt="" />
            <div className="latest-text">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper"> */}
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
            <img src={p3} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="latest-col">
            <img src={p3} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="latest-col">
            <img src={p3} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Showall;
