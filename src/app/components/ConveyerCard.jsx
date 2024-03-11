import Image from 'next/image'

const ConveyerCard = () => {
    return (
        <div className='rounded-lg bg-[#31363F] pb-3'>
            <div className='flex justify-center items-center'>
                <Image src={'/images/rakhimamimg.jpeg'} height={210} width={230} alt='rakhi-mam-img' />
            </div>
            <div className='p-2 px-0 flex flex-col justify-center items-center pt-3'>
                <h3 className='font-black text-white'>Rakhi D. Wajgi</h3>
                <h4 className='font-semibold text-white'>HOD Computer Technology</h4>
            </div>
        </div>
    )
}

export default ConveyerCard