import Image from "next/image"

export default function ComingSoon() {
    return <div className="w-full h-[80vh] flex justify-center items-center bg-black bg-opacity-70">
        <Image src="/images/coming-soon.png" width={500} height={500} className="bg-white rounded-3xl shadow-2xl" />
    </div>
}