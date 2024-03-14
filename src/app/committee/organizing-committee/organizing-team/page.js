import ConveyerCard from "@/app/components/ConveyerCard"
import '@/app/committee/organizing-committee/conveyors/conveyor.css'

const page = () => {
  return (
    <div className="overflow-x-hidden pb- bg-[#222831]">
            <div className='flex justify-center items-center py-5'>
                <h1 className='title font-black text-4xl text-white'>Organizing Team</h1>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5 flex-col sm:flex-row sm:h-auto h-screen'>
                <ConveyerCard img={'/images/Nikhilsir.jpeg'} name={'Nikhil Mangrulkar'} des={'Professor'} dep={'Computer Technology'} />
                <ConveyerCard img={'/images/priyanka_mam.jpg'} name={'Priyanka More'} des={'Professor'} dep={'Computer Science and Engineering'} />
            </div>
        </div>
    )
}

export default page