import React from "react";

export default function PopularItems({ item }) {
  const { name, recipe, price, image } = item;
  return (
    <>
      <div className="flex justify-center items-start gap-2 mb-8 mt-4 p-1">
        <div>
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-24"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-xl font-bold uppercase">{name}-------------</h1>
          <p className="text-sm">{recipe}</p>
        </div>
        <div>
          <p className="text-orange-400 text-sm">${price}</p>
        </div>
      </div>
    </>
  );
}
