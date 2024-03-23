import Image from 'next/image'

const ConveyerCard = (props) => {
    return (
        <div className='bg-[#31363F] pb-3 pt-10 px-3  shadow-white w-[270px] text-center hover:scale-[1.05] cursor-pointer h-[300px]' style={{boxShadow: '5px 5px 15px black', transition: 'all 0.4s'}}>
            <div className='flex justify-center items-center'>
                <Image src={props.img} height={125} width={125} alt='rakhi-mam-img' className='rounded-full border-white border-2' />
                {/* <Image src={props.img} height={170} width={170} alt='rakhi-mam-img' style={{borderRadius: '50%'}} /> */}
            </div>
            <div className='p-2 px-0 flex flex-col justify-center items-center pt-3'>
                <h3 className='font-black text-white mb-1'>{props.name}</h3>
                <h4 className='font-medium text-opacity-[0.6] text-white'>{props.des}</h4>
                <h4 className='font-medium text-opacity-[0.6] text-white'>{props.dep}</h4>
            </div>
        </div>
    )
}

export default ConveyerCard