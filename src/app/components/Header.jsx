"use client";

import React from "react";
import Image from "next/image";
import { AppProgressBar } from "next-nprogress-bar";

const Header = () => {
  return (
    <div className="bg-[#31363F] text-white w-full m-0 p-3 lg:py-10 lg:px-[3rem] flex justify-between items-center">
      <AppProgressBar color="white" />
      <Image src={'/images/ic-aset_logo.png'} width={250} height={100} alt="icaset_Logo" className=" hidden md:block mix-blend-screen object-cover object-center" />
      <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-center sm:mt-0 mt-7 md:mx-5 lg:mx-10 my-[1rem]" style={{ fontFamily: "Times New Roman" }} >
        International Conference on Applications of Advancement in Science, Engineering and Technology - 2024
      </h1>
      <Image src={'/images/YCCElogo-removebg-preview.png'} alt="ycce_Logo" className="hidden md:block mix-blend-screen object-cover object-center" height={150} width={230} />
    </div>
  );
};

export default Header;
