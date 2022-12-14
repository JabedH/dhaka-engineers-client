import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Asset/img/logo/whitelogo.png";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-gray-500 ">
        <div class="navbar-start">
          <div class="dropdown">
            <label
              tabindex="0"
              for="my-drawer"
              class="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a class="btn btn-ghost ">Home</a>
              </li>
              <li>
                <a class="btn btn-ghost ">services</a>
              </li>
              <li>
                <a class="btn btn-ghost ">WHY US</a>
              </li>
              <li>
                <a class="btn btn-ghost  ">COURSES</a>
              </li>
              <li>
                <a class="btn btn-ghost ">BLOG</a>
              </li>
              <li>
                <a class="btn btn-ghost ">CONTACT</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            class=" w-44 btn btn-ghost normal-case text-xl text-white"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex ">
          <ul class="menu menu-horizontal p-0 flex gap-2  lg:text-white">
            <li>
              <NavLink to={"/"} class="btn btn-ghost">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="services" class="btn btn-ghost">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="whyus" class="btn btn-ghost">
                WHYUS
              </NavLink>
            </li>
            <li>
              <NavLink to="courses" class="btn btn-ghost ">
                COURSES
              </NavLink>
            </li>
            <li>
              <NavLink to="blog" class="btn btn-ghost ">
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" class="btn btn-ghost ">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator lg:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabindex="0"
              class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div class="card-body bg-base-100">
                <span class="font-bold text-lg ">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
