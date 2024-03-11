import Image from 'next/image'

const ConveyerCard = (props) => {
    return (
        <div className='rounded-lg bg-[#31363F] pb-3'>
            <div className='flex justify-center items-center'>
                <Image src={props.img} height={210} width={230} alt='rakhi-mam-img' />
            </div>
            <div className='p-2 px-0 flex flex-col justify-center items-center pt-3'>
                <h3 className='font-black text-white'>{props.name}</h3>
                <h4 className='font-semibold text-white'>{props.des}</h4>
            </div>
        </div>
    )
}

export default ConveyerCard