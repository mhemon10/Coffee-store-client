import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Load existing coffee data
  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Swal.fire("Error", "Failed to load coffee data", "error");
      });
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  // 🔹 Handle update submit
  const handleUpdate = (e) => {
    e.preventDefault();

    // remove _id before sending
    const { _id, ...updatedCoffee } = coffee;

    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Coffee updated successfully ☕",
            icon: "success",
            confirmButtonColor: "#D2B48C",
          });
          navigate("/");
        }
      })
      .catch(() => {
        Swal.fire("Error", "Update failed", "error");
      });
  };

  if (loading) {
    return <p className="text-center mt-20 text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2
        className="text-4xl text-center mb-10 font-bold text-[#331A15]"
        style={{ fontFamily: "Rancho, cursive" }}>
        Update Coffee
      </h2>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F4F3F0] p-8 rounded-lg shadow">
        {[
          ["name", "Coffee Name"],
          ["chef", "Chef"],
          ["supplier", "Supplier"],
          ["taste", "Taste"],
          ["price", "Price"],
          ["details", "Details"],
        ].map(([field, label]) => (
          <div key={field}>
            <label className="block mb-2 font-semibold text-[#1B1B1B]">
              {label}
            </label>
            <input
              type="text"
              name={field}
              value={coffee[field] || ""}
              onChange={handleChange}
              className="w-full p-3 rounded border focus:outline-none focus:border-[#D2B48C]"
              required
            />
          </div>
        ))}

        {/* Photo URL */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-semibold text-[#1B1B1B]">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            value={coffee.photo || ""}
            onChange={handleChange}
            className="w-full p-3 rounded border focus:outline-none focus:border-[#D2B48C]"
            required
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="md:col-span-2 mt-6 bg-[#D2B48C] border-2 border-[#331A15] 
          py-3 font-bold text-xl text-[#331A15] hover:bg-transparent transition cursor-pointer"
          style={{ fontFamily: "Rancho, cursive" }}>
          Update Coffee ☕
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
