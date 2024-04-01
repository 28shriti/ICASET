import { generalChair, internationalPublicityChair, nationalPublicityChair, technicalProgramChairs, publicationChairs, digitalChairs } from "@/app/data"
import BoardMember from "@/app/components/BoardMember"
import Title from "@/app/components/Title";
import MainContainer from "@/app/components/MainContainer";
import ProfileGrid from "../components/ProfileGrid";

export const metadata = {
    title: 'Chairs',
    description: 'Know about the General Chairs, Technical Program Chairs, International Publicity Chairs, National Publicity Chairs, Publication Chairs, Digital Chairs and Finance Chairs'
}

const page = () => {

    const internationPublicity = Array.from(internationalPublicityChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const nationalPublicity = Array.from(nationalPublicityChair).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const techProgramChairs = Array.from(technicalProgramChairs).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const publication = Array.from(publicationChairs).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const digital = Array.from(digitalChairs).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">

                <Title>General Chairs</Title>
                {/* <div className='flex flex-row flex-wrap justify-center gap-5 p-10'>
                    {generalChair.map((value, index) => {
                        return (
                            <div className='w-[30rem]' key={index}>
                                <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                            </div>
                        );
                    })}
                </div> */}

                <ProfileGrid data={generalChair} vertical />

                <div style={{ display: "hidden" }} id="techProgramChairs"></div> {/* Anchor */}

                <Title>Technical Program Chairs</Title>
                <ProfileGrid data={techProgramChairs} vertical />


                <div style={{ display: "hidden" }} id="ipc"></div> {/* Anchor */}

                <Title>International Publicity Chairs</Title>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-screen p-10">
                    {internationPublicity.map((value, index) => {
                        return <BoardMember key={index} link={value.link} img={value.img} name={value.name} designation={value.designation} />
                    })}
                </div> */}
                <ProfileGrid data={internationPublicity} vertical />

                <div style={{ display: "hidden" }} id="npc"></div> {/* Anchor */}
                <Title>National Publicity Chairs</Title>
                <ProfileGrid data={nationalPublicity} vertical />

                <div style={{ display: "hidden" }} id="publicationChairs"></div> {/* Anchor */}
                <Title>Publication Chairs</Title>
                <ProfileGrid data={publication} vertical />

                <div style={{ display: "hidden" }} id="digitalChairs"></div> {/* Anchor */}
                <Title>Digital Chairs</Title>
                <ProfileGrid data={digital} vertical />

                <div style={{ display: "hidden" }} id="financeChairs"></div> {/* Anchor */}
                <Title className="hidden">Finance Chairs</Title>

            </div>
        </MainContainer>

    )
}

export default page