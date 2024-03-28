import { internationalAdvisoryBoard } from "@/app/data"
import { nationalAdvisoryBoard } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"
import Title from "../components/Title";

const page = () => {

    const iab = Array.from(internationalAdvisoryBoard).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

      const nab = Array.from(nationalAdvisoryBoard).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      });

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <Title>International Advisory Board</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-screen p-10 gap-5">
                {iab.map((value, key)=> {
                    return <BoardMember key={key} link={value.link} name={value.name} designation={value.designation} country={value.country} img={value.img} />
                })}

            </div>

            <div style={{display: "none"}} id="nab"></div> {/* Anchor */}

            <Title>National Advisory Board</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                {nab.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} country={value.country} />
                })}
            </div>
        </div>
    )
}

export default page