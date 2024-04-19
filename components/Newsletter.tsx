import React from "react";

const Newsletter = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12 flex gap-4 flex-col py-8 md:flex-row justify-between">
      <p className="font-bold text-xl">
        Stay updated with special offers, plant-parenting tips and more.
      </p>
      <div className="border-b flex justify-between pb-2">
        <input
          placeholder="Your email"
          className="border-0 mr-4 focus:outline-none"
        />
        <button className="bg-black text-white rounded-full py-2 px-7">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
