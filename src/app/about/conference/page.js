import MainContainer from "@/app/components/MainContainer";
import { topics } from "@/app/data";

export const metadata = {
    title: "About Conference",
    description:
        "Get all the information about the ICASET - 2025 happening in YCCE",
};

export default function Conference() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10">
                <div className="bg-[#222831] bg-opacity-70 p-10 lg:mb-10 rounded-3xl">
                    <h1 className=" flex justify-center font-bold pb-10 text-center text-2xl md:text-5xl text-white">
                        WELCOME TO ACT-2025 (Phase I)
                    </h1>

                    <p className="text-justify text-white leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        We are happy to inform you that the International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT-2025 (Phase I), will be held during February 7-8, 2025 in Hybrid Mode at Yeshwantrao Chavan College of Engineering (YCCE) Nagpur, India.  The ACT-2025 (Phase I) is jointly organized by the Institute of Doctors Engineers and Scientists (IDES) and YCCE. On behalf of the Organizing Committee of ACT-2025 (Phase I), we take the pleasure to invite you to participate and attend the ACT-2025 (Phase I) (Hybrid Mode) with opportunities to discuss and explore areas related to the advancement in science, engineering and technology from various application domain point of view with fellow students, academicians, researchers and practitioners. Conference may concern any topic within the conference scope. ACT-2025 (Phase I) is dedicated to magnify the understanding role of advancement in science, engineering and technology, how these advancements are applied and evolved for various real-life application domain problems. This conference will provide a platform for bringing the prominent literature and substantial research across the applications of the science, engineering and technology and provide a synopsis of the recent advanced happenings. ACT-2025 (Phase I) is an opportunity for the participants to share their research work and to listen the eminent academicians, researchers and practitioners through keynote talks and to get the insight of their carried research work and enhancement possibilities.
                    </p>
                    
                    {/*For navigation*/}
                    <div id="themeAndScope" />
                    <br />
                    <br />
                    <br />
                    <h1 className=" flex justify-center font-bold pb-10 text-2xl md:text-5xl text-center text-white">
                        CALL FOR PAPERS
                    </h1>
                    <p className="text-justify text-white leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT-2025 (Phase I), is an international conference where theory, practices, and applications of Computing, Control and Telecommunication in various domains of science and engineering such as civil engineering, computer science and information engineering, mechanical engineering, electrical engineering, electronics and telecommunication engineering, healthcare industry, and etc. and related topics are presented and discussed. Authentic, ethical and original contributions from students, academicians, and practitioners describing their unpublished state-of-the-art research contribution which is not currently under review or not submitted to another conference, workshop or journal are invited to share their research work in all the areas of science, engineering, and technology and its applications in various domains. Original contributions are solicited on topics covered under broad areas such as (but not limited to):
                    </p>

                    <div className='grid sm:grid-cols-2 gap-0 text-white my-10 lg:mx-20 border-b-2'>
                        {topics.map((topic, index) => {
                            return <p className={`border-x-2 border-t-2 ${index % 2 === 0 ? "sm:border-l-2" : "sm:border-l-0"} border-white p-2`} key={index}>{topic}</p>
                        })}
                    </div>

                </div>
            </div>
        </MainContainer>
    );
}

