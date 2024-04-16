import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12">
      <div className=" flex mb-8">
        <div className="md:flex-1">
          <h1 className="text-3xl md:text-5xl font-bold pt-12 pb-8 w-2/3 font-playfair ">
            Elevate Your Space with Houseplant
          </h1>
          <button className="bg-black text-white py-2 px-7 rounded-full mb-12">
            Shop now
          </button>
          <p className="mb-6 md:w-1/3">
            Beautiful living greenery for homes and offices
          </p>
          <p className="text-xs mb-4">We've been mentioned in the press</p>
          <div className="flex gap-4 py-4 flex-col md:flex-row items-center">
            <img src="/images/Bloomberg.png" alt="" className="mr-8" />
            <img src="/images/Forbes.png" alt="" />
          </div>
        </div>
        <div className="md:w-[45%]">
          <Image
            src={"/images/image-3.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover h-[500px] object-bottom"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-[40%]">
          <p className="text-sm text-center md:text-start">
            Each houseplant set is handled quickly and safely before being sent
            to your destination in specially designed insulated packaging
          </p>
        </div>
        <div className="md:w-flex-1">
          <p className="font-bold text-center mb-12 md:text-start md:w-2/3">
            Learn how we take care of your plant at every stage of its journey
            from our greenhouse to your home
          </p>
          <div className="flex justify-center md:justify-start">
            <p className="mr-4 text-sm">LEARN MORE</p>
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

export default Hero;
