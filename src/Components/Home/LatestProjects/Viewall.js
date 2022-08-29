import React from "react";

const Viewall = () => {
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
    {
      img: require("../../../Asset/img/latestProjects/ex.jpg"),
      name: " COMMERCIAL BUILDING",
    },
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
  ];
  return (
    <div className="lg:px-11 py-5">
      <div className="grid  lg:grid-cols-3 grid-cols-2 px-5">
        {showall.map((show) => (
          <div className="latest-col">
            <img src={show.img} alt="" />
            <div className="latest-text ">
              <h3 className="border">{show.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewall;
