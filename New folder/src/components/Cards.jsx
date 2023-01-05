import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../featues/cart/CartSlice.jsx";

const Cards = ({ data }) => {

  const dispatch = useDispatch();

  const add = (item)=>{
    dispatch(addToCart(item))
  }

  return (
    <div className="w-full my-5">
      <h1 className="text-center text-2xl font-bold py-5 uppercase">Shop</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-4 px-3">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-50 shadow-xl p-2 rounded-xl hover:shadow-md hover:shadow-[#195965] shadow-gray-400"
            >
             <Link to={`/details/${item.id}`} >
             <img
                src={item.pic}
                alt=""
                className="h-32 md:h-48 cursor-pointer rounded-xl w-full"
              />
             </Link>
              <div className="py-1 md:pl-4 md:py-3">
                <h1 className="text-[#195965] capitalize font-semibold">
                  {item.title}
                </h1>
                <div className="flex py-1 justify-between pr-2 md:pr-5">
                  <h1 className="font-extrabold tracking-wider text-lg capitalize text-[#3aadab] ">
                    {item.category}
                  </h1>
                  <h1 className="pt-0.5 bg-[#afd3da] px-1 rounded-lg font-bold ">
                    {item.status}
                  </h1>
                </div>
                <h1 className="text-lg font-semibold">${item.price}</h1>
              </div>
              <div className="px-2 w-full">
                <button onClick={()=>add(item)} className="bg-[#195965] hover:bg-[#95978e] hover:text-[#195965] text-white font-bold capitalize tracking-wider w-full rounded-lg ">
                  cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
