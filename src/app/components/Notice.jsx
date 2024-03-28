import data from "@/app/data"

export default function Notice() {
    return <marquee className="text-white font-bold font-mono text-lg p-2 mb-0 bg-[#222831] bg-opacity-60 backdrop-blur-md">
        <p>Notice: {data.notice}</p>
    </marquee>;
}