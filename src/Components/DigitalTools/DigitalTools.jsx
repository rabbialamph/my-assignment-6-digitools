import React, { use } from 'react';
import CardData from './CardData';

const DigitalTools = ({cardPromise, carts, setCarts}) => {
    const cardData = use(cardPromise)
    return (
        <div className='my-10'>
          <div className='max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 p-3 gap-5'>
              {
                cardData.map((data)=> 
                <CardData 
                key={data.id} 
                data={data}
                carts={carts}
                setCarts={setCarts}
                ></CardData>)
              }
          </div>
        </div>
       
    );
};

export default DigitalTools;