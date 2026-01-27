import React from "react";

import navBg from "/public/assets/navbg.png"; // নেভবারের ব্যাকগ্রাউন্ড ইমেজ


const Navbar = () => {
  return (
    <nav
      className="w-full py-10 shadow-md bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${navBg})`, 
      }}>
    </nav>
  );
};

export default Navbar;
