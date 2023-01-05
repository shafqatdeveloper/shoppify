import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <div className="w-full relative mt-20  pb-3 h-full bg-[#a2d5ac]">
      <div className="flex items-center flex-col justify-center">
        <div className="grid sm:w-3/5 px-2 sm:px-0 grid-cols-2 md:grid-cols-3">
          <div className="py-6">
            <h1 className="text-3xl font-bold uppercase">Shoppify</h1>
            <Link to="/shop">
              <h1 className="py-1.5 text-lg font-semibold border-b-2 w-min px-1 border-b-slate-600">
                Shop
              </h1>
            </Link>
            <Link to="/about">
              <h1 className="py-1.5 text-lg font-semibold border-b-2 w-min px-1 border-b-slate-600">
                About
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="py-1.5 text-lg font-semibold border-b-2 w-min px-1 border-b-slate-600">
                Contact
              </h1>
            </Link>
            {isAuthenticated ? (
              <img
                src={user.picture}
                alt=""
                className="w-10 rounded-full border-2 border-red-300"
              />
            ) : (
              <button
                className="bg-amber-700 font-bold rounded-sm px-6 text-[#e5eec1] py-1.5 mt-6 "
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </div>
          <div className="py-6">
            <h1 className="text-xl font-bold uppercase pt-1 pb-5">
              Contact Info
            </h1>
            <div className="flex flex-col gap-3">
              <a href="tel:+923000293355">
                <h1 className="flex font-semibold items-center gap-3">
                  <BsTelephoneFill size={22} className="text-red-700" />
                  <span>(+92) 3000293355</span>
                </h1>
              </a>
              <a href="mailto:shafqat.developer@gmail.com">
                <h1 className="flex font-semibold items-center gap-3">
                  <AiOutlineMail size={28} className="text-green-800" />
                  <span>E-Mail</span>
                </h1>
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl py-5 font-bold">Social Links</h1>
            <div className="flex items-center gap-5">
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100009433613382"
              >
                <FaFacebookF
                  size={36}
                  className="bg-gradient-to-r text-blue-700 bg-white rounded-full p-1 "
                />
              </a>
              <a target="_blank" href="https://instagram.com/mshafqatrasool">
                <FaInstagram
                  size={36}
                  className="bg-gradient-to-b from-[#c306e1] via-[#f60963] to-[#f6a000] rounded-xl text-white p-1  "
                />
              </a>
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100009433613382"
              >
                <FaTwitter
                  size={36}
                  className="text-blue-700  bg-white rounded-full p-1  "
                />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=923000293355"
              >
                <FaWhatsapp
                  size={36}
                  className="bg-green-600 text-white rounded-full p-1  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className=" text-lg text-center font-semibold">
          {" "}
          <span>&copy;</span>2023
          <span className="text-amber-800 font-extrabold">
            <Link to='/' >
            SHOPPIFY
            </Link>
            </span> All
          Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
