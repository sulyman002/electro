import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#15161d] text-white px-6">
        <div className="w-full py-10  mx-auto container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
            <div className="flex flex-col gap-5">
              <h2 className="uppercase font-bold ">About Us</h2>
              <div className="">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>

                <div className="flex items-center gap-2">
                  <FiMapPin className="text-red-800 size-4" />
                  <p className="hover:text-red-800 cursor-pointer text-[14px]">
                    1734 Stonecoal Road
                  </p>
                </div>
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
              </div>
            </div>
            {/* Categories */}
            <div className="flex flex-col gap-5 ">
              <h2 className="uppercase font-bold ">Categories</h2>
              <ul className="">
                <li>Hot deals</li>
                <li>Laptops</li>
                <li>Smartphones</li>
                <li>Cameras</li>
                <li>Accessories</li>
              </ul>
            </div>
            {/* Categories */}
            <div className="flex flex-col gap-5">
              <h2 className="uppercase font-bold">Information</h2>
              <ul className="">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Orders and Returns</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            {/* Categories */}
            <div className="flex flex-col gap-5">
              <h2 className="uppercase font-bold">Service</h2>
              <ul className="">
                <li>My Account</li>
                <li>View Cart</li>
                <li>Wishlist</li>
                <li>Track My Order</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        {/* second section of the footer */}
      </div>
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default Footer;
