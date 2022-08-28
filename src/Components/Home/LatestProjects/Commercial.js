import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import e5 from "../../../Asset/img/latestProjects/e5.jpg";
import e6 from "../../../Asset/img/latestProjects/e6.jpg";
import e7 from "../../../Asset/img/latestProjects/e7.jpg";
import e8 from "../../../Asset/img/latestProjects/ex.jpg";

const Commercial = () => {
  return (
    <>
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
            <img src={e8} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="latest-col">
            <img src={e6} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="latest-col">
            <img src={e5} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="latest-col">
            <img src={e7} alt="" />
            <div className="latest-text ">
              <h3 className="border">INTERIOR DESIGN</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Commercial;
