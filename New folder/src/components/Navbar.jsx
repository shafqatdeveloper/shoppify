import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [nav, setNav] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-16 fixed top-0 z-50 bg-[#195965] flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl sm:text-3xl uppercase font-sans font-bold text-[#a2d5ff] pl-3 sm:pl-5 md:pl-7">
          Shoppify
        </h1>
      </Link>
      {/* Desktop Navbar */}
      <div className="md:flex items-center hidden pr-8 text-[#e5eec1] gap-8">
        <Link to="/">
          <h1 className="text-sm hover:border-b-2  border-[#e5eec1] cursor-pointer font-medium uppercase">
            Home
          </h1>
        </Link>
        <Link to="/shop">
          <h1 className="text-sm hover:border-b-2 border-[#e5eec1] cursor-pointer font-medium uppercase">
            shop
          </h1>
        </Link>
        <Link to="/about">
          <h1 className="text-sm hover:border-b-2 border-[#e5eec1] cursor-pointer font-medium uppercase">
            about
          </h1>
        </Link>
        <h1 className="text-sm hover:border-b-2 border-[#e5eec1] cursor-pointer font-medium uppercase">
          contact
        </h1>
        {isAuthenticated ? (
          <h1
            onClick={() => logout()}
            className="text-sm hover:border-b-2 border-[#e5eec1] cursor-pointer font-medium uppercase"
          >
            Logout
          </h1>
        ) : (
          <h1
            onClick={() => loginWithRedirect()}
            className="text-sm hover:border-b-2 border-[#e5eec1] cursor-pointer font-medium uppercase"
          >
            Login
          </h1>
        )}

        {isAuthenticated ? (
          <img src={user.picture} alt="" className="w-10 rounded-full" />
        ) : (
          ""
        )}

        <Link to="/cart">
          <div className="relative cursor-pointer">
            <BsFillCartPlusFill size={30} />
            <h1 className="bg-red-700 text-xs text-[#e5eec1] absolute top-0 right-0 px-1 rounded-full ">
              {cart.cartItems.length}
            </h1>
          </div>
        </Link>
      </div>
      {/* Mobile Navabr */}

     <div className="relative md:hidden cursor-pointer">
     <Link to='/cart' >
        <BsFillCartPlusFill className="text-[#e5eec1]" size={30} />
        <h1 className="bg-red-700 text-[#e5eec1] text-xs absolute top-0 right-0 px-1 rounded-full ">
          {cart.cartItems.length}
        </h1>
     </Link>
      </div>

      <div className="md:hidden">
        <AiOutlineMenu
          className="mr-4 text-[#e5eec1]"
          size={25}
          onClick={handleNav}
        />
      </div>

      {nav ? (
        <div className="bg-black/30 transition-all duration-500 fixed top-0 right-0 w-full h-full"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "bg-white fixed h-screen w-[200px] top-0 right-0  transition-all duration-300 "
            : "bg-white fixed h-screen w-[200px]  transition-all duration-500  top-0 right-[-100%]"
        }
      >
        {nav && (
          <div>
            <div className="absolute right-4 top-4">
              <AiOutlineClose
                size={25}
                className="text-[#557c83]"
                onClick={handleNav}
              />
            </div>
            <div className="flex mt-4 ml-4 flex-col gap-5">
              <Link to='/' onClick={handleNav} >
                <h1 className="font-semibold uppercase text-lg text-[#557c83]">
                  home
                </h1>
              </Link>
              <Link to='/shop' onClick={handleNav}>
                <h1 className="font-semibold uppercase text-lg text-[#557c83]">
                  shop
                </h1>
              </Link>
              <Link to='/about' onClick={handleNav}>
                <h1 className="font-semibold uppercase text-lg text-[#557c83]">
                  about
                </h1>
              </Link>
              <Link to='/contact' onClick={handleNav}>
                <h1 className="font-semibold uppercase text-lg text-[#557c83]">
                  contact
                </h1>
              </Link>
              {isAuthenticated ? (
                <h1
                  onClick={() => logout()}
                  className="text-sm hover:border-b-2 border-[#e5eec1] cursor-pointer font-medium uppercase"
                >
                  Logout
                </h1>
              ) : (
                <h1
                  onClick={() => loginWithRedirect()}
                  className="text-sm hover:border-b-2 border-[#e5eec1] bg-amber-800 w-min px-3 py-1 text-[#e5eec1] cursor-pointer font-medium uppercase"
                >
                  Login
                </h1>
              )}

              {isAuthenticated ? (
                <img src={user.picture} alt="" className="w-10 rounded-full" />
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
