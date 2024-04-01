import { internationalTechProgramCommittee } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"

const page = () => {

    const board = Array.from(internationalTechProgramCommittee).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">International Technical Program Committee</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-screen p-10 gap-5">
                {board.map((value, key)=> {
                    return <BoardMember key={key} name={value.name} designation={value.designation} img={value.image} />
                })}

            </div>
        </div>
    )
}

export default page