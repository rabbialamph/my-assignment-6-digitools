import React, {  } from 'react';
  import { ToastContainer, toast } from 'react-toastify';


const CartSection = ({carts, setCarts}) => {

   const TotalPrice = carts.reduce((sum, item) => sum + item.price, 0)

   const handleorder =()=>{
       setCarts([])
       toast.success("Order placed successfully!")
   }

   const handleDelete = (item) =>{
    const filtercart = carts.filter(d => d.id !== item.id)
    setCarts(filtercart)
    toast.error("Item removed from cart!")
   }

    return (
        <div className='max-w-[1180px] mx-auto p-5'>
            <div className='border border-gray-500 rounded-2xl p-8'>
               <p className='text-2xl font-semibold mb-4'>Your Cart</p>

               {
                    carts.length === 0 ? (
                        <p className='text-gray-500 text-center py-10'>
                            Your cart is empty
                        </p>
                    ) : <div className='space-y-5'>
 
                  {
                    carts.map((item, index) => 
                    <div key={index} className='bg-gray-200 rounded-2xl p-6 flex items-center justify-between'>
                      <div className='flex gap-3'>
                        <img src={item.image} alt={item.name} className='bg-white p-2 rounded-full'/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={()=>handleDelete(item)} className='text-red-600 cursor-pointer'>Remove</button>
                      </div>
                    </div>
                    )
                  }
                  <div className='flex justify-between p-4'>
                    <h2>Total</h2>
                    <p className='font-bold'>${TotalPrice}</p>
                  </div>
                  <div>
                     <button onClick={handleorder} className="btn btn-primary rounded-full w-full px-6">
                       Proceed to Checkout
                     </button>
                  </div>
               </div>
               }
               
            </div>
           
        </div>
    );
};

export default CartSection;