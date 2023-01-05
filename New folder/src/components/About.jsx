import React from "react";
import Accordian from "./Accordion.jsx";
import aboutPic from "../assets/store.jpg";
const About = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <div className="pt-20 w-[95%] sm:w-[80%] md:w-[70%] flex flex-col items-center justify-center">
        <h1 className="text-2xl border-b-4 rounded-sm border-[#195965] sm:text-3xl font-bold text-center">
          About us
        </h1>
        <div className=" px-2  flex gap-5 md:gap-20 w-full flex-col md:flex-row text-justify text-slate-800 my-10 md:mt-10 rounded-md">
          <p className="w-full md:w-2/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam,
            tempora perspiciatis delectus a ea reprehenderit omnis alias
            necessitatibus distinctio molestias facilis aut, debitis nobis
            quisquam dolore nemo non accusamus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt accusantium, fugit quos,
            facere, atque omnis perferendis ipsum quia repellat expedita sit
            minima veniam laborum aspernatur soluta quod.remque eaque veritatis
            assumenda iste. Reiciendis, voluptates!
          </p>
          <div className="w-full md:w-3/5">
            <img src={aboutPic} alt="" className="w-full h-[285px]" />
          </div>
        </div>
        <Accordian />
      </div>
    </div>
  );
};

export default About;
