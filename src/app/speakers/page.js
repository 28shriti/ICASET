import Image from "next/image"
import data from "@/app/data"

export default function KeynoteSpeakers() {
    return <div className="grid grid-cols-4 gap-20 p-20 backdrop-blur-md">
        {data.keynoteSpeakers.map((speaker, index) => {
            return <div key={index} className="w-full flex flex-col bg-[#222831] rounded-xl text-white p-2">
                <Image src={`/images/${speaker.image}`} width={500} height={500} className="rounded-lg w-full" alt="speaker image" />
                <div className="p-5">
                    <p>{speaker.name}</p>
                </div>
            </div>
        })}
    </div>
}