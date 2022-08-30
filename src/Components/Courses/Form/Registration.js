import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
const Registration = () => {
  // const [name, setName] = useState(" ");
  // const [number, setNumber] = useState(" ");
  // const [email, setEmail] = useState(" ");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(name, number, email);
  //   const name = e.target.name.value;
  //   const number = e.target.number.value;
  //   const email = e.target.email.value;
  //   const nid = e.target.nid.value;
  //   const institute = e.target.institute.value;
  //   const year = e.target.year.value;
  //   const present = e.target.present.value;
  //   const permanent = e.target.permanent.value;
  //   console.log(name, number, email, nid, institute, year, present, permanent);
  //   const AllData = {
  //     // name,
  //     // number,
  //     // email,
  //     name,
  //     number,
  //     email,
  //     nid,
  //     institute,
  //     year,
  //     present,
  //     permanent,
  //   };

  //   axios({
  //     method: "POST",
  //     headers: {
  //       // authorization
  //     },
  //     url: "https://sheet.best/api/sheets/a8933537-2e91-4c0e-8202-7bbb73395c97",
  //     data: AllData,
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast.success("Event created successfully");
  //       }
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="card-body grid lg:grid-cols-2 ">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type Name"
              class="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name must be required",
                },
              })}
              {...register("name", {
                minLength: {
                  value: 4,
                  message: "Name must be 4 character",
                },
              })}
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
            <label class="label">
              {errors.name?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Number</span>
            </label>
            <input
              type="number"
              placeholder="Type your number"
              class="input input-bordered"
              {...register("number", {
                required: {
                  value: true,
                  message: "number must be required",
                },
              })}
              {...register("number", {
                minLength: {
                  value: 11,
                  message: "Name must be 11 character",
                },
              })}
            />
            <label class="label">
              {errors.number?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.number.message}
                </span>
              )}
            </label>
            <label class="label">
              {errors.number?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type Email"
              class="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please provide a email",
                },
              })}
              {...register("email", {
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "provide a valid email",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label class="label">
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">NID</span>
            </label>
            <input
              type="number"
              placeholder="Type your NID or Birth certificate (if you have)"
              class="input input-bordered"
              {...register("nid", {})}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name of Institute</span>
            </label>
            <input
              type="text"
              placeholder="institute name"
              class="input input-bordered"
              {...register("institute", {
                required: {
                  value: true,
                  message: "Please provide your institute name",
                },
              })}
            />
            <label class="label">
              {errors.institute?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.institute.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Passing Year</span>
            </label>
            <input
              type="text"
              placeholder="Type your passing Year"
              class="input input-bordered"
              {...register("year", {})}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Present Address</span>
            </label>
            <input
              type="text"
              placeholder="Type your present address"
              class="input input-bordered"
              {...register("text", {
                required: {
                  value: true,
                  message: "Please provide your present address",
                },
              })}
            />
            <label class="label">
              {errors.text?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.text.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Permanent Address</span>
            </label>
            <input
              type="text"
              placeholder="Type your permanent address"
              class="input input-bordered"
              {...register("text", {
                required: {
                  value: true,
                  message: "Please provide your permanent address",
                },
              })}
            />
            <label class="label">
              {errors.text?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.text.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-2xl font-bold border-gray-500 border-y-2 w-72 p-1">
            Payment Information
          </h3>
        </div>
        <div>
          <h3 className="my-5 font-bold">
            ভর্তি কনফার্ম এর জন্য বিকাশে{" "}
            <span className="text-red-500">01885-**** </span> এই নাম্বারে{" "}
            <span className="text-red-500">১০০০</span>
            টাকা সেন্ড মানি করুন
          </h3>
        </div>
        <div className=" card-body grid lg:grid-cols-2">
          <div class="form-control ">
            <label class="label">
              <span class="label-text">Bkash Number</span>
            </label>
            <input
              type="number"
              placeholder="Type your bkash"
              class="input input-bordered"
              {...register("bkash", {
                required: {
                  value: true,
                  message: "Bkash number must be required",
                },
              })}
              {...register("bkash", {
                minLength: {
                  value: 11,
                  message: "Bkash Name must be 11 character",
                },
              })}
            />
            <label class="label">
              {errors.bkash?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.bkash.message}
                </span>
              )}
            </label>
            <label class="label">
              {errors.bkash?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.bkash.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Transaction ID</span>
            </label>
            <input
              type="text"
              placeholder="Type your bkash Transaction ID"
              class="input input-bordered"
              {...register("transaction", {
                required: {
                  value: true,
                  message: "Bkash transaction id number must be required",
                },
              })}
            />
            <label class="label">
              {errors.transaction?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.transaction.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;

// <div className="">
//   <h3 className="mt-10 font-bold text-2xl">Registration Form</h3>
//   <form action="" onSubmit={handleSubmit}>
//     <div class="card-body grid lg:grid-cols-2 ">
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Name</span>
//         </label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           required
//           class="input input-bordered "
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Phone Number</span>
//         </label>
//         <input
//           name="number"
//           type="Number"
//           required
//           placeholder="Phone Number"
//           class="input input-bordered"
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Email</span>
//         </label>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           required
//           class="input input-bordered "
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">NID</span>
//         </label>
//         <input
//           type="Number"
//           name="nid"
//           required
//           placeholder="NID Number (If you have)"
//           class="input input-bordered"
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Name of Institute</span>
//         </label>
//         <input
//           type="text"
//           placeholder="name of institute"
//           name="institute"
//           required
//           class="input input-bordered "
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Passing Year</span>
//         </label>
//         <input
//           type="Number"
//           required
//           placeholder="passing year"
//           name="year"
//           class="input input-bordered"
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Present Address</span>
//         </label>
//         <input
//           type="text"
//           name="present"
//           required
//           placeholder="present address"
//           class="input input-bordered"
//         />
//       </div>
//       <div class="form-control">
//         <label class="label">
//           <span class="label-text">Permanent Address</span>
//         </label>
//         <input
//           type="text"
//           required
//           name="permanent"
//           placeholder="permanent address"
//           class="input input-bordered"
//         />
//       </div>
//     </div>
//     <button class="btn btn-wide mb-10 bg-[#eaad00]">Submit</button>
//   </form>
// </div>
