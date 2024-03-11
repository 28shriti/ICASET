import ConveyerCard from "@/app/components/ConveyerCard"

const page = () => {
  return (
    <div className="overflow-x-hidden mb-10">
            <div className='flex justify-center items-center py-5'>
                <h1 className='font-black text-2xl'>Organizing Team</h1>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5'>
                <ConveyerCard img={'/images/rakhimamimg.jpeg'} name={'Rakhi D. Wajgi'} des={'HOD, Computer Technology'} />
                <ConveyerCard img={'/images/rakhimamimg.jpeg'} name={'Rakhi D. Wajgi'} des={'HOD, Computer Technology'} />
            </div>
        </div>
    )
}

export default page