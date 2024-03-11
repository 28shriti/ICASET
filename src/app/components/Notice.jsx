import data from "@/app/data"

export default function Notice() {
    return <marquee className="text-red-600 text-lg p-2 mb-0">
        <p>Notice: {data.notice}</p>
    </marquee>;
}