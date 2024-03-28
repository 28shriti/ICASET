
import { internationalPublicityChair } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"

const page = () => {

    const board = Array.from(internationalPublicityChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">International Publicity Chairs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                {board.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.img} name={value.name} country={value.country} designation={value.designation} />
                })}
            </div>

            <div className="w-auto flex justify-center" id="npc">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">National Publicity Chairs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                {board.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                })}
            </div>
        </div>
    )
}

export default page