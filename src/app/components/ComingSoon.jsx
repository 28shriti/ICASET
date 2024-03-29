import ComingSoonSVG from "./coming-soon.svg"
import Image from "next/image"

export default function ComingSoon() {
    return <div className="w-full h-[40vh] md:h-[80vh] flex justify-center items-center bg-black bg-opacity-70 py-20 px-10">
        <Image src={ComingSoonSVG} alt="Coming soon" className="w-auto h-auto rounded-2xl bg-white" />
    </div>
}