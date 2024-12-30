import Link from 'next/link'
import MainContainer from "@/app/components/MainContainer"
import { topics } from '@/app/data'

export default function CallForPaper() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10">
                <div className="p-10 lg:mb-10 rounded-3xl bg-[#222831] bg-opacity-70">
                    <h1 className=" flex justify-center font-bold pb-10 text-2xl md:text-5xl text-center font-extrabold text-white">
                        Call For Paper
                    </h1>


                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        Dear Students, Academicians, and Practitioners,

                        <br /><br />

                        We are happy to inform you that the International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT-2025 (Phase I) <Link href="/" className="underline">https://www.ycce-act.com</Link>
                        , will be held during February 7-8, 2025 in Hybrid Mode at Yeshwantrao Chavan College of Engineering (YCCE) Nagpur, India.  The ACT-2025 (Phase I) is jointly organized by the Institute of Doctors Engineers and Scientists (IDES) and YCCE.

                        <br /><br />

                        International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT-2025 (Phase I), is an international conference where theory, practices, and applications of Computing, Control and Telecommunication in various domains of science and engineering such as civil engineering, computer science and information engineering, mechanical engineering, electrical engineering, electronics and telecommunication engineering, healthcare industry, and etc. and related topics are presented and discussed.

                        <br /><br />

                        All the accepted, registered and presented papers will be published by the <Link href="https://mbox.theides.org/l/Umn5VjBSrxMpCQXVaqUNrA/C4nTgqQiSmFl5OvMRH2ZTw/a1INeKaDiDlV8ruK2149cg" className='underline font-bold'>Grenze Scientific Society</Link> and it will be made available in the <Link href="https://mbox.theides.org/l/Umn5VjBSrxMpCQXVaqUNrA/PE892y892QMyWTO8v2gNMZ3rDw/a1INeKaDiDlV8ruK2149cg" className='underline font-bold'>GRENZE International Journal of Engineering and Technology (GIJET)</Link>, and will be indexed in <strong>Scopus</strong>.

                        <br /><br />

                        Authentic, ethical and original contributions from students, academicians, and practitioners describing their unpublished state-of-the-art research contribution which is not currently under review or not submitted to another conference, workshop or journal are invited to share their research work in all the areas of science, engineering, and technology and its applications in various domains. Original contributions are solicited on topics covered under broad areas such as (<strong>but not limited to</strong>):
                    </p>

                    <div className='grid sm:grid-cols-2 gap-0 text-white my-10 lg:mx-20 border-b-2'>
                        {topics.map((topic, index) => {
                            return <p className={`border-x-2 border-t-2 ${index % 2 === 0 ? "sm:border-l-2" : "sm:border-l-0"} border-white p-2`} key={index}>{topic}</p>
                        })}
                    </div>

                    <h3 className="flex justify-center pb-10 text-white text-justify text-xl font-bold md:text-2xl lg:text-3xl lg:px-20 pt-5">
                        Important Dates
                    </h3>

                    <div className='flex justify-center text-white lg:px-20'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='px-3 py-2 font-bold border-2 border-white'>Paper Submission</td>
                                    <td className='px-3 py-2 border-2 border-white'>31 December 2024</td>
                                </tr>
                                <tr>
                                    <td className='px-3 py-2 font-bold border-2 border-white'>Acceptance Notification</td>
                                    <td className='px-3 py-2 border-2 border-white'>15 January 2025</td>
                                </tr>
                                <tr>
                                    <td className='px-3 py-2 font-bold border-2 border-white'>Camera Ready Paper Submission</td>
                                    <td className='px-3 py-2 border-2 border-white'>20 January 2025</td>
                                </tr>
                                <tr>
                                    <td className='px-3 py-2 font-bold border-2 border-white'>Registration</td>
                                    <td className='px-3 py-2 border-2 border-white'>25 January 2025</td>
                                </tr>
                                <tr>
                                    <td className='px-3 py-2 font-bold border-2 border-white'>Conference Date</td>
                                    <td className='px-3 py-2 border-2 border-white'>07-08 February 2025</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    
                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20 mt-10">

                        If this call for paper is not of your area of interest; please forward to students, academicians, and practitioners who is working in this area.

                        <br /><br />

                        Thanking you and Best Regards,

                        <br /><br />

                        Organizers, <br />
                        ACT-2025 (Phase I)
                    </p>
                </div>
            </div>
        </MainContainer>
    )
}
