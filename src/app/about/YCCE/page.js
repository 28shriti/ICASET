import { aboutYCCE } from "@/app/data"
import Image from "next/image"
export default function YCCE() {
    return (
        <>
            <div className=" backdrop-blur-sm w-full p-10">
                <div className=" bg-white p-10 bg-opacity-80 mb-10 rounded-3xl">
                    <h1 className=" flex justify-center font-bold pb-10 text-5xl text-[#333]">About YCCE</h1>
                    <div className="flex gap-5 pb-5">
                        <p >{aboutYCCE[0]}</p>
                        <Image src="/images/background.jpg" alt="/" width={550} height={70} className=" flex -left-12 rounded-2xl" />
                    </div>
                    <p>{aboutYCCE[1]}</p>
                </div>
            </div>
        </>
    )
}