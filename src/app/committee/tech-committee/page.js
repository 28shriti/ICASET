import { internationalTechProgramCommittee } from "@/app/data"
import { nationalTechProgramCommittee } from "@/app/data"
import MainContainer from "@/app/components/MainContainer";
import ProfileGrid from "@/app/components/ProfileGrid";
import Title from "@/app/components/Title";

export const metadata = {
    title: 'Technical Program Committee',
    description: 'Know about the International and National Program Committee members'
}

const page = () => {

    const itpc = Array.from(internationalTechProgramCommittee).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const ntpc = Array.from(nationalTechProgramCommittee).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
                <Title>Technical Program Committee</Title>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-screen p-10 gap-5">
                    {itpc.map((value, key) => {
                        return <BoardMember key={key} name={value.name} designation={value.designation} img={value.image} />
                    })}

                </div> */}
                <Title>International</Title>
                <ProfileGrid data={itpc} hybrid />

                <div style={{ display: "none" }} id="ntpc"></div> {/* Anchor */}

                <Title>National</Title>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-screen p-10 gap-5">
                    {ntpc.map((value, key) => {
                        return <BoardMember key={key} name={value.name} designation={value.designation} img={value.image} />
                    })}

                </div> */}
                <ProfileGrid data={ntpc} hybrid />
            </div>
        </MainContainer>
    )
}

export default page