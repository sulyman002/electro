import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";

const Loading = () => {
  const loadingRef = useRef();
  useEffect(() => {
    gsap.to(loadingRef.current, {
      rotation: 360,
      duration: 4,
      ease: "bounce.out",
    });
  }, []);
  return (
    <div className="inset-0 fixed bg-black backdrop-blur-2xl h-screen w-full text-white flex items-center justify-center flex-col gap-6">
      <div
        ref={loadingRef}
        className="h-[100px] w-[100px] rounded-full border-[8px] border-t-transparent border-b-transparent border-gray-300"
      ></div>
      <p className="text-xl text-gray-300 font-bold"> Loading...</p>
    </div>
  );
};

export default Loading;
