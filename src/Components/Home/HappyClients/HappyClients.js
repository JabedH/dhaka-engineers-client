import React from "react";
import img1 from "../../../Asset/img/client/client1.png";

const HappyClients = () => {
  const allImg = [
    {
      img: require("../../../Asset/img/client/client7.png"),
    },
    {
      img: require("../../../Asset/img/client/client9.png"),
    },
    {
      img: require("../../../Asset/img/client/client3.png"),
    },
    {
      img: require("../../../Asset/img/client/client4.png"),
    },
    {
      img: require("../../../Asset/img/client/client5.png"),
    },
    {
      img: require("../../../Asset/img/client/client6.png"),
    },
    {
      img: require("../../../Asset/img/client/client1.png"),
    },
    {
      img: require("../../../Asset/img/client/client2.png"),
    },
  ];
  return (
    <div className=" px-11 mb-10">
      <h3 className="lg:my-14 my-8 text-2xl font-bold">HAPPY CLIENTS</h3>
      <div className="grid  lg:grid-cols-4 grid-cols-2 justify-items-center gap-5">
        {allImg.map((imgs) => (
          <div className="">
            <div className=" ">
              <div className="border border-gray-400 p-5 lg:w-44 w-28 ">
                <img src={imgs.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
