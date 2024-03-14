import Image from 'next/image'

const ConveyerCard = (props) => {
    return (
        <div className='rounded-lg bg-white bg-opacity-80 pb-3 pt-5 px-3  shadow-white w-[270px] text-center hover:scale-[1.05]' style={{boxShadow: '5px 5px 15px black', transition: 'all 0.4s'}}>
            <div className='flex justify-center items-center'>
                <Image src={props.img} height={170} width={170} alt='rakhi-mam-img' className='rounded-full ' />
                {/* <Image src={props.img} height={170} width={170} alt='rakhi-mam-img' style={{borderRadius: '50%'}} /> */}
            </div>
            <div className='p-2 px-0 flex flex-col justify-center items-center pt-3'>
                <h3 className='font-black text-[#31363F]'>{props.name}</h3>
                <h4 className='font-semibold text-[#5d6778]'>{props.des}</h4>
            </div>
        </div>
    )
}

export default ConveyerCard