import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, NavLink, Outlet } from "react-router-dom";
const Form = () => {
  // const [name, setName] = useState(" ");
  // const [number, setNumber] = useState(" ");
  // const [email, setEmail] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, number, email);
    const name = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const nid = e.target.nid.value;
    const institute = e.target.institute.value;
    const year = e.target.year.value;
    const present = e.target.present.value;
    const permanent = e.target.permanent.value;
    console.log(name, number, email, nid, institute, year, present, permanent);
    const AllData = {
      // name,
      // number,
      // email,
      name,
      number,
      email,
      nid,
      institute,
      year,
      present,
      permanent,
    };

    axios({
      method: "POST",
      headers: {
        // authorization
      },
      url: "https://sheet.best/api/sheets/a8933537-2e91-4c0e-8202-7bbb73395c97",
      data: AllData,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Event created successfully");
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <h3 className="mt-10 font-bold text-2xl">Registration Form</h3>
      <form action="" onSubmit={handleSubmit}>
        <div class="card-body grid lg:grid-cols-2 ">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              class="input input-bordered "
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              name="number"
              type="Number"
              required
              placeholder="Phone Number"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              class="input input-bordered "
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">NID</span>
            </label>
            <input
              type="Number"
              name="nid"
              required
              placeholder="NID Number (If you have)"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name of Institute</span>
            </label>
            <input
              type="text"
              placeholder="name of institute"
              name="institute"
              required
              class="input input-bordered "
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Passing Year</span>
            </label>
            <input
              type="Number"
              required
              placeholder="passing year"
              name="year"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Present Address</span>
            </label>
            <input
              type="text"
              name="present"
              required
              placeholder="present address"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Permanent Address</span>
            </label>
            <input
              type="text"
              required
              name="permanent"
              placeholder="permanent address"
              class="input input-bordered"
            />
          </div>
        </div>
        <button class="btn btn-wide mb-10 bg-[#eaad00]">Submit</button>
      </form>
    </div>
  );
};

export default Form;
