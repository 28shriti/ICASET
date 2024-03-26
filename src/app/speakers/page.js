import Image from "next/image"
import { keynoteSpeakers } from "@/app/data"

export default function KeynoteSpeakers() {
    return <div className="w-full flex flex-col items-center backdrop-blur-md p-10">
        <h1 className="text-4xl m-10 mt-0 text-center font-extrabold text-white w-fit bg-[#222831] px-5 py-3 rounded-xl bg-opacity-70">Keynote Speakers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 md:px-10 pt-5">
            {keynoteSpeakers.map((speaker, index) => {
                return (
                <div key={index} className="w-full flex flex-col bg-[#222831] bg-opacity-70 rounded-xl text-white p-3">
                    <div className="flex w-full items-center">
                        <Image src={`/images/${speaker.image}`} width={1000} height={1000} className="object-cover object-center rounded-lg w-48 h-48" alt="speaker image" />
                        <div className="p-5 w-full">
                            <p className="text-lg font-bold">{speaker.name}</p>
                            <p>{speaker.designation}</p>
                            <p>{speaker.institute}</p>
                            <p>{speaker.address}</p>
                        </div>
                    </div>

                    <div className="py-3">
                        {speaker.description}
                    </div>
                </div>
            )
            })}
        </div>
    </div>
}