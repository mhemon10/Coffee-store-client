import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoffeeDetails = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/coffees/${id}`)
      .then((res) => setCoffee(res.data));
  }, [id]);

  if (!coffee) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto py-20">
      <img src={coffee.photo} className="w-full mb-6" />
      <h2 className="text-3xl font-bold">{coffee.name}</h2>
      <p>Chef: {coffee.chef}</p>
      <p>Taste: {coffee.taste}</p>
      <p>Price: {coffee.price} Taka</p>
      <p>{coffee.details}</p>
    </div>
  );
};

export default CoffeeDetails;
