import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { internationalAdvisoryBoard } from "@/app/data"
import '@/app/committee/organizing-committee/conveyors/conveyor.css'
import BoardMember from "@/app/components/BoardMember"

const page = () => {

    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">International Advisory Board</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-screen p-10 gap-5">
                {/* <Table className='w-[70vw] ml-[15vw] mt-10 mb-10 border bg-[#31363F] bg-opacity-70 text-white'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-xl text-center font-bold text-white'>Name</TableHead>
                            <TableHead className='text-xl text-center font-bold text-white'>Designation</TableHead>
                            <TableHead className='text-xl text-center font-bold text-white'>Profile</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            internationalAdvisoryBoard.map((value, key) => {
                                return (
                                    <TableRow key={key}>
                                        <TableCell className="font-semibold text-base text-center">{value.name}</TableCell>
                                        <TableCell className='font-medium text-base text-center'>{value.designation}</TableCell>
                                        <TableCell className='font-medium underline text-base text-center'><Link href={value.link}>View Profile</Link></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table> */}

                {internationalAdvisoryBoard.map((value, key)=> {
                    return <BoardMember link={value.link} name={value.name} designation={value.designation} img={value.img} />
                })}

            </div>
        </div>
    )
}

export default page