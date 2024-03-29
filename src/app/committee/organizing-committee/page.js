import ConvenorCard from '@/app/components/ConvenorCard'
import MainContainer from '@/app/components/MainContainer'

const OrganizingCommittee = () => {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 pb-10">
                <div style={{ display: "none" }} id="convenors"></div> {/* Anchor */}

                <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5'>
                    <div>
                        <div className='flex flex-row justify-center items-center'>
                            <h1 id="convenors" className="title font-black text-4xl text-center my-5 mx-0 md:my-14 md:mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Conveners</h1>
                        </div>
                        <div className='flex w-full justify-left md:justify-evenly gap-5 items-center flex-col sm:flex-row h-auto'>
                            <ConvenorCard img={'/images/rakhimamimg.jpeg'} name={'Rakhi D. Wajgi'} des={'Head'} dep={'Computer Technology'} />
                            <ConvenorCard img={'/images/lalitSirImg.jpeg'} name={'Lalit B. Damahe'} des={'Head'} dep={'Computer Science and Engineering'} />
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-row justify-center items-center'>
                            <h1 id="organizing-secretary" className="title font-black text-4xl text-center my-5 mx-0 md:my-14 md:mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Organizing Secretary</h1>
                        </div>
                        <div className='flex w-full justify-left md:justify-evenly gap-5 items-center flex-col sm:flex-row'>
                            <ConvenorCard img={'/images/thakurSirImg.png'} name={'Nileshsingh V. Thakur'} des={'Professor'} dep={'Computer Science and Engineering'} />
                            <ConvenorCard img={'/images/kavitaMamImg.jpg'} name={'Kavita R. Singh'} des={'Professor'} dep={'Computer Technology'} />
                        </div>
                    </div>
                </div>
                <div style={{ display: "none" }} id="organizing-secretary"></div> {/* Anchor */}



                <div style={{ display: "none" }} id="organizing-team"></div> {/* Anchor */}

                <div className='flex flex-row justify-center items-center'>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                    <h1 id="organizing-team" className="title font-black text-4xl text-center my-5 mx-0 md:my-14 md:mx-5 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Organizing Team</h1>
                    <div className='bg-white h-[1px] w-[30%]'></div>
                </div>

                <div className='flex w-screen justify-left md:justify-evenly gap-5 items-center my-5 flex-col sm:flex-row'>
                    <ConvenorCard img={'/images/Nikhilsir.jpeg'} name={'Nikhil Mangrulkar'} des={'Professor'} dep={'Computer Technology'} />
                    <ConvenorCard img={'/images/priyanka_mam.jpg'} name={'Priyanka More'} des={'Professor'} dep={'Computer Science and Engineering'} />
                </div>
            </div>
        </MainContainer>
    )
}

export default OrganizingCommittee