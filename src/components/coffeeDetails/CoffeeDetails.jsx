import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CoffeeDetails = () => {
  const { id } = useParams();
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
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (!coffee) {
    return <p className="text-center mt-20">❌ No coffee found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <img src={coffee.photo} alt={coffee.name} className="w-64 mx-auto mb-6" />

      <h2
        className="text-4xl text-center mb-4"
        style={{ fontFamily: "Rancho, cursive" }}>
        {coffee.name}
      </h2>

      <div className="space-y-2 text-lg">
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
        <p>
          <b>Details:</b> {coffee.details}
        </p>
      </div>

      <div className="text-center mt-10">
        <Link to="/">
          <button className="px-6 py-2 bg-[#D2B48C] font-bold cursor-pointer">
            Back Home ☕
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeDetails;
