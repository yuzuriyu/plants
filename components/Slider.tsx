import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-11/12 m-auto my-16 md:w-10/12">
      <Image
        src={"/images/slide-2.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[400px] object-cover object-bottom"
      />
      <div className="flex justify-between items-center">
        <p className="text-xs">STEP 1</p>
        <p className="font-bold text-sm md:text-md">
          We put everything together
        </p>
        <div className="flex py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
