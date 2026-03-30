import React, {  } from 'react';

const CartSection = ({carts}) => {


    return (
        <div className='max-w-[1180px] mx-auto p-5'>
            <div className='border border-gray-500 rounded-2xl p-8'>
               <p className='text-2xl font-semibold mb-4'>Your Cart</p>
               <div className='space-y-5'>
 
                  {
                    carts.map(item => 
                    <div className='bg-gray-200 rounded-2xl p-6 flex items-center justify-between'>
                      <div className='flex gap-3'>
                        <img src={item.image} alt={name} className='bg-white p-2 rounded-full'/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                      </div>
                      <div>
                        <button className='text-red-600 cursor-pointer'>Remove</button>
                      </div>
                    </div>
                    )
                  }
               </div>
            </div>
           
        </div>
    );
};

export default CartSection;