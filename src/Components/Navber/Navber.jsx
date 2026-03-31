import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navber = ({ carts }) => {
  const menuText = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <div className="bg-base-100 shadow-sm border-b border-gray-100">
      <div className="navbar max-w-[1180px] mx-auto px-4 py-3">

        <div className="flex-1 flex items-center gap-3">

          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost p-1">
              <Menu className="w-6 h-6" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content w-52  mt-3 z-1  shadow bg-base-100 rounded-box p-3"
            >
              {menuText.map((menu, index) => (
                <li key={index}>
                  <a>{menu}</a>
                </li>
              ))}
            </ul>
          </div>

          <a className="text-2xl font-bold text-purple-800 cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="md:flex hidden">
          <ul className="flex gap-8 text-gray-700 font-medium">
            {menuText.map((menu, index) => (
              <li
                key={index}
                className="hover:text-purple-700  transition duration-300 cursor-pointer"
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">


          <div className="relative cursor-pointer">
            <ShoppingCart className="w-7 h-7 text-purple-700" />
            <span className="absolute flex items-center justify-center -top-2 -right-3 bg-purple-800 text-white text-xs w-5 h-5 rounded-full ">
              {carts.length}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <p className="font-medium text-gray-700 hover:text-purple-700 transition  cursor-pointer">
              Login
            </p>

            <button className="btn bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-full px-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;