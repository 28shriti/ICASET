import ComingSoon from "../components/ComingSoon";
import MainContainer from "../components/MainContainer";

export const metadata = {
    title: 'Registration Page',
    description: 'Register for the conference on this page.'
}

export default function Registration() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10">
                <div className=" bg-white p-10 bg-opacity-80 lg:mb-10 rounded-3xl">
                    <h1 className=" flex justify-center font-bold pb-10 text-2xl md:text-5xl text-center text-[#333]">
                        Registration
                    </h1>
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        The registration phase begins as soon as the paper has been accepted. One has to complete the following FOUR registration steps. The registered papers will be published by the Grenze Scientific Society.
                    </p>
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <strong>Step 1 - Registration Fee </strong> <br />
                        <p>
                            It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the Proceedings and be included in the Technical Program. If an author has got more than one accepted papers, each paper has to be registered.
                        </p>
                    </p>
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <strong>
                            First Author Registration Fees
                        </strong> <br />
                        <table className="border-2 border-black mt-2 w-full">
                            <tbody>
                                <tr>
                                    <th className="border-2 border-black p-2">Paper Registration</th>
                                    <th className="border-2 border-black p-2">Authors from Host Country</th>
                                    <th className="border-2 border-black p-2">International Authors</th>
                                </tr>
                                <tr>
                                    <td className="border-2 border-black p-2">Industry Delegate</td>
                                    <td className="border-2 border-black p-2">INR 7500/-</td>
                                    <td className="border-2 border-black p-2">USD 120/-</td>
                                </tr>
                                <tr>
                                    <td className="border-2 border-black p-2">Academia </td>
                                    <td className="border-2 border-black p-2">INR 6500/-</td>
                                    <td className="border-2 border-black p-2">USD 100/-</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>First Author Registration Fees</strong>{" "}
                            is mandatory for all the papers.
                        </p>
                    </p>
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <strong>Extra Charges (if applicable)</strong> <br />
                        <table className="border-2 border-black my-2 w-full">
                            <tbody>
                                <tr>
                                    <th className="border-2 border-black p-2">Item</th>
                                    <th className="border-2 border-black p-2">All Authors</th>
                                </tr>
                                <tr>
                                    <td className="border-2 border-black p-2">Extra page charge (per Page)</td>
                                    <td className="border-2 border-black p-2">USD 20/- <br />
                                        (INR 1000/-)
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td className="border-2 border-black p-2">Print Media of the Proceedings</td>
                                    <td className="border-2 border-black p-2">USD 25/- <br />
                                        (INR 1500/-)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-2 border-black p-2">Additional Conf Kit with CD Media</td>
                                    <td className="border-2 border-black p-2">USD 15/- <br />
                                        (INR 750/-)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-2 border-black p-2">Additional Food Coupon</td>
                                    <td className="border-2 border-black p-2">USD 10/- <br />
                                        (INR 500/-)
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                        {/* <p><strong>NOTE:</strong> Print media of the proceedings (if ordered) will be dispatched from the conference secretariat to the authors on the second day of the conference.</p> */}
                    </p>
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>Additional Registration Fees - Co-Author or Attendee/Listener or Spouse</strong><br />
                            <table className="border-2 border-black my-2 w-full">
                                <tbody>
                                    <tr>
                                        <th className="border-2 border-black p-2">Co-Author or Attendee/Listener or Spouse</th>
                                        <th className="border-2 border-black p-2">Authors from Host country</th>
                                        <th className="border-2 border-black p-2">International authors</th>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black p-2">Early Registration</td>
                                        <td className="border-2 border-black p-2">INR 3,000/-</td>
                                        <td className="border-2 border-black p-2">USD 125/-</td>
                                    </tr>
                                    {/* <tr>
                                        <td className="border-2 border-black p-2">Early Registration (For IDES Members)</td>
                                        <td className="border-2 border-black p-2">INR 3,000/-</td>
                                        <td className="border-2 border-black p-2">USD 125/-</td>
                                    </tr> */}
                                </tbody>
                            </table>
                            {/* <p><strong>NOTE:</strong> For Additional Registration of Co-Author or Attendee/Listener or Spouse; only CD media will be provided and print media can be purchased additionally.</p> */}<br /> 

                            <strong>Additional Registration Fees</strong>{" "} is applicable to second registration of any co-author of an already registered paper. If the co-authors of a paper is looking for additional registration above fees are applicable. This fees ia also applicable to Attendees or Listeners or Spouses who wish to particiate in the conference and discussions.
                        </p>
                    </p>
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>Payment option :  <a href="/">Payment Link</a><br />
                            Payment Mode: Mention your Paper ID with Conference Acronym or the Registered Author Name at the payment subject
                        </strong>
                        </p>
                    </p>
                    <br />
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>Step 2 - Registration</strong><br />
                            It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the Proceedings and be included in the Technical Program. If an author has got more than one accepted papers, each paper has to be registered seperately. <br /> <br />
                            <b>The papers of quality are assigned to LONG, FULL and REGULAR paper categories  by the reviewers based on the International standards in vogue and also based on the extent of the content revealed. NO change in category is allowed and possible.</b> <br /><br />
                            The Conference Registration Form available at  DOC (link to form ehich will be provided)
                            Send your completed registration form along with the scanned copy of the proof of payments to <b>act_phase1@outlook.com</b>
                        </p>
                    </p>
                    <br />
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>Step 3 - Copyright Transfer</strong><br />
                            All Authors have to sign (for their individual paper) <b>Copyright Transfer Agreement Form</b>, which is in PDF format. Print-Fill-Sign-Scan and send to <b>xyz@gmail.com</b><br />

                            The Conference Copyright form, available at <a href="/" className="text-blue-900 underline font-bold ">DOC</a>.
                        </p>
                    </p>
                    <br /><br />

                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>Step 4 - Camera Ready Paper (CRP) Submission</strong><br />
                        Authors submitting their papers may use the following template. The failure in adhering to the specific format norms  will result in rejection. All camera ready papers must be submitted in MS WORD file format only (PDF is NOT accepted).<br />

                        The GRENZE common template, available at <a href="/documents/grenze_template.docx" className="text-blue-900 underline font-bold ">DOC</a>.  <br />
                        <p>Maximum allowed and Minimum required pages (while submitting the camera ready paper) for different categories are limited to as follows</p>
                        </p>

                        <table className="border-2 border-black my-2 w-full">
                                <tbody>
                                    <tr>
                                        <th className="border-2 border-black p-2">Paper Category</th>
                                        <th className="border-2 border-black p-2">Free Pages</th>
                                        <th className="border-2 border-black p-2">Paying Extra Charge</th>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black p-2">Long paper</td>
                                        <td className="border-2 border-black p-2">09 Pages</td>
                                        <td className="border-2 border-black p-2">3 Pages</td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black p-2">Full Paper</td>
                                        <td className="border-2 border-black p-2">07 Pages</td>
                                        <td className="border-2 border-black p-2">2 Pages</td>
                                    </tr>
                                    <tr>
                                        <td className="border-2 border-black p-2">Regular Paper</td>
                                        <td className="border-2 border-black p-2">05 Pages</td>
                                        <td className="border-2 border-black p-2">1 Pages</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Send your camera ready papers to only <b>act_phase1outlook.com</b></p>
                    </p>
                    <br />
                    <br />
                    <p className="text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        <p><strong>Step 5 - Registration</strong> <br />
                        Send your completed registration and copyright form, camera ready paper in word format along with the scanned copy of the proof of payments to <b>act_phase1outlook.com</b>.
                        </p>
                    </p>
                    
                </div>
            </div>
        </MainContainer>
    )
}