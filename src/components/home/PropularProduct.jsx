import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// background image
import leftBg from "/assets/more/1.png";

const PopularProducts = () => {
  const [coffees, setCoffees] = useState([]);

  // fetch coffee data from server
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
    
    
    // Dellet coffee from Popular coffee
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "This coffee will be permanently deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/coffees/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Coffee has been deleted.", "success");

                // UI update
                setCoffees(coffees.filter((c) => c._id !== id));
              }
            });
        }
      });
    };

  return (
    <section
      className="relative py-24 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${leftBg})`,
      }}>
      {/* overlay for readability (optional but recommended) */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#331A15] mb-2">--- Sip & Savor ---</p>

          <h2
            className="text-5xl font-bold text-[#331A15]"
            style={{ fontFamily: "Rancho, cursive" }}>
            Our Popular Products
          </h2>

          <Link to="/addCoffee">
            <button
              className="mt-6 px-6 py-2 bg-[#D2B48C] border-2 border-[#331A15] 
              text-[#331A15] font-semibold hover:bg-transparent transition cursor-pointer"
              style={{ fontFamily: "Rancho, cursive" }}>
              Add Coffee ☕
            </button>
          </Link>
        </div>

        {/* ===== Coffee Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="flex items-center gap-6 bg-[#F5F4F1] p-6 rounded-lg
              hover:shadow-lg transition cursor-pointer">
              {/* Image */}
              <img
                src={coffee.photo}
                alt={coffee.name}
                className="w-24 h-32 object-contain"
              />

              {/* Info */}
              <div className="flex-1 text-[#1B1B1B] space-y-1">
                <p>
                  <span className="font-semibold">Name:</span> {coffee.name}
                </p>
                <p>
                  <span className="font-semibold">Chef:</span> {coffee.chef}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> {coffee.price}{" "}
                  Taka
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Link to={`/coffee/${coffee._id}`}>
                  <button className="w-9 h-9 rounded bg-[#D2B48C] text-white hover:scale-105 transition">
                    👁
                  </button>
                </Link>

                <button className="w-9 h-9 rounded bg-[#3C3C3C] text-white hover:scale-105 transition">
                  ✏
                </button>

                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="w-9 h-9 rounded bg-red-500 text-white cursor-pointer">
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
