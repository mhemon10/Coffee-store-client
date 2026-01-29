import React from "react";


import icon1 from "/assets/icons/1.png";
import icon2 from "/assets/icons/2.png";
import icon3 from "/assets/icons/3.png";
import icon4 from "/assets/icons/4.png";

const CoffeeHeroSection = () => {
  return (
    <div className="font-sans">
      {/* Upper Section with Background Image */}
      <section
        className="relative h-[700px] flex items-center bg-cover bg-center text-white px-8 md:px-20"
        style={{
          
          backgroundImage: ` url('/assets/more/3.png')`,
        }}>
        <div className="max-w-2xl md:ml-[50%]">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Would you like a{" "}
            <span className="italic">Cup of Delicious Coffee?</span>
          </h1>
          <p className="text-gray-200 mb-6 text-lg">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] hover:bg-[#c99a5e] text-[#242222] font-semibold py-2 px-6 rounded-sm transition duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#ECEAE3] py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Awesome Aroma */}
          <div className="flex flex-col items-start md:items-start text-left">
            <img
              src={icon1}
              alt="Aroma"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-2xl font-serif text-[#333130] mb-2">
              Awesome Aroma
            </h3>
            <p className="text-[#1B1B1B] text-sm leading-relaxed">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          {/* High Quality */}
          <div className="flex flex-col items-start text-left">
            <img
              src={icon2}
              alt="Quality"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-2xl font-serif text-[#333130] mb-2">
              High Quality
            </h3>
            <p className="text-[#1B1B1B] text-sm leading-relaxed">
              We served the coffee to you maintaining the best quality
            </p>
          </div>

          {/* Pure Grades */}
          <div className="flex flex-col items-start text-left">
            <img
              src={icon3}
              alt="Grades"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-2xl font-serif text-[#333130] mb-2">
              Pure Grades
            </h3>
            <p className="text-[#1B1B1B] text-sm leading-relaxed">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>

          {/* Proper Roasting */}
          <div className="flex flex-col items-start text-left">
            <img
              src={icon4}
              alt="Roasting"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-2xl font-serif text-[#333130] mb-2">
              Proper Roasting
            </h3>
            <p className="text-[#1B1B1B] text-sm leading-relaxed">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeHeroSection;
