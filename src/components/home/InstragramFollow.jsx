import { useState } from "react";

// import your assets
import cup1 from "/assets/cups/Rectangle 9.png";
import cup2 from "/assets/cups/Rectangle 10.png";
import cup3 from "/assets/cups/Rectangle 11.png";
import cup4 from "/assets/cups/Rectangle 12.png";
import cup5 from "/assets/cups/Rectangle 13.png";
import cup6 from "/assets/cups/Rectangle 14.png";
import cup7 from "/assets/cups/Rectangle 15.png";
import cup8 from "/assets/cups/Rectangle 16.png";

const cups = [
  { id: 1, img: cup1, name: "Americano Coffee", desc: "Strong and bold taste" },
  { id: 2, img: cup2, name: "Cappuccino", desc: "Creamy and foamy delight" },
  { id: 3, img: cup3, name: "Latte", desc: "Smooth with milk and espresso" },
  { id: 4, img: cup4, name: "Flat White", desc: "Velvety milk and espresso" },
  { id: 5, img: cup5, name: "Espresso", desc: "Short and intense coffee" },
  { id: 6, img: cup6, name: "Mocha", desc: "Chocolatey coffee heaven" },
  { id: 7, img: cup7, name: "Black Coffee", desc: "Pure coffee, no milk" },
  { id: 8, img: cup8, name: "Decaf Coffee", desc: "Caffeine free option" },
];

const InstagramCups = () => {
  const [selectedCup, setSelectedCup] = useState(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="text-center mb-10">
        <p>Follow Us Now</p>
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: "Rancho, cursive" }}>
          Follow on Instagram
        </h2>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {cups.map((cup) => (
          <div
            key={cup.id}
            className="cursor-pointer rounded-lg overflow-hidden shadow hover:scale-105 transition"
            onClick={() => setSelectedCup(cup)}>
            <img
              src={cup.img}
              alt={cup.name}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* modal */}
      {selectedCup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedCup(null)}>
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelectedCup(null)}>
              &times;
            </button>

            <img
              src={selectedCup.img}
              alt={selectedCup.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedCup.name}</h3>
            <p className="text-gray-700">{selectedCup.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramCups;
