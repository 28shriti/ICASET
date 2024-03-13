"use client";

import React from "react";
import Image from "next/image";
import icasetLogo from "../icaset_logo.jpg";
import { AppProgressBar } from "next-nprogress-bar";

const Header = () => {
  return (
    <div className="bg-[#31363F] text-white w-full m-0 py-[1rem] px-[3rem] flex justify-between items-center">
      <AppProgressBar color="white"/>
      <Image src={icasetLogo} alt="icaset_Logo" className="w-[120px]" />
      <h1 className="text-3xl font-bold text-center mx-[10rem] my-[1rem]">
        International Conference on Application of Science, Engineering and
        Technology
      </h1>
      <Image src={'/images/ycceLogoNew.png'} alt="ycce_Logo" height={100} width={150}/>
    </div>
  );
};

export default Header;
