import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { products } from "../Data.jsx";

const Details = () => {
  const data = products;
  const { id } = useParams();

  return (
    <div className="mt-20 flex flex-col items-center w-full h-full">
      <div className="w-full sm:w-[90%] md:w-3/5">
        {data
          .filter((item) => item.id === id)
          .map((pro) => {
            const [pic, setPic] = useState(pro.pic);
            return (
              <div className="flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl py-4">
                  <span className="text-xl md:text-3xl font-bold capitalize">
                    {pro.title}
                  </span>
                </h1>
                <div className="flex border-2 mx-2 border-gray-500 p-2 items-center rounded-lg flex-col sm:flex-row">
                  <div className=" w-80 h-80 sm:w-[35rem]">
                    <img
                      src={pic}
                      alt=""
                      className="xl:w-[95%] w-full h-52 object-center rounded-lg"
                    />
                    <div className="h-28 w-full py-2 flex">
                      <img
                        onClick={() => setPic(pro.pic)}
                        src={pro.pic}
                        alt=""
                        className="w-[102px] sm:w-[91px] xl:w-[99px] cursor-pointer rounded-md h-full"
                      />
                      <img
                        onClick={() => setPic(pro.pic1)}
                        src={pro.pic1}
                        alt=""
                        className="w-[102px] sm:w-[91px] xl:w-[99px] cursor-pointer rounded-md mx-1 h-full"
                      />
                      <img
                        onClick={() => setPic(pro.pic2)}
                        src={pro.pic2}
                        alt=""
                        className="w-[102px] sm:w-[91px] xl:w-[99px] cursor-pointer rounded-md h-full"
                      />
                    </div>
                  </div>

                  <div className="px-5 pt-5 sm:pt-0 md:px-10">
                    <h1 className="capitalize font-bold">
                      <span className="bg-red-300 rounded-lg px-2 py-1 font-bold">
                        Title :
                      </span>{" "}
                      {pro.title}
                    </h1>
                    <h1 className="py-2 font-bold  sm:py-5">
                      <span className="bg-red-300 rounded-lg px-2 py-1 font-bold">
                        Price :
                      </span>{" "}
                      ${pro.price}
                    </h1>
                    <h1 className=" font-bold">
                      <span className="bg-red-300 rounded-lg px-2 py-1 font-bold">
                        Category :
                      </span>{" "}
                      : {pro.category}
                    </h1>
                    <h1 className="py-2 font-bold  sm:py-5">
                      <span className="bg-red-300 rounded-lg px-2 py-1 font-bold">
                        Condition :
                      </span>{" "}
                      : {pro.status}
                    </h1>
                    <p className="md:text-center">
                      <span className="font-bold bg-red-300 px-2 py-1 rounded-md">
                        Descr. :
                      </span>{" "}
                      <span className="w-3/5">{pro.description}</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        <div>
          <Link to="/">
            <button className="flex items-center gap-2 ml-2 rounded-md border-2 border-blue-500 mt-4 text-[#e5eec9] px-1 bg-[#195965] py-1 ">
            <FaLongArrowAltLeft />
              Back to Home 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
