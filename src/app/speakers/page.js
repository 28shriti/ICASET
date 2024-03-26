import Image from "next/image"
import data from "@/app/data"

export default function KeynoteSpeakers() {
    return <div className="w-full flex flex-col items-center backdrop-blur-md p-10">
        <h1 className="text-4xl m-10 mt-0 text-center font-extrabold text-white w-fit bg-[#222831] px-5 py-3 rounded-xl bg-opacity-70">Keynote Speakers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 md:px-20 pt-5">
            {data.keynoteSpeakers.map((speaker, index) => {
                return <div key={index} className="w-full flex flex-col bg-[#222831] rounded-xl text-white p-2">
                    <Image src={`/images/${speaker.image}`} width={500} height={500} className="rounded-lg w-full" alt="speaker image" />
                    <div className="p-5">
                        <p>{speaker.name}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
}