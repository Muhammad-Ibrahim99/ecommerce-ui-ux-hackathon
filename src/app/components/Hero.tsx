import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-slate-100 py-16 flex items-center justify-center">
    
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

      {/* Content */}
      <div className="relative z-10 text-left text-black max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Find Clothes That Match Your Style
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-full shadow-lg">
          Shop Now
        </button>
      </div>

        {/* Background Image */}
       <div>
        <img src="hero/hero-img.jpeg" alt="hero-img" className="w-96"/>
       </div>
    </section>
  );
};

export default Hero;
