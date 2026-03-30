import React from 'react';
import img1 from '../../assets/products/design-tool.png'
import img2 from '../../assets/products/operation.png'
import img3 from '../../assets/products/portfolio.png'
import img4 from '../../assets/products/portfolio.png'
import img5 from '../../assets/products/social-media.png'
import img6 from '../../assets/products/writing_2327400 1.png'
import { Check } from 'lucide-react';

const image = [img1, img2, img3, img4, img5, img6];

const CardData = ({data, index}) => {
    const {name, description, price, period, tag, features} = data;
    return (
        
        <div>
            <div className='relative border border-gray-500 p-5 rounded-2xl '>
                <div className='space-y-4 mb-3'>
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                   {tag}
                </span>

                <img src={image[index]} alt={name} className='border border-b-gray-300 p-2 rounded-full'/>
                <h3 className='text-3xl font-semibold'>{name}</h3>

                <p className='text-gray-500'>{description}</p>
                <div className='flex items-center gap-2'>
                   <p className='text-2xl font-semibold'>${price}</p>
                   <p>/{period}</p>
                </div>
                </div>
               
            {
                features.map(feature=> 
                <div className=''>
                    <ul>
                        <li className='flex items-center gap-1'><Check className='text-sky-600' size={18}></Check>{feature}</li>
                    </ul>
                </div>

                )
            }
             <button className="btn btn-primary rounded-full w-full px-6 mt-3">
               Get Started
             </button>
            </div>
        </div>
    );
};

export default CardData;