import React from "react";
import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiShoppingCart,
  FiLock,
  FiHeart,
} from "react-icons/fi";

import { FaNairaSign } from "react-icons/fa6";

const Nav = () => {
  return (
    <div>
      {/* Nav header */}
      <div className="bg-[#1e1f29] ">
        <div className="container mx-auto item-center justify-between py-5 ">
          {/* right */}
          <div className="text-white flex item justify-between">
            {/* contacts */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FiPhone className="text-red-800 size-4" />
                <p className="hover:text-red-800 cursor-pointer text-[14px]">
                  +234-807-629-3177
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-red-800 size-4" />
                <p className="hover:text-red-800 cursor-pointer text-[14px]">
                  pulsepoint@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-red-800 size-4" />
                <p className="hover:text-red-800 cursor-pointer text-[14px]  ">
                  1762 akunlemu, oyo
                </p>
              </div>
            </div>
            {/* details */}
            <div className="">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaNairaSign className="text-red-800 size-4" />
                  <p className="hover:text-red-800 cursor-pointer text-[14px]">
                    NGN
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FiLock className="text-red-800 size-4" />
                  <p className="hover:text-red-800 cursor-pointer text-[14px]">
                    My Account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nav body */}
      <div className="bg-[#030303] border-b-[3px] border-red-600">
        <div className="container mx-auto flex items-center justify-between py-10 flex-col md:flex-row ">
          <h1 className="text-4xl text-white font-bold">
            Electro <span>.</span>
          </h1>
          {/* search section */}
          <div className="flex items-center">
            <div className="">
              <input type="text" placeholder="Search here" />
            </div>
            <div className="">Search</div>
          </div>
          {/* cart and wait list */}
          <div className="flex items-center gap-3 text-white">
            <div className="flex flex-col gap-1 items-center ">
              <div className="relative ">
                <FiHeart />
                <p className="absolute top-[-10px] right-[-15px] h-4 w-4 text-[12px] font-semibold flex items-center justify-center  rounded-full bg-red-700">
                  1
                </p>
              </div>

              <p className="text-[14px] ">Your Wishlist</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <div className="relative ">
                <FiShoppingCart />
                <p className="absolute top-[-10px] right-[-15px] h-4 w-4 text-[12px] font-semibold flex items-center justify-center  rounded-full bg-red-700">
                  1
                </p>
              </div>

              <p className="text-[14px] ">Your Cart</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <nav>
          <Link to="/">Home</Link>
          <Link to="#">Hot Deals</Link>
          <Link to="#">Categories</Link>
          <Link to="#">Laptops</Link>
          <Link to="#">Smartphones</Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
