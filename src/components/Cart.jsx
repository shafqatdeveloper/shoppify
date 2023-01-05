import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {
  addToCart,
  clearCart,
  decreaseItem,
  removeItem,
} from "../featues/cart/CartSlice.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };
  const handleIncreaseItem = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseItem = (product) => {
    dispatch(decreaseItem(product));
  };
  const handleClearCart = (product)=>{
        dispatch(clearCart(product))
  }
  return (
    <div className="mt-20 flex items-center flex-col w-full">
      <div className="my-5">
        <h1 className="text-center text-2xl md:text-3xl font-semibold font-sans uppercase">
          Shopping Cart
        </h1>
      </div>
      {cart.cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <h1 className="py-4 text-2xl">Your Cart is Empty</h1>
          <Link to="/">
            <button className="flex justify-center gap-2 bg-[#195965] text-[#e5eec1] font-semibold py-1 px-1 rounded-lg border-[2px] border-indigo-500  items-center">
              <FaLongArrowAltLeft />
              Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-[90%] sm:w-4/5 md:w-3/5]">
          {cart.cartItems.map((item) => {
            return (
              <div key={item.id} className=" flex flex-col w-full">
                <div className="flex w-full flex-col border-2 border-[#195965] rounded-md my-1 md:flex-row items-center">
                  <div className="w-full my-1 md:w-2/5  p-1 lg:w-1/5">
                    <img
                      src={item.pic}
                      alt=""
                      className=" rounded-md object-center md:h-[180px]"
                    />
                  </div>
                  <div></div>
                  <div className="md:pl-5 w-full  flex flex-col md:flex-row md:w-3/5 px-5 md:px-0">
                    <div className="md:w-[50%]">
                      <div className="flex items-center justify-between md:block">
                        <h1>
                          <span className="font-semibold text-lg">Title :</span>{" "}
                          <span className="font-bold capitalize">
                            {" "}
                            {item.title}
                          </span>
                        </h1>
                        <h1>
                          <span className="font-semibold text-lg">Price :</span>{" "}
                          ${item.price}
                        </h1>
                      </div>
                      <h1>
                        <span className="font-semibold text-lg">
                          Condition :
                        </span>{" "}
                        {item.status}
                      </h1>
                      <div className="flex mt-2 items-center">
                        <span className="font-semibold text-lg">Remove : </span>
                        <MdDelete
                          size={23}
                          onClick={() => handleRemoveItem(item)}
                          className="text-red-600 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <div className="flex md:block items-center justify-between">
                        <h1>
                          <span className="text-lg font-semibold">
                            Quautity :{" "}
                            <span className="font-bold">{item.quantity}</span>{" "}
                          </span>{" "}
                        </h1>
                        <h1 className="py-2">
                          <span className="text-lg font-semibold">
                            Subtotal :{" "}
                            <span className="font-bold">
                              $ {item.price * item.quantity}
                            </span>
                          </span>
                        </h1>
                      </div>
                      <div className="flex items-center justify-center md:block mt-3 mb-3 md:mb-0">
                        <div className="flex bg-[#195965] items-center justify-between px-3 text-[#e5eec2] font-bold w-2/5 py-1 rounded-md">
                          <button onClick={() => handleDecreaseItem(item)}>
                            -
                          </button>
                          <h1>{item.quantity}</h1>
                          <button onClick={() => handleIncreaseItem(item)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex items-start justify-center py-5">
            <h1 className="bg-[#195965] w-64 px-1 py-2 text-center text-[#e5eec1] rounded-md"><span className="font-semibold text-lg tracking-widest">Total : </span><span className="text-xl font-bold pl-2">${cart.total}</span> </h1>
          </div>
          <div className="flex items-start justify-center py-5">
            <button onClick={()=>handleClearCart(cart)} className="bg-red-600 text-[#e5eec1] px-1 py-1 font-semibold text-lg border-2  rounded-md">Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
