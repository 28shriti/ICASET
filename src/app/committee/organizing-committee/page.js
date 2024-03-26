import ConvenorCard from '@/app/components/ConvenorCard'

const OrganizingCommittee = () => {
    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 pb-10">
            <div style={{display: "none"}} id="convenors"></div> {/* Anchor */}

            <div className='flex flex-row justify-center items-center'>
                <div className='bg-white h-[1px] w-[30%]'></div>
                <h1 id="convenors" className="title font-black text-4xl text-center my-14 mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Convenors</h1>
                <div className='bg-white h-[1px] w-[30%]'></div>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5 flex-col sm:flex-row sm:h-auto h-screen'>
                <ConvenorCard img={'/images/rakhimamimg.jpeg'} name={'Rakhi D. Wajgi'} des={'Head'} dep={'Computer Technology'} />
                <ConvenorCard img={'/images/lalitSirImg.jpeg'} name={'Lalit Damahe'} des={'Head'} dep={'Computer Science and Engineering'} />
            </div>

            <div style={{display: "none"}} id="organizing-secretary"></div> {/* Anchor */}

            <div className='flex flex-row justify-center items-center'>
                <div className='bg-white h-[1px] w-[30%]'></div>
                <h1 id="organizing-secretary" className="title font-black text-4xl text-center my-14 mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Organizing Secretary</h1>
                <div className='bg-white h-[1px] w-[30%]'></div>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5 flex-col sm:flex-row sm:h-auto h-screen'>
                <ConvenorCard img={'/images/thakurSirImg.png'} name={'Nileshsingh V. Thakur'} des={'Professor'} dep={'Computer Science and Engineering'} />
                <ConvenorCard img={'/images/kavitaMamImg.jpg'} name={'Kavita R. Singh'} des={'Professor'} dep={'Computer Technology'} />
            </div>

            <div style={{display: "none"}} id="organizing-team"></div> {/* Anchor */}

            <div className='flex flex-row justify-center items-center'>
                <div className='bg-white h-[1px] w-[30%]'></div>
                <h1 id="organizing-team" className="title font-black text-4xl text-center my-14 mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Organizing Team</h1>
                <div className='bg-white h-[1px] w-[30%]'></div>
            </div>

            <div className='flex w-screen justify-evenly items-center my-5 flex-col sm:flex-row sm:h-auto h-screen'>
                <ConvenorCard img={'/images/Nikhilsir.jpeg'} name={'Nikhil Mangrulkar'} des={'Professor'} dep={'Computer Technology'} />
                <ConvenorCard img={'/images/priyanka_mam.jpg'} name={'Priyanka More'} des={'Professor'} dep={'Computer Science and Engineering'} />
            </div>
        </div>
    )
}

export default OrganizingCommittee