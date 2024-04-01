import React from "react";
import { chiefPatrons, ourVisionary, patrons } from "@/app/data";
import ProfileGrid from "@/app/components/ProfileGrid";
import BoardVertical from "@/app/components/BoardVertical";

function Patrons() {
  return (
    <div id="patrons">
      <div className="flex-column mx-auto w-full rounded-lg sm:px-10 py-4 self-center bg-opacity-60 h-auto overflow-y-auto no-scrollbar">
        <div className="flex flex-row justify-center items-center">
          <div className="bg-white h-[1px] w-[30%] hidden sm:inline"></div>
          <h1 className="title font-black text-4xl text-center md:my-14 mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">
            Our Visionary
          </h1>
          <div className="bg-white h-[1px] w-[30%] hidden sm:inline"></div>
        </div>
        {/* <div className='flex flex-row flex-wrap justify-center gap-x-5 gap-y-5'>
                    {ourVisionary.map((val, index) => {

                        return (
                            <div className='w-full sm:w-[30rem]' key={index}>
                                <BoardMember img={val.image} name={val.name} designation={val.designation} />
                            </div>
                        )
                    })}
                </div> */}
        <div className="flex flex-wrap gap-3 md:gap-5 margin-auto w-full justify-center p-2 pt-5 md:p-5">
          <BoardVertical
            name={ourVisionary[0].name}
            img={ourVisionary[0].img}
            designation={ourVisionary[0].designation}
          />
        </div>
      </div>
      <div className="flex-column mx-auto w-full rounded-lg sm:px-10 py-4 self-center bg-opacity-60 h-auto overflow-y-auto no-scrollbar">
        <div className="flex flex-row justify-center items-center">
          <div className="bg-white h-[1px] w-[30%] hidden sm:inline"></div>
          <h1 className="title font-black text-4xl text-center md:my-14 mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">
            Chief Patrons
          </h1>
          <div className="bg-white h-[1px] w-[30%] hidden sm:inline"></div>
        </div>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-x-5 gap-y-5 px-3 md:px-5 lg:px-20'>
                    {chiefPatrons.map((val, index) => {

                        return (<BoardMember key={index} img={val.image} name={val.name} designation={val.designation} />)
                    })}
                </div> */}
        <ProfileGrid data={chiefPatrons} hybrid />
      </div>
      <div className="flex-column mx-auto w-full rounded-lg sm:px-10 py-4 self-center bg-opacity-60 h-auto overflow-y-auto no-scrollbar">
        <div className="flex flex-row justify-center items-center">
          <div className="bg-white h-[1px] w-[30%] hidden sm:inline"></div>
          <h1 className="title font-black text-4xl text-center md:my-14 mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">
            Patrons
          </h1>
          <div className="bg-white h-[1px] w-[30%] hidden sm:inline"></div>
        </div>
        {/* <div className='flex flex-row flex-wrap justify-center gap-x-5 gap-y-5'>
                    {patrons.map((val, index) => {

                        return (
                            <div className='w-[30rem]' key={index}>
                                <BoardMember img={val.image} name={val.name} designation={val.designation} />
                            </div>
                        )
                    })}
                </div> */}
        <ProfileGrid data={patrons} hybrid />
      </div>
    </div>
  );
}

export default Patrons;

