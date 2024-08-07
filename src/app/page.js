import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import data from "./data";
import Notice from "./components/Notice";
import dynamic from "next/dynamic"
import Sponsors from "./components/Sponsors";
import MainContainer from "./components/MainContainer";

const CustomCarousel = dynamic(() => import("./components/CustomCarousel"));


const Home = () => {
  return (
    <MainContainer>
      <div className="pb-10">
        <Notice />
        <div className="flex flex-col md:flex-row w-full justify-between p-5 md:p-10 mt-0 gap-5">
          <div className="w-full md:w-1/2 flex flex-col h-auto md:h-[50vh] text-center p-3 md:p-10 rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white">
            <h2 className="text-center text-lg font-bold mb-5">
              International Conference on Applications of Science, Engineering
              and Technology - 2025
            </h2>
            <p style={{ margin: "2px 0" }}>
              Jointly Organized by:
            </p>
            <p>
              Computer Technology
            </p>
            <p>
              and
            </p>
            <p>
              Computer
              Science & Engineering
            </p>
            <p>
              Yeshwantrao Chavan College of Engineering, Hingna, Nagpur,
              Maharashtra, India and IDES
            </p>

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
            <a href="/papersubmission">Paper Submission</a>
          </Button>
          <Button className="text-white bg-[#31363F] hover:bg-[#222831]">
            <a href="/registration">Registration</a>
          </Button>
          <Button className="text-white bg-[#31363F] hover:bg-[#222831]">
            <a href="/downloads">Downloads</a>
          </Button>
        </div>

        <div className="w-full bg-white justify-between flex mt-10 -mb-10">
          <Sponsors />
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
