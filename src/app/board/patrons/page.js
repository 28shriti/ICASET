import React from 'react'
import Image from "next/image"
import { patrons } from "@/app/data"

function page() {
    return (
        <div className='py-20'>
            <div className="flex-column mx-auto w-4/12  rounded-lg py-3 self-center bg-[#31363F] bg-opacity-60 h-[70vh] overflow-y-auto no-scrollbar">
                <h1 className="text-white text-center text-4xl font-extrabold">Patrons</h1>
                {patrons.map((val, index) => {

                    return (<div key={index} className="text-white bg-[#222831] gap-5 py-3 transparent items-center flex flex-row m-10  rounded-full ">
                        <div >
                            <Image src={`/images/${val.image}`} width={70} height={70} className="mx-3 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div >
                                <p className="">{val.name}</p>
                            </div>
                            <div >
                                <p className="font-light">{val.designation}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default page