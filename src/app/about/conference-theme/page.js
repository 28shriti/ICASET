import { dsmlTheme } from '@/app/data'
import { moTheme } from '@/app/data'
import { iotTheme } from '@/app/data'
import { tidmTheme } from '@/app/data'

const page = () => {
    return (
        <div className="bg-[#222831] flex">
            <div>
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
            <div>
                <h1 className="text-white font-black text-3xl py-5 pb-10">Modelling and Optimization</h1>
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
            <div>
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
            <div>
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
    )
}

export default page