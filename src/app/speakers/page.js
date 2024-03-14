import Image from "next/image"
import data from "@/app/data"

export default function KeynoteSpeakers() {
    return <div className="w-full flex flex-col items-center backdrop-blur-md">
        <h1 className="text-4xl m-10 text-center font-extrabold text-white w-fit bg-[#222831] px-5 py-3 rounded-xl bg-opacity-70">Keynote Speakers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-5 md:p-20 pt-5">
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