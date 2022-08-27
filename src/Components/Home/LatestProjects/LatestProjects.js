import React from "react";
import "./LatestProjects.css";

import { Link, NavLink, Outlet } from "react-router-dom";

const LatestProjects = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold">LATEST PROJECTS</h2>
      <div className="">
        <div className="  ">
          <ul className="menu lg:menu-horizontal lg:gap-5  grid grid-cols-2 justify-items-center  border-b-4  border-[#fbbf24]">
            <li className="">
              <NavLink to="/showall">Showall</NavLink>
            </li>
            <li>
              <NavLink to="/interior">Interior</NavLink>
            </li>
            <li>
              <NavLink to="/exterior">Exterior</NavLink>
            </li>
            <li>
              <NavLink to="/commercial">Commercial</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default LatestProjects;
