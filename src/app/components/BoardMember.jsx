import Image from "next/image"
import Link from "next/link"
import '@/app/styles/boardMemberCard.css'

const BoardMember = (props) => {
    return (
        <Link href={props.link} className="h-full w-full text-white">
            <div className="bg-[#31363F] bg-opacity-70 flex items-center gap-5 rounded-2xl hover:scale-[1.05] p-5 h-full w-full" style={{transition: 'all 0.4s'}}>
                <Image src={props.img} height={500} width={500} alt="img" className="rounded-full w-[100px] h-[100px]" />
                <div>
                    <h1 className='font-extrabold'>{props.name}</h1>
                    <p className='font-medium text-opacity-5'>{props.designation}</p>
                </div>
            </div>
        </Link>
    )
}

export default BoardMember