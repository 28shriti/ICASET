import Link from 'next/link';
import MainContainer from "@/app/components/MainContainer";

export default function Publication() {
    return (
        <MainContainer>
            <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 p-2 md:p-10">
                <div className="p-10 lg:mb-10 rounded-3xl bg-[#222831] bg-opacity-70">
                    <h1 className=" flex justify-center pb-10 text-2xl md:text-5xl text-center font-extrabold text-white">
                        Publication
                    </h1>

                    <p className="text-white text-justify leading-4 md:leading-5 lg:leading-normal text-sm md:text-md lg:text-lg lg:px-20">
                        All the accepted, registered and presented papers will be published by the <Link href="https://mbox.theides.org/l/Umn5VjBSrxMpCQXVaqUNrA/C4nTgqQiSmFl5OvMRH2ZTw/a1INeKaDiDlV8ruK2149cg" className="underline">Grenze Scientific Society</Link> and it will be made available in the <Link href="https://mbox.theides.org/l/Umn5VjBSrxMpCQXVaqUNrA/PE892y892QMyWTO8v2gNMZ3rDw/a1INeKaDiDlV8ruK2149cg" className="underline">GRENZE International Journal of Engineering and Technology (GIJET)</Link>, and will be indexed in <strong>Scopus</strong>.
                    
                    <br /><br />

                    Previous Scopus Indexed Issue » <Link href="https://www.scopus.com/record/display.uri?eid=2-s2.0-85174411805&origin=inward&txGid=c73308caf975e623a322f62e87a5ac15" className='underline font-bold'>Link</Link>
                    </p>

                </div>
            </div>
        </MainContainer>
    );
}
