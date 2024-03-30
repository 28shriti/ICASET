import { internationalAdvisoryBoard } from "@/app/data"
import { nationalAdvisoryBoard } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"
import BoardVertical from "@/app/components/BoardVertical"
import Title from "../components/Title";
import MainContainer from "../components/MainContainer";

export const metadata = {
    title: 'Advisory Board',
    description: 'Know the esteemed members of the National and International Advisory Board',
}

const page = () => {

    const iab = Array.from(internationalAdvisoryBoard).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const nab = Array.from(nationalAdvisoryBoard).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
                <Title>International Advisory Board</Title>
                <div className="flex flex-wrap gap-5 margin-auto w-full justify-center items-center pt-5 md:hidden">
                {iab.map((value, key) => {
                        return <BoardMember key={key} link={value.link} name={value.name} designation={value.designation} country={value.country} img={value.img} />
                    })}
                </div>
                <div className="flex-wrap gap-5 margin-auto w-full justify-center items-center pt-5 hidden md:flex">
                    {iab.map((value, key) => {
                        return <BoardVertical key={key} link={value.link} name={value.name} designation={value.designation} country={value.country} img={value.img} />
                    })}

                </div>

                <div style={{ display: "none" }} id="nab"></div> {/* Anchor */}
            <Title>National Advisory Board</Title>
            <div className="flex flex-wrap gap-5 margin-auto w-full justify-center items-center pt-5 pb-5 md:hidden">
                {nab.map((value, index) => {
                    return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} country={value.country} />
                })}
            </div>
            <div className="flex-wrap gap-5 margin-auto w-full justify-center items-center pt-5 pb-5 hidden md:flex">
                {nab.map((value, index) => {
                    return <BoardVertical key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} country={value.country} />
                })}
            </div>
        </div>
        </MainContainer>
    )
}

export default page