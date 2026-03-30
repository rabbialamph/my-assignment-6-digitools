import React from 'react';
import bannerImg from '../../assets/image/banner.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className='max-w-[1080px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 p-3 justify-center items-center gap-9 my-8 md:my-15'>
            <div className='order-2 md:order-1 space-y-6 md:space-y-10 '>
                <div className='bg-blue-50 p-1 px-2 w-[280px] justify-center items-center gap-2 text-purple-900 rounded-full flex'>
                 <p className="h-3 w-3 bg-purple-400 rounded-full border-3 border-purple-300"></p>
                 <p>New: AI-Powered Tools Available</p>
                </div>
              
              <h2 className='text-4xl md:text-6xl font-bold'>Supercharge Your Digital Workflow</h2>
              <p>Access premium AI tools, design assets, templates, and productivity
                 software—all in one place. Start creating faster today. <br />
                 Explore Products
              </p>
              <div className='flex gap-5 '>
                <button className="btn btn-primary text-white rounded-full px-6">
                  Explore Products
                </button>
                <button className="btn btn-outline btn-primary rounded-full"><Play></Play> Watch Demo</button>
              </div>
             
            </div>
               <div className="order-1 md:order-2">
                  <img
                     src={bannerImg}
                     alt=""
                     className="rounded-2xl"
                    />
                </div>
          </div>
        </div>
    );
};

export default Banner;