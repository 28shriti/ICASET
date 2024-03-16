import ConveyerCard from "@/app/components/ConveyerCard"
import '@/app/committee/organizing-committee/conveyors/conveyor.css'

const page = () => {
  return (
        <div className="overflow-x-hidden pb-10 bg-[#222831]">
            <div className='flex justify-center items-center py-5'>
                <h1 className='title font-black text-white text-4xl'>Organizing Secretary</h1>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5 flex-col sm:flex-row sm:h-auto h-screen'>
                <ConveyerCard img={'/images/thakurSirImg.png'} name={'Nileshsingh V. Thakur'} des={'Professor'} dep={'Computer Science and Engineering'} />
                <ConveyerCard img={'/images/kavitaMamImg.jpg'} name={'Kavita R. Singh'} des={'Professor'} dep={'Computer Technology'} />
            </div>
        </div>
  )
}

export default page