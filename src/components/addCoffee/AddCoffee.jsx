import React, { useState } from "react";
import bgImage from "/public/assets/11.png";
import axios from "axios";

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

  const handleChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/coffees", coffee);

      if (res.data.insertedId) {
        alert("Coffee added successfully ☕");
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
      console.error("Error adding coffee:", error);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-16 px-4 bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full max-w-5xl bg-[#F4F3F0] px-10 md:px-28 py-16 shadow-lg">
        <h2
          className="text-5xl text-center font-bold mb-10"
          style={{ fontFamily: "Rancho, cursive" }}>
          Add New Coffee
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["name", "Name"],
            ["chef", "Chef"],
            ["supplier", "Supplier"],
            ["taste", "Taste"],
            ["category", "Category"],
            ["details", "Details"],
          ].map(([key, label]) => (
            <div key={key}>
              <label className="block mb-2 font-semibold">{label}</label>
              <input
                name={key}
                value={coffee[key]}
                onChange={handleChange}
                placeholder={`Enter coffee ${label.toLowerCase()}`}
                className="w-full p-3 rounded-md"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Photo URL</label>
            <input
              name="photo"
              value={coffee.photo}
              onChange={handleChange}
              placeholder="Enter photo URL"
              className="w-full p-3 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 mt-6 bg-[#D2B48C] py-3 font-bold text-xl"
            style={{ fontFamily: "Rancho, cursive" }}>
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
