import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState(null);

  // load existing coffee
  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, [id]);

  const handleChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Coffee updated successfully ☕", "success");
          navigate("/");
        }
      });
  };

  if (!coffee) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-4xl text-center mb-10 font-bold">Update Coffee</h2>

      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-6">
        {["name", "chef", "supplier", "taste", "price", "details", "photo"].map(
          (field) => (
            <input
              key={field}
              name={field}
              value={coffee[field] || ""}
              onChange={handleChange}
              placeholder={field}
              className="p-3 border rounded"
            />
          ),
        )}

        <button
          type="submit"
          className="col-span-2 bg-[#D2B48C] py-3 font-bold">
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
