import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
    return (
        <div className='w-[100vw] bg-[url("/images/sponsorsBg.png")] text-white p-10'>
            {/* <h3 className='font-black text-4xl text-center pb-10'>Our Associates</h3> */}
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col md:flex-row justify-evenly gap-5'>
                    <div className='flex items-center flex-col gap-2'>
                            <p className='text-center font-medium text-xl'>In Association with</p>
                        <Image src={'/images/associates/IDES.jpg'} className='rounded-md' width={220} height={100} alt='ides' />
                    </div>

                    <div className='flex items-center flex-col gap-2'>
                            <p className='text-center font-medium text-xl'>Proceedings Published by</p>
                        <Image src={'/images/associates/Grenze.jpg'} className='rounded-md' width={230} height={100} alt='grenze' />
                    </div>

                    <div className='flex items-center flex-col gap-2'>
                            <p className='text-center font-medium text-xl'>Indexed by</p>
                        <Image src={'/images/associates/Scopus.jpg'} className='rounded-md' width={250} height={100} alt='scopus' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
