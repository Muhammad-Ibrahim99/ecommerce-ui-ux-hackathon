import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    
    
<header>

    {/* Black section of navbar  */}

<div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
        <div className="text-center flex-1">
        Sign up and get 20% off to your first order.
    <a href="" className="underline hover:text-slate-300 pl-2"> SignUp Now </a>
        </div>

        <div className="hidden md:flex items-center gap-[2px]">
            <div className="text-white text-lg font-normal leading-[21px]">
                X 
            </div>
        </div>

    </div>

    <div className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
    
      {/* Logo Section */}
      <div className="ml-12 text-2xl font-extrabold">SHOP.CO</div>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-black">Shop <IoIosArrowDown className="inline-block"/></a>
        <a href="#" className="text-gray-700 hover:text-black">On Sale</a>
        <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
        <a href="#" className="text-gray-700 hover:text-black">Brands</a>
      </nav>


      {/* Search section  */}
      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex items-center bg-slate-100 rounded-full pr-48 px-3 py-2">
          <CiSearch  className="text-black font-bold size-6"/>
            <input type="text" 
            placeholder="What are you looking for?" 
            className="bg-slate-100 outline-none text-sm pr-4" />
        </div>
      
    </div>


      {/* Right Section (Cart Icons) */}
      <div className="flex mr-5 items-center space-x-4">
    <CiSearch  className="md:hidden text-black font-extrabold size-6"/>
        <button className="p-2 rounded-full">
           <FiShoppingCart  className="w-5 h-5"/>
        </button>
        <button className="p-2 rounded-full">
        <CgProfile className="w-5 h-5"/>
        
        </button>
      </div>

    </div>

   </header> 
  );
};

export default Header;
