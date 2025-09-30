import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { setAllCollectionData } from "../Redux/AllCollectionSlice";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useRef } from "react";

const AllCollections = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingRef = useRef();
const searchValue = useSelector((state) => state.inputRed.valueEnter);

  useEffect(() => {
    gsap.to(loadingRef.current, {
      rotation: 360,
      duration: 4,
      ease: "bounce.out",
    });
  }, []);

  const fetchData = async () => {
    try {
      const resp = await axios.get("https://dummyjson.com/carts");
      const allProduct = resp.data;
      return allProduct;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["allData"],
    queryFn: fetchData,
  });

  useEffect(() => {
    if(data?.carts) {
        dispatch(setAllCollectionData(data?.carts));
        console.log(data?.cart);
        
    }
  }, [data, dispatch]);

  const finalProduct = useSelector(
    (state) => state.allCollectionRed.allCollectionData
  );
  console.log(finalProduct);

  const products = finalProduct?.flatMap((item) => item.products) || [];
  
  console.log(products);

  if (error) return "There is an error" + error.message;

//   filter search value here


const matchSearch = (searchProduct) => {
    return (
        searchValue === "" || searchProduct.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    
}

const filterData = products.filter(matchSearch)
console.log(filterData);



  

  return (
    <div className="mx-auto container">
      <div className="py-10 px-6 md:px-0">
        {/* heading */}
        <div className="flex items-center justify-between flex-col md:flex-row ">
          <h2 className="text-3xl font-bold uppercase">All Collections</h2>
          {/* <div className="">{data}</div> */}
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        {/* collections */}
        {isPending ? (
          <div className="inset-0 fixed bg-black backdrop-blur-2xl h-screen w-full text-white flex items-center justify-center flex-col gap-6">
            <div
              ref={loadingRef}
              className="h-[100px] w-[100px] rounded-full border-[8px] border-t-transparent border-b-transparent border-gray-300"
            ></div>
            <p className="text-xl text-gray-300 font-bold"> Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8 space-y-2">
            {filterData.map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex flex-col bg-gray-100 cursor-pointer gap-2 transform hover:scale-105 duration-500 transition hover:shadow-lg rounded-md"
                key={index}
              >
                <div className=" ">
                  <img
                    src={item?.thumbnail}
                    alt="product image"
                    className="md:h-[300px] w-full rounded-t-md"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <p className="font-500 font-medium text-[14px] text-[#494949] ">
                    {item.title}
                  </p>
                  <p className="font-500 font-medium text-[16px] text-[#494949] ">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCollections;
