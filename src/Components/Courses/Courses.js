import React from "react";
import bg from "../../Asset/img/course/tc2.jpg";
import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCoffee,
  faDesktop,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Learnfrom from "./Learnfrom/Learnfrom";

const Courses = () => {
  return (
    <div>
      <div
        class="hero bg-base-200 relative
     "
      >
        <img src={bg} alt="" />

        <div class="hero-content text-center">
          <div class="max-w-md absolute bottom-[25%]  left-[5%]">
            <button class="btn lg:btn-lg md:btn-lg btn-xs bg-[#eaad00] hover:bg-[#cc9809] border-0 lg:text-xl">
              Registration Now
            </button>
          </div>
        </div>
      </div>

      <div className=" myMargin relative shadow-xl pb-10">
        <div className="bg-slate-100 p-5  mx-20 rounded-[30px] pb-10">
          <h3 className="font-bold text-3xl my-10 ">
            পরবর্তী ব্যাচের সময় সূচি
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-5">
            <div className="flex gap-2 items-center">
              <p className=" bg-yellow-500 p-3 rounded-full ">
                <FontAwesomeIcon className="fa-xl " icon={faCalendar} />
              </p>
              <h3 className="font-bold text-[18px]">
                এনরোলমেন্ট শুরু: ডিসেম্বর ১০, ২০২২ (শনিবার)
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <p className=" bg-yellow-500 p-3 rounded-full ">
                <FontAwesomeIcon className="fa-xl " icon={faBell} />
              </p>
              <h3 className="font-bold text-[18px]">
                সম্ভাব্য ক্লাস শুরু: ১২ই সেপ্টেম্বর, ২০২২ (সোমবার)
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <p className=" bg-yellow-500 p-3 rounded-full ">
                <FontAwesomeIcon className="fa-xl " icon={faRegistered} />
              </p>
              <h3 className="font-bold text-[18px]">
                এনরোলমেন্ট শেষ: ডিসেম্বর ২৪, ২০২২ (শনিবার)
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <p className=" bg-yellow-500 p-3 rounded-full ">
                <FontAwesomeIcon className="fa-xl " icon={faDesktop} />
              </p>
              <h3 className="font-bold text-[18px]">
                ক্লাসের সময়: প্রতি সোমবার ও বুধবার (সকাল ৯ টা)
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center bg-yellow-500 p-2 mt-10 rounded-[10px]">
            <h3 className="text-white font-bold">
              পরবর্তী ব্যাচে এনরোল করতে আগ্রহি হলে রেজিস্ট্রেশন করে রাখোন
            </h3>
            <Link to="/course/registration" className="btn ">
              Registration Now
            </Link>
          </div>
        </div>
      </div>
      <Learnfrom />
    </div>
  );
};

export default Courses;
