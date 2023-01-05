import React, { useState } from "react";
import Cards from "./Cards.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import { products } from "../Data.jsx";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Shop = () => {
    const [query, setQuery] = useState("0");
    const [query1, setQuery1] = useState("");
    const [query2, setQuery2] = useState("");
    console.log(query2);
  
    const [data, setData] = useState(products);
  
    const search = (data) => {
      return query === "0"
        ? data.filter(
            (item) => item.category.match(query2) && item.category.startsWith(query1)
          )
        : data.filter(
            (item) =>
              item.title.includes(query2) &&
              item.category.includes(query1) &&
              item.price <= query
          );
    };
  
    const lowToHigh = () => {
      const sorted = [...data].sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
      setData(sorted);
    };
    const highToLow = () => {
      const sorted = [...data].sort((a, b) => {
        return a.price > b.price ? -1 : 1;
      });
      setData(sorted);
    };
  
  return (
    <div className="w-full mt-16 flex flex-col sm:flex-row">
      <div className="w-full p-1 sm:w-[30%] relative sm:h-[550px] flex flex-col items-center rounded-b-lg border-r-[1px] border-b-[1px] border-gray-600 md:w-1/5 ">
        <h1 className="absolute text-xl font-semibold top-1 md:top-4">
          Filter Products
        </h1>
        <form className="flex pt-12 md:pt-32 flex-col  ">
          <div className="flex border-2 rounded-md border-[#195965]  items-center w-full">
            <input
              onChange={(e) => setQuery2(e.target.value)}
              value={query2}
              type="text"
              placeholder="Search Products"
              className="focus:outline-none p-0.5 outline-none bg-transparent w-full"
            />
            <AiOutlineSearch />
          </div>
          <div className="py-2 md:py-10">
            <input
              type="range"
              min="0"
              max="3000"
              className="w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <h1 className="text-center">{query}</h1>
          </div>
          <div className="w-full pb-5 md:pb-0">
            <select
              onChange={(e) => setQuery1(e.target.value)}
              name="products"
              className="w-full capitalize focus:outline-none outline-none border-2 rounded-md border-[#195965]"
            >
              <option className="capitalize" value="">
                all
              </option>
              <option>phone</option>
              <option>watch</option>
              <option>camera</option>
              <option>headphone</option>
              <option>laptop</option>
              <option>power bank</option>
            </select>
          </div>
        </form>
            <h1 className="text-lg pt-5 font-semibold">Sort By Price</h1>
        <div className="flex gap-5 pt-5">
          <button
            className="border-2 rounded-lg px-1 gap-4 font-bold flex items-center  border-[#195965] bg-[#e5eec1]"
            onClick={lowToHigh}
          >
            Price <BsArrowUp />{" "}
          </button>
          <button
            className="border-2 rounded-lg px-1 gap-4 font-bold flex items-center  border-[#195965] bg-[#e5eec1]"
            onClick={highToLow}
          >
            Price <BsArrowDown />{" "}
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[73%] md:w-4/5 ">
        <Cards data={search(data)} />
      </div>
    </div>
  )
}

export default Shop