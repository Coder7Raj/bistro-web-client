import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";

export default function Main() {
  return (
    <div className="bg-white">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
