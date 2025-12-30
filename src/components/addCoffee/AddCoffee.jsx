import React from "react";
import bgImage from "/src/assets/11.png";

const AddCoffee = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-16 px-4 bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`, //
      }}>
      {/* Back to Home Button */}
      <div className="w-full max-w-5xl mb-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[#374151] transition-all hover:text-[#D2B48C] drop-shadow-md"
          style={{
            fontFamily: "Rancho, cursive",
            fontSize: "30px",
          }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* Main Form Container */}
      <div className="w-full max-w-5xl bg-[#F4F3F0] rounded-sm px-10 md:px-28 py-16 shadow-lg">
        <div className="text-center mb-10">
          <h2
            className="text-5xl font-bold text-[#374151] mb-8"
            style={{ fontFamily: "Rancho, cursive", letterSpacing: "1px" }}>
            Add New Coffee
          </h2>
          <p className="text-[#1B1B1B]/70 text-lg max-w-4xl mx-auto leading-relaxed font-sans">
            It is a long established fact that a reader will be distracted by a
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using Content here.
          </p>
        </div>

        <form className="font-sans">
          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="form-control">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>

            <div className="form-control">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Chef
              </label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>

            <div className="form-control">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Supplier
              </label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>

            <div className="form-control">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Taste
              </label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>

            <div className="form-control">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Category
              </label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>

            <div className="form-control">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Details
              </label>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>

            <div className="form-control md:col-span-2 mt-2">
              <label className="label mb-3 block text-xl font-semibold text-[#1B1B1B]/80">
                Photo
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="w-full p-3 rounded-md bg-white border border-transparent outline-none focus:border-[#D2B48C] placeholder:text-gray-400 shadow-sm transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-10 bg-[#D2B48C] hover:bg-[#F4F3F0] text-[#331A15] font-bold py-3 rounded-md border-2 border-[#331A15] transition-all duration-300 active:scale-[0.99]"
            style={{
              fontFamily: "Rancho, cursive",
              fontSize: "24px",
              letterSpacing: "1px",
            }}>
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
