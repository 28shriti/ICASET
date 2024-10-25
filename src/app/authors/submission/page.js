import Link from 'next/link';
import MainContainer from "@/app/components/MainContainer";

export default function Submission() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10">
                <div className="p-10 lg:mb-10 rounded-3xl bg-[#222831] bg-opacity-70">
                    <h1 className="flex justify-center pb-10 text-2xl md:text-5xl text-center font-extrabold text-white">
                        Paper Submission
                    </h1>

                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        All submissions, including regular papers, short papers, and other have to be made through the CMT Conference Management System. Those who do not have an CMT Conference Management System id, will need to create one.
                    </p>

                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20 font-bold pt-5">
                        Note:
                    </p>
                    <ul className="list-disc text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <li className='py-2'>Prospective authors are invited to submit full (original) research papers; which are NOT submitted/published/under consideration anywhere in other conferences/journals; in electronic (<strong>Doc or Docx only</strong>) <strong>format</strong> through the CMT Conference Management System.</li>
                        <li className='py-2'>The plagiarism of the complete paper excluding bibliography/references should be less than 10%.</li>
                        <li className='py-2'>Single source plagiarism should be less than 3%.</li>
                    </ul>

                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20 pt-5">
                        Call for Papers: <Link href="/authors/cfp" className='font-bold underline'>https://www.ycce-act.com/authors/cfp</Link>.
                        <br /><br />
                        Paper Format: <Link href="/documents/grenze_template.docx" className='font-bold underline'>paper_format.docx</Link>.
                        <br /><br />
                        Paper Submission Link: <Link href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICACT2025" className='font-bold underline'>https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICACT2025</Link>.
                    </p>


                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20 pt-5">

                        All the paper must conform to given format and must be submitted as Microsoft Word DOC or DOCX format only not exceeding stipulated 5 pages including text, figures, tables and references. For extra pages, authors have to pay extra charges.
                    </p>


                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20 font-bold pt-5">

                        All the submitted papers will go through the three reviews. Based on the review report, the paper status (Accepted/Rejected) will be communicated to the submitting author(s). Upon acceptance of the paper, the author(s) has/have to go for the registration by paying the registration fees. Details of the registration is available at  <Link href="/registration" className='font-bold underline'>https://www.ycce-act.com/registration</Link>.

                    </p>
                </div>
            </div>
        </MainContainer>
    );
}
