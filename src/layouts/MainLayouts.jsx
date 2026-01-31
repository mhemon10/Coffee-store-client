import React from "react";
import Header from "../components/home/Header";
import { Outlet } from "react-router";
import Footer from "../components/home/Footer";
import ScrollToTop from "../components/ScroleToTop";

const MainLayouts = () => {
  return (
    
    <div>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
