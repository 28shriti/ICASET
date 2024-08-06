import MainContainer from '@/app/components/MainContainer'
import { asn } from '@/app/data'
import {res}  from '@/app/data'
import { ict } from '@/app/data'
import {ra} from '@/app/data'
import { beht } from '@/app/data'
import { cee } from '@/app/data'
import { mae } from '@/app/data'
import { cept } from '@/app/data'
import { iem } from '@/app/data'

const page = () => {
    return (
        <MainContainer>
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Conference Theme</h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 gap-10">


                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl '>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Applied Sciences and Nanotechnology</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white list-item">
                            {
                                asn.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl '>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Renewable Energy and Sustainability</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                res.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-2xl'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Information and Communication Technology</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                ict.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Robotics and Automation</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                ra.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10"> Biomedical Engineering and Healthcare Technology</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                beht.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Civil and Environmental Engineering </h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                cee.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Mechanical and Aerospace Engineering</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                mae.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10"> Chemical Engineering and Process Technology</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                cept.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='bg-[#31363F] bg-opacity-70 p-[20px] rounded-3xl '>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Industrial Engineering and Management</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                iem.map((value, key) => {
                                    return (
                                        <li key={key}> · {value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </MainContainer>
    )
}

export default page