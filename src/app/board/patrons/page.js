import React from 'react'
import Image from "next/image"
// import rakhimam from "../../../../public/images/rakhimamimg.jpeg"

const patrons = [
    {
        image: "kdk",
        name: "kfjdk",
        designation: "jfhjdkn"
    },
    {
        image: "kdk",
        name: "kfjdk",
        designation: "jfhjdkn"
    },
    {
        image: "kdk",
        name: "kfjdk",
        designation: "jfhjdkn"
    },
    {
        image: "kdk",
        name: "kfjdk",
        designation: "jfhjdkn"
    },
]

function page() {
    return (
        <main className={`bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-cover shadow-[inset_0_0_0_1000px_#00000000] py-10`}>
            <div className="flex-column mx-auto w-4/12  rounded-lg py-3  self-center bg-opacity-50 backdrop-blur-sm backdrop-contrast-50">
                <h1 className="text-white text-center text-4xl font-light">Patrons</h1>
                {patrons.map((val, index) => {

                    return (<div className="bg-blue-300 gap-10 py-2 transparent items-center flex flex-row m-10  rounded-full ">
                        <div >
                            <Image src={'/images/rakhimamimg.jpeg'} width={60} height={60} className="mx-3 rounded-full"/>
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
        </main>
    )
}

export default page