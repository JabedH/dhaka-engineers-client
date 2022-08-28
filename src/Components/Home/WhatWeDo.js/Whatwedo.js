import React from "react";
import img1 from "../../../Asset/img/icon/3D.png";
import img2 from "../../../Asset/img/icon/APPROVAL.png";
import img3 from "../../../Asset/img/icon/ARC.png";
import img4 from "../../../Asset/img/icon/electricity.png";
import img5 from "../../../Asset/img/icon/INTERIOR.png";
import img6 from "../../../Asset/img/icon/LANDSCAPE.png";
import img7 from "../../../Asset/img/icon/PLUMBING.png";
import img8 from "../../../Asset/img/icon/SHEET.png";
import img9 from "../../../Asset/img/icon/SOIL.png";
import img10 from "../../../Asset/img/icon/structure.png";
import img11 from "../../../Asset/img/icon/SURVEY.png";

const Whatwedo = () => {
  const Wedo = [
    {
      img: require("../../../Asset/img/icon/ARC.png"),
      name: "ARCHITECTURE PLANS",
    },
    {
      img: require("../../../Asset/img/icon/structure.png"),
      name: "STRUCTURAL DESIGN",
    },
    {
      img: require("../../../Asset/img/icon/INTERIOR.png"),
      name: "INTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/icon/INTERIOR.png"),
      name: "EXTERIOR DESIGN",
    },
    {
      img: require("../../../Asset/img/icon/electricity.png"),
      name: "ELECTRICAL DRAWING",
    },
    {
      img: require("../../../Asset/img/icon/PLUMBING.png"),
      name: "PLUMBING DRAWING",
    },
    {
      img: require("../../../Asset/img/icon/SURVEY.png"),
      name: "DIGITAL SURVEY",
    },
    {
      img: require("../../../Asset/img/icon/SOIL.png"),
      name: "SOIL TEST",
    },
    {
      img: require("../../../Asset/img/icon/APPROVAL.png"),
      name: "RAJUK APPROVAL",
    },
    {
      img: require("../../../Asset/img/icon/SHEET.png"),
      name: "PUROSHAVA APPROVAL",
    },
    {
      img: require("../../../Asset/img/icon/3D.png"),
      name: "3D VISUALIZATION",
    },
    {
      img: require("../../../Asset/img/icon/LANDSCAPE.png"),
      name: "LANDSCAPE DESIGN",
    },
  ];
  return (
    <div className="">
      <div className=" my-14">
        <div className=" border-b-2   border-[#fbbf24] mb-5">
          <h3 className="  text-2xl font-bold mb-3">WHAT WE DO</h3>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 px-11 ">
          {Wedo.map((data) => (
            <div className="flex items-center gap-5 text-start">
              <img
                className="border rounded-full p-2 boxShadow lg:w-14 w-10"
                src={data.img}
                alt=""
              />
              <h3 className="lg:text-[18px]  text-[12px] font-bold cursor-pointer text-gray-00 hover:text-yellow-400">
                {data.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
