import React from "react";
import PopularItems from "../Pages/PopularItems";
import Cover from "./Cover";
import { Link } from "react-router-dom";

export default function MenuCategory({ items, title, img }) {
  return (
    <>
      <div>
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <PopularItems key={item._id} item={item}></PopularItems>
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="px-6 py-2 rounded-md border border-b-4 border-purple-700">
            Order now
          </button>
        </Link>
      </div>
    </>
  );
}
