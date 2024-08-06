import { reviewProcess } from "@/app/data"
export default function Review(){
    return (
        <div className=" backdrop-blur-md w-full p-2 sm:p-10 backdrop-contrast-50">
            <div className=" bg-white p-10 bg-opacity-80 mb-10 rounded-3xl">
            <h1 className=" flex justify-center font-bold pb-10 text-4xl md:text-5xl text-[#333]">
              Review Process
            </h1>
            <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg">
                {reviewProcess.map((value,index)=>{
                    return <p className="p-2">{value}</p>
                })}
            </div>
            </div>
        </div>
    )
}