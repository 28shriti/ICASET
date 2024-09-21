import Image from "next/image";
import MainContainer from "../components/MainContainer";

export const metadata = {
    title: 'Schedule',
    description: 'Know the Schedule of the ICASET-2025.'
}

export default function Schedule() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10">
                <div className="bg-[#222831] bg-opacity-70 py-10 px-2 md:p-10 lg:mb-10 rounded-3xl">
                    <h1 className=" flex justify-center font-bold pb-10 text-2xl md:text-5xl text-center text-white">
                        Program Schedule
                    </h1>

                    <table className="w-full lg:w-3/4 mx-auto text-white">

                        <thead className="border-2 border-white w-full">
                            <tr>
                                <th colSpan={2} className="py-5 px-3">
                                    <div className="flex justify-center items-center">
                                        <div className="hidden md:block">
                                            <Image src={'/images/act_logo.png'} width={100} height={100} alt="act_Logo" className="hidden md:block object-cover object-center" />
                                        </div>
                                        <div className="text-center col-span-2 md:col-span-1">International Conference on Advances in Computing Control and Telecommunication Technologies, ACT-2025 (Phase I)
                                        </div>
                                        <div className="bg-[#31363f] hidden md:block h-full">
                                            <Image src={'/images/YCCElogo-removebg-preview.png'} alt="ycce_Logo" className="hidden md:block object-cover object-center p-2" height={150} width={230} />
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="border-2 border-white w-full">
                            <tr className="border-2 border-white">
                                <th className="border-r-2 border-white">Date: 07/02/2025</th>
                                <th>Agenda</th>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">09:00 - 10:00 am</td>
                                <td className="p-3">Registration and Tea</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">10:00 - 10:30 am</td>
                                <td className="p-3">Inaugration</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">10:30 - 11:00 am</td>
                                <td className="p-3">Keynote Address - 1</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">11:00 - 1:00 pm</td>
                                <td className="p-3">Session A1, A2, A3, A4, A5, A6</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">1:00 - 1:30 pm</td>
                                <td className="p-3">Lunch Break</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">1:30 - 2:00 pm</td>
                                <td className="p-3">Ketnote Address - 2</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">2:00 - 4:00 pm</td>
                                <td className="p-3">Session B1, B2, B3, B4, B5, B6</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">4:00 - 5:00 pm</td>
                                <td className="p-3">High Tea and Networking</td>
                            </tr>

                            {/* =========== Day 2 =============*/}

                            <tr className="border-2 border-white">
                                <th className="border-r-2 border-white">Date: 08/02/2025</th>
                                <th>Agenda</th>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">10:00 - 10:30 am</td>
                                <td className="p-3">Tea, Coffee</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">10:30 - 11:00 am</td>
                                <td className="p-3">Keynote Address - 3</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">11:00 - 1:00 pm</td>
                                <td className="p-3">Session C1, C2, C3, C4, C5, C6</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">1:00 - 1:30 pm</td>
                                <td className="p-3">Lunch Break</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">1:30 - 2:00 pm</td>
                                <td className="p-3">Ketnote Address - 4</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">2:00 - 4:00 pm</td>
                                <td className="p-3">Session D1, D2, D3, D4, D5, D6</td>
                            </tr>

                            <tr>
                                <td className="border-r-2 border-white p-3">4:00 - 5:00 pm</td>
                                <td className="p-3">Valedictory Function</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </MainContainer>
    )
}
