import { dsmlTheme } from '@/app/data'
import { moTheme } from '@/app/data'
import { iotTheme } from '@/app/data'
import { tidmTheme } from '@/app/data'

const page = () => {
    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
            <div className="w-auto flex justify-center">
                <h1 className="title font-black text-4xl text-center mt-10 py-3 px-5 text-white w-fit rounded-2xl bg-[#222831] bg-opacity-70 font-serif">Conference Theme</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 gap-10">
                <div className='bg-[#31363F] bg-opacity-70'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Data Science and Machine Learning</h1>
                    <div className="flex justify-center items-start">
                        <ol className="text-white list-item">
                            {
                                dsmlTheme.map((value, key) => {
                                    return (
                                        <li key={key}>{value}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Modelling and Optimization</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                moTheme.map((value, key) => {
                                    return (
                                        <li key={key}>{value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">IoT and Communications</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                iotTheme.map((value, key) => {
                                    return (
                                        <li key={key}>{value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='bg-[#31363F] bg-opacity-70'>
                    <h1 className="text-white font-black text-3xl text-center py-5 pb-10">Technology Innovation and Development in Management</h1>
                    <div className="flex justify-center items-start">
                        <ul className="text-white">
                            {
                                tidmTheme.map((value, key) => {
                                    return (
                                        <li key={key}>{value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page