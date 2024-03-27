import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
    return (
        <div className='w-[100vw] bg-[url("/images/sponsorsBg.png")] text-white p-10'>
            <h3 className='font-black text-4xl text-center pb-10'>Our Associates</h3>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col md:flex-row justify-evenly gap-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-center font-medium'>Sponsors</p>
                        <div className='flex flex-col md:flex-row gap-10 items-center'>
                            <Image src={'/images/sponsors/EliteGlobalPvtLtd.jpeg'} width={300} height={90} alt='sponsor' />
                            <Image src={'/images/sponsors/JankiElectromac.jpeg'} width={100} height={100} alt='sponsor' />
                        </div>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <div>
                            <p className='text-center font-medium'>Media Partner</p>
                        </div>
                        <Image src={'/images/sponsors/Lokmat.png'} width={200} height={100} alt='sponsor' />
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-10'>
                    <p className='text-center font-medium'>Technically Co-sponsored by</p>
                    <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
                        <Image src={'/images/sponsors/YashEarthingPune.jpeg'} width={100} height={100} alt='sponsor' />
                        <Image src={'/images/sponsors/SkywingsTechnology.png'} width={150} height={100} alt='sponsor' />
                        <Image src={'/images/sponsors/6SimplexPvtLtd.jpg'} width={200} height={50} alt='sponsor' />
                        <Image src={'/images/sponsors/CryptoForensicTechnology.jpg'} width={200} height={100} alt='sponsor' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors