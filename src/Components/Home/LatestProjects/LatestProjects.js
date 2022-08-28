import React from "react";
import "./LatestProjects.css";

import { Link, NavLink, Outlet } from "react-router-dom";

const LatestProjects = () => {
  return (
    <div className=" bg-slate-100 pt-10">
      <h2 className="text-3xl font-bold  ">LATEST PROJECTS</h2>
      <div className="mt-10">
        <div className="  ">
          <ul className="menu lg:menu-horizontal lg:gap-5 mb-5  grid grid-cols-2 justify-items-center  border-b-4  border-[#fbbf24]">
            <li className="">
              <NavLink to="/">Showall</NavLink>
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
