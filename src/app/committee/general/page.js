import { generalChair } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"
import Title from "@/app/components/Title";

const page = () => {
    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <Title>General Chairs</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                {generalChair.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.mg} name={value.name} designation={value.designation} />
                })}
            </div>
        </div>
        
    )
}

export default page