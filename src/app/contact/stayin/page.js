import Image from "next/image";
import { stayIns } from "@/app/data";

export default function StayIn() {

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50" >
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Popular places</h1>
            </div>

            <div className="flex flex-col items-center px-5 sm:px-24 md:px-40 py-10 gap-10">
                {stayIns.map((place, index) => {
                    return (
                        <div key={index} className={`w-full flex flex-col md:flex-row bg-[#31363F] bg-opacity-70 rounded-2xl shadow-md shadow-black items-center lg:items-start ${index % 2 != 0 && "md:flex-row-reverse"}`}>
                            <Image src={place.image} width={1000} height={1000} className={`object-cover object-center w-full md:w-1/3 min-w-[100px] md:min-w-[300px] rounded-2xl ${index % 2 != 0 ? "md:rounded-l-none" : "md:rounded-r-none"}`} alt="place to stay in" />
                            <div className="p-10 text-white">
                                <h2 className="font-bold text-xl pb-2">{index + 1}. {place.name}</h2>
                                <p>{place.description}</p>
                            </div>
                        </div>
                );
                })}
            </div>
        </div >
    );
}