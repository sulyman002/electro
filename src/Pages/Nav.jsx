import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiShoppingCart,
  FiLock,
  FiHeart,
} from "react-icons/fi";
import { FaNairaSign } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setInputData } from "../Redux/InputSlice";
import { MdShoppingCart } from "react-icons/md";
import { setRemoveFromCart } from "../Redux/CartSlice";
import { FaTrash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const cart = useSelector((state) => state.cartRed.cartData);
  const searchInput = useSelector((state) => state.inputRed.valueEnter);
  return (
    <div className="">
      {/* Nav header */}
      <div className="bg-[#1e1f29]  ">
        <div className="container mx-auto item-center justify-between py-5 px-6 md:px-0">
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
      <div className="bg-[#030303] border-b-[3px] border-red-600 px-6 md:px-0">
        <div className="container mx-auto flex items-center justify-between py-10 flex-col md:flex-row gap-8 ">
          <h1 className="text-4xl text-white font-bold">
            Electro <span>.</span>
          </h1>
          {/* search section */}
          <div className="flex items-center bg-white w-full md:w-1/3 rounded-full ">
            <div className="w-full">
              <input
                value={searchInput}
                onChange={(event) => dispatch(setInputData(event.target.value))}
                type="text"
                placeholder="Search here"
                className="py-2 pl-5 w-full outline-none"
              />
            </div>
            <div className="px-8 text-white font-semibold bg-red-700 flex py-2 rounded-r-full cursor-pointer">
              Search
            </div>
          </div>
          {/* cart and wait list */}
          <div className="flex items-center gap-8 md:gap-3 justify-between text-white">
            <div className="flex flex-col gap-1 items-center ">
              <div className="relative ">
                <FiHeart />
                <p className="absolute top-[-10px] right-[-15px] h-4 w-4 text-[12px] font-semibold flex items-center justify-center  rounded-full bg-red-700">
                  2
                </p>
              </div>

              <p className="text-[14px] ">Your Wishlist</p>
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <div className="relative ">
                <div onClick={() => handleOpenCart()} className="">
                  {" "}
                  <FiShoppingCart />
                </div>
                <p className="absolute top-[-10px] right-[-15px] h-4 w-4 text-[12px] font-semibold flex items-center justify-center  rounded-full bg-red-700">
                  {cart.length}
                </p>
              </div>

              {/* cart component */}
              <div
                className={`fixed px-6 top-0 right-0 w-3/4 md:w-2/4 xl:w-1/4 h-screen bg-white/90 backdrop-blur-1xl ${
                  openCart ? "translate-x-0" : "translate-x-full"
                } transition duration-1000`}
              >
                <div
                  onClick={() => setOpenCart(false)}
                  className="w-full cursor-pointer flex justify-end mt-6 "
                >
                  {" "}
                  <RxCross2 className="text-black size-7" />
                </div>
                {cart.length === 0 ? (
                  <div className="flex items-center justify-center flex-col gap-6 h-full ">
                    <p className="text-xl md:text-2xl font-bold font-600 text-red-700/50 ">
                      <div className="w-full flex items-center justify-center">
                        <MdShoppingCart className="size-10 " />
                      </div>
                      Cart is empty go back to Store
                    </p>
                    <div
                      onClick={() => {
                        navigate("/all-collection");
                        setOpenCart(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-gray-800 hover:bg-gray-400 cursor-pointer text-white font-600 font-semibold text-[16px] flex items-center justify-center px-8 py-[5px] "
                    >
                      Store
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col px-6 md:px-0">
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex md:items-center md:flex-row flex-col py-4 gap-4 justify-between border-y border-gray-300 w-full bg-red-600 "
                      >
                        <div className="flex items-center gap-3 ">
                          <div className="bg-gray-200">
                            <img
                              src={item.thumbnail}
                              alt="product image"
                              className="w-[114px] h-full  "
                            />
                          </div>
                          <div className="flex flex-col gap-3">
                            <p className="text-[#494949] font-500 font-medium text-md ">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-3 text-[#494949] font-300 text-md bg-red-900 ">
                              <p className="">${item.price}</p>
                              <p className="">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-[18px]">
                              Date:{" "}
                              <span className="text-[#989898]">
                                25, May, 2024
                              </span>
                            </div>
                          </div>
                        </div>

                        
                          <div className="cursor-pointer ">
                            <FaTrash
                              onClick={() =>
                                dispatch(setRemoveFromCart(item.id))
                              }
                              className="w-[20px] h-[20px] text-red-600 "
                            />
                          </div>
                        
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-[14px] ">Your Cart</p>
            </div>
            <div className="">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 border-b border-gray-100 shadow px-6 md:px-0">
        <nav className="gap-5 flex items-center px-6">
          <Link
            to="/"
            className=" hover:text-gray-900 cursor-pointer hover:font-semibold  "
          >
            Home
          </Link>
          <Link to="/all-collection">All Collections</Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
