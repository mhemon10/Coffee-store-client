import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditCoffee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/coffees/${id}`)
      .then((res) => setCoffee(res.data));
  }, [id]);

  const handleChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/coffees/${id}`, coffee).then(() => {
      Swal.fire("Updated!", "Coffee updated successfully", "success");
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-20">
      <input name="name" value={coffee.name || ""} onChange={handleChange} />
      <input name="chef" value={coffee.chef || ""} onChange={handleChange} />
      <input name="price" value={coffee.price || ""} onChange={handleChange} />
      <button type="submit">Update Coffee</button>
    </form>
  );
};

export default EditCoffee;
