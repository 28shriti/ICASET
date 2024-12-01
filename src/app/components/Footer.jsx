import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
 
export default function Footer() {
    return (
        <footer>
        <div className="w-full bg-[#31363F]  text-white md:p-2 py-5 flex flex-col md:flex-row justify-center items-center">
            <div className=" m-auto md:mr-[60px] md:w-[400px] md:h-[200px] flex flex-col items-center">
                <Image src={'/images/act_logo.png'} width={100} height={100} alt="act_Logo" className=" md:block object-cover object-center mb-2" />
                <p className='md:text-center text-md px-3 text-center'>
                International Conference on Advances in Computing Control and Telecommunication Technologies, ACT-2025 (Phase I)</p>
            </div>
            <div className='m-auto md:m-[60px] md:w-[400px] md:h-[200px]' >
                <h1 className='text-cyan p-[30px]' style={{ fontSize: "30px", color: "cyan", padding: "30px" }}>Quick Links </h1>
                <ul>

                    <li>•<Link href="/" className="item"> Home </Link></li>
                    <li>•<Link href="/about/conference" className="item"> About</Link></li>
                    <li>•<Link href="/authors/dates" className="item"> Important Dates</Link></li>
                    <li>•<Link href="/authors/cfp" className="item"> Call For Paper</Link></li>
                </ul>
            </div>
            <div className='m-auto md:m-[60px] md:w-[400px] md:h-[200px]' >
                <h1 className='text-cyan p-[30px]' style={{ fontSize: "30px", color: "cyan", padding: "30px" }}>Get in Touch </h1>
                <ul>
                    <li><Link href="https://ycce.edu/" className="item"><FontAwesomeIcon icon={faLocationDot} /> YCCE official website</Link></li>
                    <li>Phone no : +91-7767888776 </li>
                    <li>Email : actphase1@outlook.com</li>

                </ul>
            </div>
        </div>
        
        <div className="bg-[#222831] text-white p-10">
            <h1 className="text-[20px] text-cyan-300 flex justify-evenly p-[10px]">Developer Team </h1>
            <div className="flex-wrap flex justify-evenly m-5">
                 <Link href='https://www.linkedin.com/in/shriti-nandanwar-ba9b06257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Shriti Nandanwar</Link>
                   <Link href='https://www.linkedin.com/in/rushikeshmunne/'>Rushikesh Munne</Link> 
                   <Link href='https://www.linkedin.com/in/om-mane-20479a25b/'>Om Mane</Link> 
                   <Link href='https://www.linkedin.com/in/piyush-bhoyar-b130a6256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Piyush Bhoyar</Link> 
                   <Link href='/'>Pranav Suryavanshi</Link> 
                   <Link href='http://portfolio-yashghogre.vercel.app'>Yash Ghogre</Link> 
            </div>
        </div>
        <div className=" flex justify-center items-center p-2 bg-white text-[#222831]">
                    Copyright © ACT-2025 (Phase I) - All Rights Reserved 
            </div>
            
        </footer>
    );
}
