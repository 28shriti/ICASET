import ComingSoon from "../components/ComingSoon";
import MainContainer from "../components/MainContainer";

export const metadata = {
    title: 'Registration Page',
    description: 'Register for the conference on this page.'
}

export default function Registration() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10 text-white">
                <div className=" bg-[#222831] p-10 bg-opacity-70 lg:mb-10 rounded-3xl">
                    <h1 className=" flex justify-center font-bold pb-10 text-2xl md:text-5xl text-center">
                        Registration
                    </h1>
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        The registration phase begins as soon as the paper has been accepted. One has to complete the following FOUR registration steps. All the accepted, registered and presented papers will be published by
                        the <a href="https://mbox.theides.org/l/Umn5VjBSrxMpCQXVaqUNrA/C4nTgqQiSmFl5OvMRH2ZTw/a1INeKaDiDlV8ruK2149cg" className="underline font-bold"> Grenze Scientific Society</a>and it will be made available in the
                        <a href="https://mbox.theides.org/l/Umn5VjBSrxMpCQXVaqUNrA/PE892y892QMyWTO8v2gNMZ3rDw/a1INeKaDiDlV8ruK2149cg" className="underline font-bold"> GRENZE International Journal of Engineering and Technology (GIJET),</a> and will be indexed in Scopus.
                    </p>
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <strong className="text-xl">Step 1 - Registration Fee </strong> <br />
                        <p>
                            It is mandatory for <strong>at least one author of an accepted paper to register in order for the paper to appear in the Proceedings and be included in the Technical Program</strong> If an author has got more than one accepted papers, each paper has to be registered.
                        </p>
                    </div>
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <strong className="text-xl">
                            First Author Registration Fees
                        </strong> <br />
                        <table className="border-black border-2 mt-2 w-full text-center">
                            <tbody>
                                <tr>
                                    <th className="border-2 p-2">Paper Registration</th>
                                    <th className="border-2 p-2">Authors from Host Country</th>
                                    <th className="border-2 p-2">International Authors</th>
                                </tr>
                                <tr>
                                    <td className="border-2 p-2">Industry Delegate <br /> <p className="italic"> (Up to 5 pages)</p></td>
                                    <td className="border-2 p-2">INR 7500</td>
                                    <td className="border-2 p-2">USD 120</td>
                                </tr>
                                <tr>
                                    <td className="border-2 p-2">Academia  <br /> <p className="italic"> (Up to 5 pages)</p></td>
                                    <td className="border-2 p-2">INR 6500</td>
                                    <td className="border-2 p-2">USD 100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                    </div>
                    <br />

                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <strong className="text-xl">Extra Charges (if applicable)</strong> <br />
                        <table className="border-2 border-black my-2 w-full">
                            <tbody>
                                <tr>
                                    <th className="border-2 p-2">Item</th>
                                    <th className="border-2 p-2 text-center">Authors from Host country</th>
                                    <th className="border-2 p-2 text-center">International authors</th>
                                </tr>
                                <tr>
                                    <td className="border-2 p-2">Extra page charge (per Page)</td>
                                    <td className="border-2 p-2 text-center">INR 1000</td>
                                    <td className="border-2 p-2 text-center">USD 20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <div><strong className="text-xl">Registration Fees - Co-Author or Attendee or Listener or Spouse intrested to participate in person</strong><br />

                            <table className="border-2 border-black my-2 w-full">
                                <tbody>
                                    <tr>
                                        <th className="border-2 p-2" rowSpan="2">Co-Author or Attendee / Listener or Spouse</th>
                                        <th className="border-2 p-2">Authors from Host Country</th>
                                        <th className="border-2 p-2">International Authors</th>
                                    </tr>
                                    <tr>
                                        <td className="border-2 p-2 text-center">INR 3,000</td>
                                        <td className="border-2 p-2 text-center">USD 125</td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 p-3" colSpan="3">
                                            All the registered Co-Author or Attendee or Listener or Spouse is eligible to get the certificate of participation (subject to condition that if they have attended conference in physical or online mode).
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* task to do
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20 mt-7">
                        <div><strong className="text-xl">Registration Fees - Co-Author or Attendee/Listener or Spouse who have not attended conference physically</strong><br />

                        <table className="border-2 border-black my-2 w-full">
                                <tbody>
                                    <tr>
                                        <td rowSpan='2' className="p-2">Co-Authors who are not participating physically<br/> but intrested to have certificate</td>
                                        <th className="border-2 border-black p-2">Authors from Host Country</th>
                                        <th className="border-2 border-black p-2">International Authors</th>
                                    </tr>
                                    <tr>
                                       
                                        <td className="border-2 border-black p-2">INR 500</td>
                                        <td className="border-2 border-black p-2">USD 10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <div className="text-xl">Payment option : </div><a href="/" className=" underline">Payment Link</a><br />
                        Payment Mode: Mention your Paper ID with Conference Acronym or the Registered Author Name at the payment subject
                    </div>
                    <br />
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong className="text-xl">Step 2 - Registration</strong><br />
                            It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the Proceedings and be included in the Technical Program. If an author has got more than one accepted papers, each paper has to be registered seperately. <br /> <br />
                            <b>The papers of quality are assigned to LONG, FULL and REGULAR paper categories  by the reviewers based on the International standards in vogue and also based on the extent of the content revealed. NO change in category is allowed and possible.</b> <br /><br />
                            The Conference Registration Form available at  DOC (link to form ehich will be provided)
                            Send your completed registration form along with the scanned copy of the proof of payments to <b>act_phase1@outlook.com</b>
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong className="text-xl">Step 3 - Copyright Transfer</strong><br />
                            All Authors have to sign (for their individual paper) Copyright Transfer Agreement Form, which is in PDF format. Print-Fill-Sign-Scan and send to <b>act_phase1@outlook.com</b><br />
                            The Conference Copyright form, available at <a href="/" className=" underline font-bold ">DOC</a>.
                        </p>
                    </div>
                    <br /><br />

                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <div>
                            <strong className="text-xl">Step 4 - Camera Ready Paper (CRP) Submission</strong><br />
                            <p className="text-justify">Authors submitting their papers may use the following template. The failure in adhering to the specific format norms  will result in rejection. All camera ready papers must be submitted in MS WORD file format only <b>(PDF is NOT accepted)</b>.<br /></p>
                            <div className="mt-2 text-justify">The CAMERA-READY PAPER common TEMPLATE, available at <a href="/documents/Copyright.doc" className=" font-bold underline">DOC</a>. </div>
                            <div className="mt-3 font-bold text-justify">Submit your camera-ready papers through the google form (Link will be communicated after acceptance of paper).
                            </div>
                        </div>

                    </div>
                    <br />
                    <br />
                    <div className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong className="text-xl">Step 5 - Registration</strong> <br />
                            Send your completed registration and copyright form, camera-ready paper in word format along with the scanned copy of the proof of payments<b> through the google form (Link will be communicated after acceptance of paper).</b>
                        </p>
                    </div>

                </div>
            </div>
        </MainContainer>
    )
}