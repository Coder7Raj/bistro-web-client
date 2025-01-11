import React from "react";
import image from "../assets/home/chef-service.jpg";

export default function BistroTexts() {
  return (
    <div
      className="w-full h-[320px] flex justify-center items-center my-10"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-base-200 w-[60%] h-[70%] flex flex-col justify-center items-center text-center text-black p-16">
        <p className="text-3xl font-bold my-2 uppercase">bistro boss</p>
        <p className="text-md font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quo maxime corporis reprehenderit, nesciunt rerum dolores repellendus
          quia expedita, eius culpa soluta enim alias veritatis.
        </p>
      </div>
    </div>
  );
}
