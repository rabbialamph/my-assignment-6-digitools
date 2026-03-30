import React from 'react';

const Tabs = ({tabHandleClick}) => {
    return (
        <div className='max-w-[1180px] mx-auto flex justify-center my-8'>      
          <div className="tabs tabs-box gap-6">
            <input onClick={() => tabHandleClick(true)} type="radio" name="my_tabs_1" className="tab rounded-full w-34" aria-label="Product" defaultChecked />
            <input onClick={() => tabHandleClick(false)} type="radio" name="my_tabs_1" className="tab rounded-full w-34" aria-label="Cart (0)" />
          </div>
        </div>
    );
};

export default Tabs;