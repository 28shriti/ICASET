import React from "react";
import Image from "next/image";
import ycceLogo from "../ycceLogo.jpg";
import icasetLogo from "../icaset_logo.jpg";

const Header = () => {
  return (
    <div className="bg-[#31363F] text-white w-full m-0 py-[1rem] px-[3rem] flex justify-between items-center">
      <Image src={icasetLogo} alt="icaset_Logo" className="w-[120px]" />
      <h1 className="text-3xl text-center mx-[10rem] my-[1rem] font-semibold">
        International Conference on Application of Science, Engineering and
        Technology
      </h1>
      <Image src={ycceLogo} alt="ycce_Logo" className="w-[150px]" />
    </div>
  );
};

export default Header;
