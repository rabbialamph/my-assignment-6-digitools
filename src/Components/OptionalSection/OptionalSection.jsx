import React from 'react';

const OptionalSection = () => {
    return (
    <div className="max-w-[1180px] mx-auto px-4 mb-8">
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-2xl py-20 px-6 text-center text-white">

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-gray-200">
          14-day free trial • No credit card required • Cancel any time
        </p>
      </div>
    </div>
  );
};

export default OptionalSection;