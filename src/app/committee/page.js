import { generalChair } from "@/app/data"
import { internationalPublicityChair } from "@/app/data"
import { nationalPublicityChair } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"
import Title from "@/app/components/Title";
import MainContainer from "@/app/components/MainContainer";

const page = () => {

    const general = Array.from(generalChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const internationPublicity = Array.from(internationalPublicityChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const nationalPublicity = Array.from(nationalPublicityChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
                <Title>Technical Program Chairs</Title>

                <div style={{ display: "hidden" }} id="generalChairs"></div> {/* Anchor */}
                <Title>General Chairs</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                    {general.map((value, index) => {
                        return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                    })}
                </div>

                <div style={{ display: "hidden" }} id="ipc"></div> {/* Anchor */}
                <Title>International Publicity Chairs</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                    {internationPublicity.map((value, index) => {
                        return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                    })}
                </div>

                <div style={{ display: "hidden" }} id="npc"></div> {/* Anchor */}
                <Title>National Publicity Chairs</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                    {nationalPublicity.map((value, index) => {
                        return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                    })}
                </div>

                <div style={{ display: "hidden" }} id="financeChairs"></div> {/* Anchor */}
                <Title>Finance Chairs</Title>

                <div style={{ display: "hidden" }} id="publicationChairs"></div> {/* Anchor */}
                <Title>Publication Chairs</Title>

            </div>
        </MainContainer>

    )
}

export default page