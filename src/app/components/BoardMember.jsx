import Image from "next/image"
import Link from "next/link"
import '@/app/styles/boardMemberCard.css'

const BoardMember = (props) => {
    return (
        <Link href={props.link}>
            <div className="mainDiv bg-white flex items-center gap-5 rounded-full pr-5 backdrop-blur-sm backdrop-contrast-50 hover:scale-[1.05] pl-5 h-[20vh] w-[25vw]" style={{transition: 'all 0.4s'}}>
                <Image src={props.img} height={100} width={100} alt="img" className="rounded-full" />
                <div>
                    <h1 className='font-extrabold'>{props.name}</h1>
                    <p className='font-medium text-opacity-5'>{props.designation}</p>
                </div>
            </div>
        </Link>
    )
}

export default BoardMember