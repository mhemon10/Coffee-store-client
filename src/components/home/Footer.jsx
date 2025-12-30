import React from "react";
// আপনার এসেটস থেকে ইমেজগুলো ইম্পোর্ট করুন
import footerLogo from "/public/assets/logo.png"; // লোগোর পাথ
import footerBg from "/public/assets/footerbg.png";
import copyBg from "/public/assets/copybg.png"; // ফুটারের ব্যাকগ্রাউন্ড ইমেজ
// ফুটারের ব্যাকগ্রাউন্ড ইমেজ

const Footer = () => {
  return (
    <footer
      className="relative pt-16 pb-0"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12">
        {/* Left Side: Logo & Contact Info */}
        <div className="space-y-6">
          <img src={footerLogo} alt="Espresso Emporium" className="w-16 h-16" />
          <h2
            className="text-4xl text-[#331A15] font-bold"
            style={{ fontFamily: "Rancho, cursive" }}>
            Espresso Emporium
          </h2>
          <p className="text-[#1B1B1B] text-lg max-w-md">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your friends always.
          </p>

          {/* Social Icons (Simple SVGs) */}
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="#"
              className="text-[#331A15] hover:scale-110 transition-transform">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="#"
              className="text-[#331A15] hover:scale-110 transition-transform">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="text-[#331A15] hover:scale-110 transition-transform">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="text-[#331A15] hover:scale-110 transition-transform">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <h3
            className="text-3xl text-[#331A15] pt-4"
            style={{ fontFamily: "Rancho, cursive" }}>
            Get in Touch
          </h3>

          <div className="space-y-3 text-[#1B1B1B]">
            <p className="flex items-center gap-3">
              <span className="text-[#331A15]">📞</span> +88 01533 333 333
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#331A15]">✉️</span> info@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#331A15]">📍</span> 72, Wall Street, New
              York 10001
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="mt-8 md:mt-0">
          <h2
            className="text-4xl text-[#331A15] mb-8 font-bold"
            style={{ fontFamily: "Rancho, cursive" }}>
            Connect with Us
          </h2>
          <form className="flex flex-col gap-4 font-sans">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-white border-none outline-none focus:ring-1 focus:ring-[#D2B48C] shadow-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-white border-none outline-none focus:ring-1 focus:ring-[#D2B48C] shadow-sm"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded-md bg-white border-none outline-none focus:ring-1 focus:ring-[#D2B48C] shadow-sm resize-none"></textarea>
            <button
              className="w-fit px-8 py-2 border-2 border-[#331A15] rounded-full text-[#331A15] font-bold text-xl hover:bg-[#331A15] hover:text-white transition-all"
              style={{ fontFamily: "Rancho, cursive" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="w-full py-4 text-center text-white"
        style={{
          backgroundImage: `url(${copyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <p
          style={{
            fontFamily: "Rancho, cursive",
            fontSize: "20px",
            letterSpacing: "1px",
          }}>
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
