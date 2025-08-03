import React from "react";
import { useCart } from "../Context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuNotebook } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import emptyCard  from '../assets/empty-cart.png'
const Cart = ( {location, getLocation}) => {
  const { cartItem, updatedQuantity,deleteItem } = useCart();
const {user} = useUser()
//console.log(user);

const navigate =useNavigate()

  // ***************  Total Item count ++++ 
const totalPrice = cartItem.reduce((total,item)  => total + item.price ,0)


  return (
    <div className="mt-10 max-w-6xl  mx-auto  px-4 md:px-0 mb-5">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold  text-2xl "> My Cart ({cartItem.length})</h1>
          <div>
            <div className=" mt-10 ">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded flex items-center justify-between mt-4 w-full"
                  >
                    <div className="flex   items-center  md:gap-4 gap-7">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="md:w-30 md:h-30 w-100 h-20  gap-32 rounded "
                      />
                    </div>
                    <div>
                      <h1 className=" md:w-[300px]  line-clamp-2"> {item.title}</h1>
                      <p className="text-red-500 font-bold text-lg">
                        {" "}
                        ${item.price}{" "}
                      </p>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl ">
                      <button  onClick={() => updatedQuantity(item.id, "decrease")}className="cursor-pointer"> - </button>
                      <span> {item.quantity} </span>
                      <button className="cursor-pointer" onClick={() => updatedQuantity(item.id, "increase")}> + </button>
                    </div>
                    <span onClick={() =>deleteItem(item.id)} className="hover:bg-white/60 transition-all rounded-full p-5 hover:shadow-2xl">
                      <RiDeleteBin6Line  className="text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            {/* ********************************* Start User Information From ***************************  */}
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-22  ml-8">
              <div className=" bg-gray-100 rounded p-8  m-6 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info{" "}
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor=""> Full Name </label>
                  <input
                  value={user.fullName}
                    type="text"
                    placeholder="Enter Your Name"
                    className="p-3 rounded "
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor=""> Address </label>
                  <input
                  value={location.county}
                    type="text"
                    placeholder="Enter Your Name"
                    className="p-3 rounded "
                  />
                </div>
                <div className=" w-full flex  gap-5">
                  <div className="w-full flex  gap-5">
                    <div className="flex flex-col space-y-1 w-full">
                      <label htmlFor=""> State </label>
                      <input
                      value={location.state}
                        type="text"
                        placeholder="Enter Your State "
                        className="p-3  rounded w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor=""> PostCode </label>
                    <input
                    value={location.postcode}
                      type="text"
                      placeholder="Enter Your PostCod  "
                      className="p-3  rounded w-full"
                    />
                  </div>
                </div>
                <div className=" w-full flex  gap-5">
                  <div className="w-full flex  gap-5">
                    <div className="flex flex-col space-y-1 w-full">
                      <label htmlFor=""> Country </label>
                      <input
                      value={location.country}
                        type="text"
                        placeholder="Enter Your Country"
                        className="p-3  rounded w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor=""> Phone No. </label>
                    <input
                      type="number"
                      placeholder="Enter Your  Number "
                      className="p-3  rounded w-full"
                    />
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded mt-4 cursor-pointer">
                  {" "}
                  Submit{" "}
                </button>
                <div className="flex items-center justify-center w-full text-gray-700">
                  -------------OR---------------
                </div>
                <div className="flex  justify-center ">
                  <button className="bg-red-500 text-white px-3 py-2  rounded cursor-pointer "
                  onClick={getLocation}
                  >
                   
                    Detect Location{" "}
                  </button>
                </div>
              </div>

               {/* ******************************* Start Bill Section ************************************* */}
             <div className="bg-white border border-gray-100 shadow-xl rounded p-8  ml- mt-6 space-y-2 h-max"> 
              <h1 className="text-gray-800 font-bold text-xl "> Bill Details </h1>
              <div className="flex justify-between items-center "> 
                <h1 className="flex gap-2 items-center text-gray-700"><span> <LuNotebook/> </span> Items Total</h1>
                <p className="font-bold text-red-500"> ${totalPrice}</p>
              </div>
              <div className="flex justify-between  text-gray-700"> 
                  <h1 className="flex gap-2 items-center text-gray-700"><span> <MdDeliveryDining/>  </span> Delivery Charge </h1>
                   <p className="text-red-500 font-bold "><span className="text-gray-600 line-through"> $25</span> FREE</p>
              </div>
               <div className="flex justify-between  text-gray-700"> 
                    <h1 className="flex gap-2 items-center text-gray-700">
                      <span> <GiShoppingBag/>  </span> Handling Charge </h1>
                   <p className="text-red-500 font-bold "> $5 </p>
              </div>
              <hr className="text-gray-400 m-4 font-bold " /> 
              <div className="flex justify-between items-center"> 
                <h1 className="font-semibold text-lg " > Grand total</h1>
                <p  className="font-semibold"> ${totalPrice + 5} </p>
              </div>
              <div> <h1 className="font-semibold text-gray-700 mb-4 mt-9"> Apply Promo Code </h1>
              <div className="flex gap-4 ">  
                <input type="text" placeholder="Enter Code " className="p-3 rounded w-full " />
                <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded "> Apply   </button>
              </div>
               </div>
               <button className="bg-red-500  text-white px-4 py-3 rounded w-full cursor-pointer m-5">  Proceed to Check Out </button>
               </div>
            </div>
              {/*   No another go to page because use /cart  but good way /Home so to Protect Route File and change tha Path/Home  */}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center h-[600] ">
        
           <h1 className="text-red-500 font-bold text-5xl text-muted">  Oh no ! Your Cart is empty </h1>
           <img   src={emptyCard} className="w-[400px]" />
           <button onClick={()=>navigate('/products')} className="bg-red-500 text-white px-4 py-3 rounded  cursor-pointer ">Continue Shopping </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
