import Link from "next/link"

export default function HotelCard() {
    return (
        <div className='bg-[#31363F] h-[130px] w-[300px] my-5 rounded-lg bg-opacity-80 p-[20px] shadow-white  hover:scale-[1.05]'>
            <h1 className='font-black text-white text-[20px]'>Famous Hotels :</h1>
            <div className='text-white'>
                Discover luxury and comfort at its finest...<section className="text-blue-400">more</section>
            </div>
        </div>
    )
}
