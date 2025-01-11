import React from "react";
import SectionTitle from "./SectionTitle";

export default function Recomend() {
  return (
    <section>
      <div>
        <SectionTitle
          subHeading={"Should try"}
          heading={"CHEF RECOMMENDS"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-base-200 flex flex-col justify-center items-center rounded-md">
          <div>
            <img
              className="h-60 w-full rounded-md"
              src="https://i.postimg.cc/PJjtWM1n/photo-1512621776951-a57141f2eefd-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center p-1 space-y-2">
            <h1 className="text-md font-semibold">Salad</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              vitae laboriosam rem.
            </p>
            <button className="bg-gray-300 text-black px-6 py-2 rounded-md border-b-2 border-black">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-base-200 flex flex-col justify-center items-center rounded-md">
          <div>
            <img
              className="h-60 w-full rounded-md"
              src="https://i.postimg.cc/PJjtWM1n/photo-1512621776951-a57141f2eefd-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center p-1 space-y-2">
            <h1 className="text-md font-semibold">Salad</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              vitae laboriosam rem.
            </p>
            <button className="bg-gray-300 text-black px-6 py-2 rounded-md border-b-2 border-black">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-base-200 flex flex-col justify-center items-center rounded-md">
          <div>
            <img
              className="h-60 w-full rounded-md"
              src="https://i.postimg.cc/PJjtWM1n/photo-1512621776951-a57141f2eefd-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center p-1 space-y-2">
            <h1 className="text-md font-semibold">Salad</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              vitae laboriosam rem.
            </p>
            <button className="bg-gray-300 text-black px-6 py-2 rounded-md border-b-2 border-black">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
