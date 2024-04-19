import React from "react";
import Image from "next/image";

const HomeGrid = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12 grid gap-8 grid-cols-2">
      <Image
        src={"/images/grid-1.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[600px] object-cover"
      />
      <Image
        src={"/images/grid-2.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[600px] object-cover"
      />
      <div className="col-span-2 relative h-[600px]">
        <Image
          src={"/images/grid-3.jpg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute z-50 top-16 left-20">
          <h1 className="font-bold text-3xl font-playfair w-2/3 mb-4">
            Get inspired from our Instagram
          </h1>
          <p className="text-sm">
            If yo use the hastag plant on instagram we'll spotlight for you.
          </p>
          <div className="flex items-center py-4">
            <p className="font-bold mr-4">Check it out</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
