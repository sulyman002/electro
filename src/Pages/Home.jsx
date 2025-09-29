import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
  return (
    <div className=''>
        <div className="border-[1px] border-[#ADADAD]/30 grid grid-cols-1 md:grid-cols-2 mb-8 mx-auto container ">
        <div className="flex flex-col gap-4 py-20 pl-12 md:pl-18 md:items-start justify-center">
          <p className="flex items-center text-[#414141] font-500 font-medium md:text-[18px] text-[16px] ">
            <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#484848] before:block mr-2'></span>
            OUR BEST SELL
          </p>
          <h1 className=" text-[#414141] text-[52px] md:text-[60px]  ">
            Latest Arrivals
          </h1>
          <p onClick={() => {
            navigate("/all-collection");
            window.scrollTo({top: 0, behavior: "smooth"})
          }} className="flex items-center font-500 font-medium md:text-[18px] text-[16px] cursor-pointer bg-black text-white shadow-lg rounded-md py-4 px-6 hover:scale-90 hover:bg-black/70 justify-center ">
            SHOP NOW
            
          </p>
        </div>
        <div className="w-full">
          <img
            src="https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
            alt="hero image"
            className="w-full object-cover h-fu "
          />
        </div>
      </div>
    </div>
  )
}

export default Home