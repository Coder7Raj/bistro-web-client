import React from "react";
import SectionTitle from "./SectionTitle";
import image from "../assets/home/featured.jpg";

export default function MenuDetails() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="flex flex-col justify-center items-center gap-4">
        <div className="text-white">
          <SectionTitle
            subHeading={"Check it Out"}
            heading={"from our menu"}
          ></SectionTitle>
        </div>
        <div className="flex justify-center items-cetner gap-6 py-8 px-12">
          <div className="w-[35%]">
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="text-white w-[65%]">
            <p>march 20, 24</p>
            <h1 className="text-md">WHERE CAN I GET SOME?</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt <br /> dolores maiores quod nobis quas
              quasi. Eaque repellat recusandae <br /> ad laudantium tempore
              consequatur consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="px-4 py-1 rounded-md font-semibold text-md border-b-2 border-white mt-2">
              Read more
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
