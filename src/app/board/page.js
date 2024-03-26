import { internationalAdvisoryBoard } from "@/app/data"
import { nationalAdvisoryBoard } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"

const page = () => {

    const iab = Array.from(internationalAdvisoryBoard).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

      const nab = Array.from(nationalAdvisoryBoard).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">International Advisory Board</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-screen p-10 gap-5">
                {iab.map((value, key)=> {
                    return <BoardMember key={key} link={value.link} name={value.name} designation={value.designation} country={value.country} img={value.img} />
                })}

            </div>

            <div style={{display: "none"}} id="nab"></div> {/* Anchor */}

            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">National Advisory Board</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                {nab.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                })}
            </div>
        </div>
    )
}

export default page