import Patrons from "./Patrons"
import { aboutYCCE } from "@/app/data"
import Image from "next/image"
import MainContainer from "@/app/components/MainContainer"

export default function YCCE() {
    return (
        <MainContainer>
            <>
                <div className=" backdrop-blur-md w-full p-2 sm:p-10 backdrop-contrast-50">
                    <div className=" bg-white p-10 bg-opacity-80 mb-10 rounded-3xl">
                        <h1 className=" flex justify-center font-bold pb-10 text-5xl text-[#333]">About YCCE</h1>
                        <div className="flex flex-col items-center lg:items-start lg:flex-row-reverse gap-5 pb-5">
                            <Image src="/images/background.jpg" alt="/" width={550} height={70} className=" flex -left-12 rounded-2xl" />
                            <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg">{aboutYCCE}</p>
                        </div>
                    </div>

                    <Patrons />
                </div>
            </>
        </MainContainer>
    )
}