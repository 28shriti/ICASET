import ConveyerCard from '@/app/components/ConveyerCard'

const page = () => {
    return (
        <div className="overflow-x-hidden pb-10 backdrop-blur-sm">
            <div className='flex justify-center items-center py-5'>
                <h1 className='font-black text-4xl' style={{textShadowColor: 'white', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10}}>Conveyors</h1>
            </div>
            <div className='flex w-screen justify-evenly items-start my-5'>
                <ConveyerCard img={'/images/rakhimamimg.jpeg'} name={'Dr. Rakhi D. Wajgi'} des={'HOD, Computer Technology'} />
                <ConveyerCard img={'/images/lalitSirImg.jpeg'} name={'Dr. Lalit Damahe'} des={'HOD, Computer Science and Engineering'} />
            </div>
        </div>
    )
}

export default page