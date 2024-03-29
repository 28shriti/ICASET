import { dates } from "@/app/data"
import MainContainer from "@/app/components/MainContainer"

export const metadata = {
    title: "Important Dates",
    description: 'This page contains all the important dates for the conference'
}


export default function ImportantDates() {
    return (
        <MainContainer>
            <div className='pb-10 bg-black bg-opacity-70'>
                {/* <div className="flex justify-center items-center w-[50vw] gap-7 flex-col">
                {dates.map((value, key) => {
                    return (
                        <div key={key} className="text-white bg-[#31363F] p-5 rounded-lg">
                            <p className='font-bold'>{value.date}</p>
                            <p className='opacity-70'>{value.event}</p>
                        </div>
                    )
                })}
            </div> */}
                <h3 className='text-white text-center font-black py-10 text-3xl'>Important Dates</h3>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li className='text-white'>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10 bg-white text-black p-2 rounded-md">
                            <time className="font-mono italic">{dates[0].date}</time>
                            <div className="text-lg font-black">{dates[0].event}</div>
                        </div>
                        <hr className='bg-white' />
                    </li>
                    <li className='text-white'>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">{dates[1].date}</time>
                            <div className="text-lg font-black">{dates[1].event}</div>
                        </div>
                        <hr className='bg-white' />
                    </li>
                    <li className='text-white'>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">{dates[2].date}</time>
                            <div className="text-lg font-black">{dates[2].event}</div>
                        </div>
                        <hr className='bg-white' />
                    </li>
                    <li className='text-white'>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">{dates[3].date}</time>
                            <div className="text-lg font-black">{dates[3].event}</div>
                        </div>
                        <hr className='bg-white' />
                    </li>
                    <li className='text-white'>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">{dates[4].date}</time>
                            <div className="text-lg font-black">{dates[4].event}</div>
                        </div>
                        {/* <hr className='bg-white' /> */}
                    </li>
                </ul>
            </div>
        </MainContainer>
    )
}