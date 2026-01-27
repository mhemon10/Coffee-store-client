import React, { useState } from "react";
import bgImage from "/public/assets/11.png";
import axios from "axios";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const [coffee, setCoffee] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });

  // input change handler
  const handleChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/coffees", coffee);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Coffee Added ☕",
          text: "Your coffee has been added successfully!",
          confirmButtonColor: "#D2B48C",
        });

        setCoffee({
          name: "",
          chef: "",
          supplier: "",
          taste: "",
          category: "",
          details: "",
          photo: "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Try again.",
      });
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full max-w-5xl bg-[#F4F3F0]/95 backdrop-blur-md rounded-xl shadow-2xl px-8 md:px-20 py-16">
        <h2
          className="text-5xl text-center font-bold mb-12 text-[#331A15]"
          style={{ fontFamily: "Rancho, cursive" }}>
          Add New Coffee
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {[
            ["name", "Name"],
            ["chef", "Chef"],
            ["supplier", "Supplier"],
            ["taste", "Taste"],
            ["category", "Category"],
            ["details", "Details"],
          ].map(([key, label]) => (
            <div key={key}>
              <label className="block mb-2 font-semibold text-[#1B1B1B]/80">
                {label}
              </label>
              <input
                type="text"
                name={key}
                value={coffee[key]}
                onChange={handleChange}
                placeholder={`Enter coffee ${label.toLowerCase()}`}
                className="w-full p-3 rounded-lg bg-white border border-transparent outline-none focus:border-[#D2B48C] shadow-sm transition-all"
                required
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-[#1B1B1B]/80">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              value={coffee.photo}
              onChange={handleChange}
              placeholder="Enter photo URL"
              className="w-full p-3 rounded-lg bg-white border border-transparent outline-none focus:border-[#D2B48C] shadow-sm transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 mt-8 bg-[#D2B48C] hover:bg-[#c7a777] text-[#331A15] py-4 rounded-lg font-bold text-2xl transition-all active:scale-95"
            style={{ fontFamily: "Rancho, cursive" }}>
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
