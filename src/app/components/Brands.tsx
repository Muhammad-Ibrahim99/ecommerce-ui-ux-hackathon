import React from "react";

const Brands = () => {
  return (
    <section className="bg-black py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center space-x-32 space-y-4 md:space-y-0">
        {["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"].map((brand, index) => (
          <div
            key={index}
            className="text-lg md:text-2xl font-semibold text-white"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
