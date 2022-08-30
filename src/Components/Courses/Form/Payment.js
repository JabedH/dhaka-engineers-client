import React from "react";

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.bkash.value;
    const number = e.target.tid.value;
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
              // onChange={(e) => setName(e.target.value)}
              // value={name}
              type="text"
              name="bkash"
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
              name="tid"
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
          </div>
        </div>
        <button type="submit" class="btn btn-wide mb-10 bg-[#eaad00]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
