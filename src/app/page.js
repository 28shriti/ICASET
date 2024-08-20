import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import data from "./data";
import Notice from "./components/Notice";
import dynamic from "next/dynamic"
import Sponsors from "./components/Sponsors";
import MainContainer from "./components/MainContainer";
import Associates from "./components/Associates";
import Image from "next/image";

const CustomCarousel = dynamic(() => import("./components/CustomCarousel"));


const Home = () => {
  return (
    <MainContainer>
      <div className="pb-10">
        <Notice />
        <div className="flex flex-col md:flex-row w-full justify-between p-5 md:p-10 mt-0 gap-5">
          <div className="w-full md:w-1/2 flex flex-col h-auto md:h-[50vh] text-center p-3 md:p-10 rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white">
            <h2 className="text-center text-lg font-bold mb-5">
            International Conference on Advances in Computing, Control & Telecommunication Technologies - 2025 (Phase - I)
            </h2>
            <p>
              Jointly Organized by:
            </p>
            <p>
              Department of Computer Technology &
            </p>
            {/* <p>
              and
            </p> */}
            <p>
              Department of Computer Science & Engineering
            </p>
            <p>
              Yeshwantrao Chavan College of Engineering, Hingna, Nagpur,
              Maharashtra, India
            </p>
            <p>and</p>
            <p>Institute of Doctors, Engineers and Scientist (IDES)</p>
            {/* <p className="mt-5 mb-2">
              In Association with:
            </p>
            <div className="association flex justify-center" >
            <Image src={'/images/IDES.jpg'} width={150} height={100} alt="act_Logo" className=" hidden md:block  object-cover object-center" />
            <div className="ml-10">
            <p>Insitute of Doctors, Engineers</p>
            <p>and Scientist (IDES)</p>
            </div>
            </div> */}


            <div className="mt-10 md:mt-15 w-auto rounded-3xl flex items-center justify-center md:justify-start text-lg">
              <div className="text-2xl text-white">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <p className="ml-3">Date : {data.conferenceDate}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white no-scrollbar realative flex flex-col overflow-hidden">
            <CustomCarousel />
          </div>
        </div>

        <div className="w-full flex flex-wrap px-5 md:px-10 gap-3">
          <Button className="text-white bg-[#31363F] hover:bg-[#222831]">
            <a href="/documents/grenze_template.docx">Paper Submission</a>
            {/* <a href="/papersubmission">Paper Submission</a> */}
          </Button>
          <Button className="text-white bg-[#31363F] hover:bg-[#222831]">
            <a href="/registration">Registration</a>
          </Button>
          <Button className="text-white bg-[#31363F] hover:bg-[#222831]">
            <a href="/documents/grenze_template.docx">Downloads</a>
          </Button>
        </div>

        <div className="w-full bg-white justify-between mt-10 -mb-10">
          <Associates />
          <Sponsors />
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
