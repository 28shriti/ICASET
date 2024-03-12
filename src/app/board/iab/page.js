import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"


const page = () => {

    const boardMem = [
        {
            name: 'Sample Name',
            designation: 'Sample Designation',
            link: 'https://linkedin.com'
        },
        {
            name: 'Sample Name 2',
            designation: 'Sample Designation 2',
            link: 'https://linkedin.com'
        },
    ]

    return (
        <div>
            <div>
                <h1 className="font-bold text-3xl text-center pt-10 text-[#31363F]">International Advisory Board</h1>
            </div>
            <div className="flex justify-center items-center w-screen">
                <Table className='w-[70vw] ml-[15vw] mt-10 mb-10 border backdrop-blur-sm backdrop-contrast-[0.4] text-white'>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-xl text-center font-bold text-[#31363F]'>Name</TableHead>
                            <TableHead className='text-xl text-center font-bold text-[#31363F]'>Designation</TableHead>
                            <TableHead className='text-xl text-center font-bold text-[#31363F]'>Profile</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            boardMem.map((value, key) => {
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