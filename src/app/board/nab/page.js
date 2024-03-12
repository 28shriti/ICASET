import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { nationalAdvisoryBoard } from "@/app/data"


const page = () => {

    return (
        <div>
            <div>
                <h1 className="font-bold text-3xl text-center pt-10 text-[#31363F]">National Advisory Board</h1>
            </div>
            <div className="flex justify-center items-center w-screen">
                <Table className='w-[70vw] ml-[15vw] mt-10 mb-10 border bg-[#31363F] bg-opacity-70 text-white'>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-xl text-center font-bold text-white'>Name</TableHead>
                            <TableHead className='text-xl text-center font-bold text-white'>Designation</TableHead>
                            <TableHead className='text-xl text-center font-bold text-white'>Profile</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            nationalAdvisoryBoard.map((value, key) => {
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
                </Table>

            </div>
        </div>
    )
}

export default page