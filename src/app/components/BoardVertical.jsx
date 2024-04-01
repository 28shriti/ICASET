import Image from 'next/image'
import Link from 'next/link'

const BoardVertical = (props) => {
    return (
        <Link href={props["link"] != undefined ? props.link : "#"} target={props["link"] != undefined ? "_blank" : "_self"}>
            <div className='bg-[#31363F] bg-opacity-70 pb-3 pt-10 px-3 rounded-2xl shadow-white w-[270px] h-[321px] text-center hover:scale-[1.05] cursor-pointer' style={{ transition: 'all 0.4s' }}>
                <div className='flex justify-center items-center'>
                    <Image src={props.img} height={321} width={125} alt='rakhi-mam-img' className='rounded-full border-white border-2 w-[125px] h-[125px]' />
                    {/* <Image src={props.img} height={170} width={170} alt='rakhi-mam-img' style={{borderRadius: '50%'}} /> */}
                </div>
                <div className='p-2 px-0 flex flex-col justify-center items-center pt-3'>
                    <h3 className='font-black text-white mb-1'>{props.name}</h3>
                    <h4 className='font-medium text-opacity-[0.6] text-white'>{props.designation}</h4>
                    <h4 className='font-medium text-opacity-[0.6] text-white'>{props.country}</h4>
                </div>
            </div>
        </Link>
    )
}

export default BoardVertical