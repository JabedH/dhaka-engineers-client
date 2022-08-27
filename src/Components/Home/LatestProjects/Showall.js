import React from "react";
import p1 from "../../../Asset/img/latestProjects/p-2.jpg";
import p2 from "../../../Asset/img/latestProjects/ex.jpg";
import p3 from "../../../Asset/img/latestProjects/p-2.jpg";
import p4 from "../../../Asset/img/latestProjects/p-4.jpg";

const Showall = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Showall;
