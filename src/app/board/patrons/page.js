import React from 'react'
import Image from "next/image"
import { chiefPatrons, ourVisionary, patrons } from "@/app/data"
import BoardMember from '@/app/components/BoardMember'

function page() {
    return (
        <div className='py-20 backdrop-blur-lg bg-[#31363f]'>
            <div className="flex-column mx-auto w-full rounded-lg px-10 py-4 self-center bg-opacity-60 h-auto overflow-y-auto no-scrollbar">
                <div className='flex flex-row justify-center items-center mb-[50px]'>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                    <h1 className="text-white text-center text-4xl font-extrabold mx-5">Our Visionary</h1>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                </div>
                <div className='flex flex-row flex-wrap justify-center gap-x-5 gap-y-5 mb-20'>
                    {ourVisionary.map((val, index) => {

                        return (<BoardMember img={val.image} name={val.name} designation={val.designation} link={"https://www.google.com"} />)
                    })}
                </div>
            </div>
            <div className="flex-column mx-auto w-full rounded-lg px-10 py-4 self-center bg-opacity-60 h-auto overflow-y-auto no-scrollbar">
                <div className='flex flex-row justify-center items-center mb-[50px]'>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                    <h1 className="text-white text-center text-4xl font-extrabold mx-5">Chief Patrons</h1>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                </div>
                <div className='flex flex-row flex-wrap justify-center gap-x-5 gap-y-5 mb-20'>
                    {chiefPatrons.map((val, index) => {

                        return (<BoardMember img={val.image} name={val.name} designation={val.designation} link={"https://www.google.com"} />)
                    })}
                </div>
            </div>
            <div className="flex-column mx-auto w-full rounded-lg px-10 py-4 self-center bg-opacity-60 h-auto overflow-y-auto no-scrollbar">
                <div className='flex flex-row justify-center items-center mb-[50px]'>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                    <h1 className="text-white text-center text-4xl font-extrabold mx-5">Patrons</h1>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                </div>
                <div className='flex flex-row flex-wrap justify-center gap-x-5 gap-y-5'>
                    {patrons.map((val, index) => {

                        return (<BoardMember key={index} img={val.image} name={val.name} designation={val.designation} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default page