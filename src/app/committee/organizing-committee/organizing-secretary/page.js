import ConveyerCard from "@/app/components/ConveyerCard"
import '@/app/committee/organizing-committee/conveyors/conveyor.css'

const page = () => {
  return (
        <div className="overflow-x-hidden pb-10 backdrop-blur-sm">
            <div className='flex justify-center items-center py-5'>
                <h1 className='title font-black text-white text-4xl'>Organizing Secretary</h1>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5'>
                <ConveyerCard img={'/images/thakurSirImg.jpg'} name={'Dr. NileshSingh V. Thakur'} des={'Senior Professor'} />
                <ConveyerCard img={'/images/kavitaMamImg.jpg'} name={'Kavita Singh'} des={'Senior Professor'} />
            </div>
        </div>
  )
}

export default page