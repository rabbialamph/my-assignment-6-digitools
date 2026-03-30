import React from 'react';

const Navber = ({carts}) => {
  return (
    <div className="bg-base-100 shadow-sm border-b border-gray-100">
      <div className="navbar max-w-[1180px] mx-auto px-4 py-3">

        <div className="flex-1">
          <a className="text-2xl font-bold text-purple-900 cursor-pointer">
            DigiTools
          </a>
        </div>

   
        <div className="hidden md:flex">
          <ul className="flex gap-8 text-gray-700 font-medium">
            <li className="hover:text-purple-700 cursor-pointer transition duration-300">Products</li>
            <li className="hover:text-purple-700 cursor-pointer transition duration-300">Features</li>
            <li className="hover:text-purple-700 cursor-pointer transition duration-300">Pricing</li>
            <li className="hover:text-purple-700 cursor-pointer transition duration-300">Testimonials</li>
            <li className="hover:text-purple-700 cursor-pointer transition duration-300">FAQ</li>
          </ul>
        </div>

     
        <div className="flex-1 flex justify-end items-center gap-5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                    2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 
                    100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="badge badge-sm badge-primary indicator-item">
                  {`(${carts.length})`}
                </span>
              </div>
            </div>
          </div>
         <div className='hidden md:flex items-center gap-4'>
          <p className="font-medium text-gray-700 cursor-pointer hover:text-purple-700 transition">
            Login
          </p>

          <button className="btn btn-primary rounded-full px-6">
            Get Started
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;