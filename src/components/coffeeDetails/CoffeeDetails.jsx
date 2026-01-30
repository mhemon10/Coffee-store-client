import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CoffeeDetails = () => {
  const { id } = useParams(); // 👈 URL theke id
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading coffee details ☕...
      </div>
    );
  }

  if (!coffee) {
    return <p className="text-center mt-20">No coffee found ❌</p>;
  }

  return (
    <div className="min-h-screen bg-[#F4F3F0] flex items-center justify-center px-4">
      <div className="max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="w-full h-60 object-contain mb-6"
        />

        <h2
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "Rancho, cursive" }}>
          {coffee.name}
        </h2>

        <p>
          <b>Chef:</b> {coffee.chef}
        </p>
        <p>
          <b>Supplier:</b> {coffee.supplier}
        </p>
        <p>
          <b>Taste:</b> {coffee.taste}
        </p>
        <p>
          <b>Price:</b> {coffee.price} Taka
        </p>
        <p className="mt-2">
          <b>Details:</b> {coffee.details}
        </p>

        <Link to="/" className="inline-block mt-6 text-blue-600 underline">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CoffeeDetails;
