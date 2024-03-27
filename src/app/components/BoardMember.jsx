import Image from "next/image"
import Link from "next/link"
import '@/app/styles/boardMemberCard.css'

const BoardMember = (props) => {
    return (
        <Link href={props["link"] !=undefined ? props.link : "#"} className="h-full w-full text-white" target={props["link"] != undefined ? "_blank" : "_self"}>
            <div className="bg-[#31363F] bg-opacity-70 flex items-center gap-5 rounded-2xl hover:scale-[1.05] p-5 h-full w-full shadow-md shadow-black" style={{transition: 'all 0.4s'}}>
                <Image src={props.img} height={500} width={500} alt="img" className="rounded-full w-[100px] h-[100px] object-center object-cover" />
                <div>
                    <h1 className='font-extrabold'>{props.name}</h1>
                    <p className='font-medium text-opacity-5 opacity-80 text-sm pt-1'>{props.designation}</p>
                    {props["country"] != undefined && (<p className='font-medium text-opacity-5 opacity-80 text-sm pt-1'>{props.country}</p>)}
                </div>
            </div>
        </Link>
    )
}

export default BoardMember