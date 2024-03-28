import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full h-[50vh] flex justify-center items-center bg-black bg-opacity-70'>
            <div className='flex flex-col gap-5'>
                <h3 className='text-white font-semibold text-2xl'>Looks like you are lost!</h3>
                <Link href={'/'} className='bg-white hover:bg-[#F9F6EE] text-black rounded-md flex justify-center p-3'>Return to Homepage</Link>
            </div>
        </div>
    )
}

export default NotFound