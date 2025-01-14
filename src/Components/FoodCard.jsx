import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosSecure from "../Hooks/AxiosSecure";
import useAuth from "../Hooks/useAuth";

export default function FoodCard({ item }) {
  const { name, recipe, price, image, _id } = item;
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = AxiosSecure();
  // console.log(user);
  const handleCart = (item) => {
    if (user && user.email) {
      // send data to database
      const cartItems = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added to cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in..",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute top-0 ml-52 mt-4 px-4 text-white bg-slate-700">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleCart(item)} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
