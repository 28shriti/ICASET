import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import data from "./data"
import Notice from "./components/Notice";

const Home = () => {
  return (
    <div className="pb-10">
      <Notice />
      <div className="flex w-full justify-between p-10 mt-0">
        <div className="w-1/2 flex flex-col h-[50vh] p-10 rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white mr-5">
          <h2 className="text-center text-lg font-bold mb-5">
            International Conference on Application of Science, Engineering and
            Technology
          </h2>
          <p style={{ margin: "2px 0" }}>
            Organized by: Computer Technology and Computer Science and
            Engineering
          </p>
          <p>
            Yeshwantrao Chavan College of Engineering, Hingna, Nagpur,
            Maharashtra, India
          </p>

          <div className="mt-auto w-auto rounded-3xl flex items-center text-lg">
            <div className="text-2xl text-white"><FontAwesomeIcon icon={faCalendarDays} /></div>
            <p className="ml-3">Date: {data.conferenceDate}</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col h-[50vh] p-10 rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white no-scrollbar ml-5"></div>
      </div>

      <div className="w-full flex px-10">
        <Button className="text-white bg-[#31363F] hover:bg-[#222831] mr-3">
          Paper Submission
        </Button>
        <Button className="text-white bg-[#31363F] hover:bg-[#222831] mx-3">
          Registration
        </Button>
        <Button className="text-white bg-[#31363F] hover:bg-[#222831] mx-3">
          Downloads
        </Button>
      </div>

      <div className="w-full bg-white justify-between flex p-10 mt-10 -mb-10">
        <div>
          <p>Sponsor 1</p>
        </div>
        <div>
          <p>Sponsor 1</p>
        </div>
        <div>
          <p>Sponsor 1</p>
        </div>
        <div>
          <p>Sponsor 1</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
