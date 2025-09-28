import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto container">
      <div className="w-full py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          <div className="">
            <h2 className="uppercase">About Us</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className="flex items-center gap-3 ">
              <img src="#" alt="" />
              <p className="">1734 Stonecoal Road</p>
            </div>
            <div className="flex items-center gap-3 ">
              <img src="#" alt="" />
              <p className="">+021-95-51-84</p>
            </div>
            <div className="flex items-center gap-3 ">
              <img src="#" alt="" />
              <p className="">email@email.com</p>
            </div>
          </div>
          {/* Categories */}
          <div className="">
            <h2 className="uppercase">Categories</h2>
            <ul className="">
              <li>Hot deals</li>
              <li>Laptops</li>
              <li>Smartphones</li>
              <li>Cameras</li>
              <li>Accessories</li>
            </ul>
          </div>
          {/* Categories */}
          <div className="">
            <h2 className="uppercase">Information</h2>
            <ul className="">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Orders and Returns</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* Categories */}
          <div className="">
            <h2 className="uppercase">Service</h2>
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
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default Footer;
