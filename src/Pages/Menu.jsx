import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import OurMenu from "./OurMenu";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";

export default function Menu() {
  const [menu] = useMenu();

  const desserts = menu.filter((items) => items.category === "dessert");
  const salad = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soup = menu.filter((items) => items.category === "soup");
  const offered = menu.filter((items) => items.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="today's offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/*  */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title={"desert"}
      ></MenuCategory>
      {/*  */}
      <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>

      {/*  */}
      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
      {/*  */}
      <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
    </div>
  );
}
