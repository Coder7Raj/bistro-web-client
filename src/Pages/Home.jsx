import React from "react";
import Banner from "./Banner";
import Categorys from "./Categorys";
import BistroTexts from "./BistroTexts";
import OurMenu from "./OurMenu";
import CallUs from "../Components/CallUs";
import Recomend from "../Components/Recomend";
import MenuDetails from "../Components/MenuDetails";
import Reviews from "../Components/Reviews";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categorys></Categorys>
      <BistroTexts></BistroTexts>
      <OurMenu></OurMenu>
      <CallUs></CallUs>
      <Recomend></Recomend>
      <MenuDetails></MenuDetails>
      <Reviews></Reviews>
    </div>
  );
}
