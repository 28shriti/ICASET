import { generalChair } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"
import Title from "@/app/components/Title";

const page = () => {

    const board = Array.from(generalChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <Title>General Chairs</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                {board.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                })}
            </div>
        </div>
    )
}

export default page