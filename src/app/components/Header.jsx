"use client";

import React from "react";
import Image from "next/image";
// import icasetLogo from "../icaset_logo.png";
import { AppProgressBar } from "next-nprogress-bar";

const Header = () => {
  return (
    <div className="bg-[#31363F] text-white w-full m-0 p-3 lg:py-[1rem] lg:px-[3rem] flex justify-between items-center">
      <AppProgressBar color="white"/>
      <Image src={'/images/icaset_logo.png'} width={300} height={150} alt="icaset_Logo" className=" hidden md:block mix-blend-screen object-cover object-center" />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:mx-5 lg:mx-10 my-[1rem]" style={{ fontFamily: "Times New Roman" }} >
        International Conference on Application of Science, Engineering and
        Technology - 2024
      </h1>
      <Image src={'/images/ycceLogoNew.png'} alt="ycce_Logo" className="hidden md:block" height={150} width={250}/>
    </div>
  );
};

export default Header;
