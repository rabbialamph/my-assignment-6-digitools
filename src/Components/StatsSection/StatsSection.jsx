import React from 'react';

const StatsSection = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-4">
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-10 px-4 rounded-xl flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">


        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
          <p className="text-sm mt-1">Active Users</p>
        </div>


        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/50 pt-4 md:pt-0 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
          <p className="text-sm mt-1">Premium Tools</p>
        </div>

 
        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/50 pt-4 md:pt-0 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
          <p className="text-sm mt-1">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;