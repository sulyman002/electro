import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import fullStar from "../assets/star_icon.svg";
import dullStar from "../assets/star_dull_icon.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "../context/useAppContext";
import Loading from "../Components/Loading";

const fetchData = async (id) => {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
};

// Add to cart function here
const addToCart = async (product) => {
  const { data } = await axios.post("https://dummyjson.com/carts/add", {
    userId: 1,
    products: [{ id: product.id, quantity: 1 }],
  });

  return data;
};

const ProductPage = () => {
  const param = useParams();
  const { id } = param;
  const client = useQueryClient();
  const navigate = useNavigate();
  const sizeData = ["S", "M", "L", "XL"];
  const { cartData, setCartItems } = useAppContext();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchData(id),
  });

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/carts/1");
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (cart?.products) {
      setCartItems(cart.products);
    }
  }, [cart, setCartItems]);

  const mutation = useMutation({
    mutationFn: addToCart,
    onMutate: async (product) => {
      await client.cancelQueries({ queryKey: ["cart"] });
      const previousCart = client.getQueryData(["cart"]);

      client.setQueriesData(["cart"], (old) => ({
        ...old,
        products: [...(old?.products || []), { ...product, quantity: 1 }],
      }));
      return { previousCart };
    },

    onError: (_, __, context) => {
      client.setQueryData(["cart"], context.previousCart);
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mx-auto container px-6 md:px-0">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-12">
            <div className="w-full flex gap-3">
              {/* four image here */}
              <div className="w-1/5 md:flex flex-col gap-3 hidden">
                <div className="bg-gray-100/40 shadow">
                  <img
                    src={product.thumbnail}
                    alt="product image"
                    className=" object-cover w-full"
                  />
                </div>
                <div className="bg-gray-100/40 shadow">
                  <img
                    src={product.thumbnail}
                    alt="product image"
                    className=" object-cover w-full"
                  />
                </div>
                <div className="bg-gray-100/40 shadow">
                  <img
                    src={product.thumbnail}
                    alt="product image"
                    className=" object-cover w-full"
                  />
                </div>
                <div className="bg-gray-100/40 shadow">
                  <img
                    src={product.thumbnail}
                    alt="product image"
                    className=" object-cover w-full"
                  />
                </div>
              </div>
              {/* main image here */}
              <div className="w-full md:w-4/5 bg-gray-100/40 shadow">
                <img
                  src={product.thumbnail}
                  alt="product image"
                  className="h-full w-full"
                />
              </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-col">
              <h2 className="font-500 font-medium text-[#3D3D3D] text-[34px] ">
                {product.title}
              </h2>
              <div className="flex items-center gap-2 py-2">
                <img src={fullStar} alt="" className="" />
                <img src={fullStar} alt="" className="" />
                <img src={fullStar} alt="" className="" />
                <img src={fullStar} alt="" className="" />
                <img src={dullStar} alt="" className="" />
                <p className="font-400 text-[16px] ">(122)</p>
              </div>
              <p className="text-[#2A2A2A] font-500 font-medium text-[32px] py-4 ">
                ${product.price}
              </p>
              <p className="text-[16px] leading-[28px] text-[#555555] ">
                A lightweight, usually knitted, pullover shirt, close-fitting
                and with a round neckline and short sleeves, worn as an
                undershirt or outer garment.
              </p>
              <div className="flex flex-col gap-6 py-6">
                <h3 className="font-600 font-semibold text-[#656565] text-[20px] ">
                  Select Size
                </h3>
                <div className="flex items-center gap-3">
                  {sizeData.map((size) => (
                    <div className="h-[61px] w-[61px] flex items-center justify-center active:border-3px active:border-[#FF8551] border border-[#EBEBEB] text-[16px] cursor-pointer hover:border-[#FF8551] ">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-6">
                <div
                  onClick={() => {
                    mutation.mutate(product);

                    setTimeout(() => {
                      toast.success("product added to cart successfully");
                    }, 500);
                  }}
                  className="bg-[#1D1D1D] text-white font-600 font-semibold text-[16px] flex items-center justify-center w-[204px] h-[59px] "
                >
                  ADD TO CART
                </div>
              </div>
              <div className="flex flex-col gap-4 py-6 border-t border-gray-300">
                <p className="text-[#555555] text-[16px] leading-[28px] ">
                  100% Original product.
                </p>
                <p className="text-[#555555] text-[16px] leading-[28px] ">
                  Cash on delivery is available on this product.
                </p>
                <p className="text-[#555555] text-[16px] leading-[28px] ">
                  Easy return and exchange policy within 7 days.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Review and Description */}
        <div className="py-24">
          <div className="flex items-center ">
            <div className="p-8 font-700 text-[16px] text-[#393939] font-semibold flex items-center justify-center border border-[#D0D0D0] w-[171px] h-[70px] ">
              Description
            </div>
            <div className="p-8 font-700 text-[16px] text-[#898989] font-semibold flex items-center justify-center bg-gray-100/30 border border-[#D0D0D0] w-[171px] h-[70px] ">
              Reviews (122)
            </div>
          </div>
          <div className="w-full border border-[#D0D0D0] py-12 px-10 flex flex-col gap-4 ">
            <p className="text-[#555555] text-[16px] ">
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p className="text-[#555555] text-[16px] ">
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-[#343434] font-600 font-semibold text-[28px] uppercase flex items-center md:text-[35px] text-center ">
              <span className="text-[#707070] mr-2">Related </span> Products
              <span className='before:content-[""] before:h-[3px] before:w-[40px] before:bg-[#252525] before:block ml-2'></span>
            </h1>
            <p className="text-center text-[#868686] text-[14px] md:text-[18px] ">
              Lorem Ipsum, is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>
          {/* Related product */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8 space-y-10">
            {cartData.slice(31, 36).map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                key={index}
                className="flex flex-col cursor-pointer gap-2 transform hover:scale-105 duration-500 transition hover:shadow-lg rounded-md"
              >
                <div className=" ">
                  <img
                    src={item.thumbnail}
                    alt="product image"
                    className="md:h-[300px] w-full"
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
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
