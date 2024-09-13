import React from "react";
import Image from "next/image";
import ProgressBar   from "./ProgressBar";

const Header = () => {
  return (<>
    <div className="hidden md:flex bg-[#31363F] text-white w-full m-0 p-3 lg:px-[3rem] justify-between items-center">
      <ProgressBar />
      <Image src={'/images/act_logo.png'} width={100} height={100} alt="act_Logo" className=" hidden md:block  object-cover object-center" />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:mx-5 lg:mx-10 my-[1rem]" style={{ fontFamily: "Times New Roman" }} >
        International Conference on Advances in Computing Control and Telecommunication Technologies, ACT-2025 (Phase I)
      </h1>
      <Image src={'/images/YCCElogo-removebg-preview.png'} alt="ycce_Logo" className="hidden md:block mix-blend-screen object-cover object-center" height={150} width={230} />
    </div>

    <div className="md:hidden flex flex-col bg-[#31363F] text-white w-full m-0 p-3 lg:px-[3rem] justify-between items-center">
      <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-center md:mx-5 lg:mx-10 my-[1rem]" style={{ fontFamily: "Times New Roman" }} >
      International Conference on Advances in Computing Control and Telecommunication Technologies, ACT-2025 (Phase I)
      </h1>
      <div className="grid grid-cols-2 gap-3 items-center justify-center">
        <Image src={'/images/act_logo.png'} width={100} height={100} alt="act_Logo" className="mix-blend-screen object-contain object-center" />
        <Image src={'/images/YCCElogo-removebg-preview.png'} alt="ycce_Logo" className="mix-blend-screen object-contain object-center w-[10rem] h-full m-auto" height={150} width={230} />
      </div>
    </div>

  </>
  );
};

export default Header;
