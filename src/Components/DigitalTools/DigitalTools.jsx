import React, { use } from 'react';
import CardData from './CardData';

const DigitalTools = ({cardPromise}) => {
    const cardData = use(cardPromise)
    return (
        <div className='my-30'>
             <div className='text-center space-y-3'>
                <h3 className='text-3xl md:text-5xl font-bold'>Premium Digital Tools</h3>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

          <div className='max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 p-3 gap-5'>
              {
                cardData.map((data, index)=> 
                <CardData 
                key={index} 
                data={data}
                index={index}
                ></CardData>)
              }
          </div>
        </div>
       
    );
};

export default DigitalTools;