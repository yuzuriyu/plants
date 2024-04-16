import React from "react";
import Image from "next/image";

const Featured = () => {
  const plant1 = "/images/plant-1.png";
  const plant2 = "/images/plant-2.png";
  const plant3 = "/images/plant-3.png";

  const featuredPlants = [plant1, plant2, plant3];

  return (
    <div className="w-11/12 m-auto md:w-10/12 py-8">
      <p className="mb-4 text-sm">OUR SHOP</p>
      <h1 className="text-3xl font-bold md:w-1/3">
        Here are the best sellers from our varieties
      </h1>
      <button className="py-2 px-9 bg-black text-white rounded-full my-8">
        See All
      </button>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 grid-cols-2">
        {featuredPlants.map((plant, index) => (
          <div key={index}>
            <Image
              src={plant}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[368px] object-cover"
            />
            <div className="flex justify-between py-2">
              <p className="text-sm">Fiddle-leaf fig</p>
              <p className="text-sm">$100.99</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
