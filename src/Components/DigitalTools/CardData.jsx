import React, { } from 'react';
import { toast } from 'react-toastify';
import { Check } from 'lucide-react';


const CardData = ({data, carts, setCarts}) => {
    
    const {name, description, price, period, tag, features, image, id} = data;

     const isAdded = carts.includes(data);

     const BuyBowHandle = () =>{
            if (!isAdded) {
                setCarts([...carts, data]);
             }
             toast.success("Item successfully add to cart")
        };

    return (
   
        <div>
            <div className='relative border border-gray-500 p-5 rounded-2xl '>
                <div className='space-y-4 mb-3'>
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                   {tag}
                </span>
                 
                <img src={image} alt={name} className='border border-gray-300/30 p-2 rounded-full'/>

                <h3 className='text-3xl font-semibold'>{name}</h3>

                <p className='text-gray-500'>{description}</p>
                <div className='flex items-center gap-2'>
                   <p className='text-2xl font-semibold'>${price}</p>
                   <p>/{period}</p>
                </div>
                </div>
               
            {
                features.map(feature=> 
    
                <div key={id}>
                    <ul>

                        <li className='flex items-center gap-1'><Check className='text-sky-600' size={18}></Check>{feature}</li>
                    </ul>
                </div>

                )
            }
               <button 
                 onClick={BuyBowHandle} 
                 className={ isAdded 
                 ?  "btn bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full w-full px-6 mt-3"
                 : "btn bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-full w-full px-6 mt-3"}
                 >
                 { isAdded ? "Added to cart" : "Buy Now" }
               </button>
            </div>
        </div>
    );
};

export default CardData;