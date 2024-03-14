import Image from "next/image"
import Link from "next/link"

const BoardMember = (props) => {
    return (
        <Link href={props.link} className="h-full w-full">
            <div className="bg-white flex items-center gap-5 rounded-2xl hover:scale-[1.05] p-5 h-full w-full" style={{transition: 'all 0.4s'}}>
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