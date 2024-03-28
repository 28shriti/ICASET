import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#222831]  text-white md:p-20 py-5 flex flex-col md:flex-row justify-center items-center">
            <div className=" m-auto md:mr-[60px] md:w-[400px] md:h-[300px] flex flex-col items-center" >
                <Image src={'/images/icaset_logo.png'} width={300} height={150} alt="icaset_Logo" className=" md:block mix-blend-screen object-cover object-center" />
                <p className='text-center text-md px-3'>
                    International Conference on Application of Science, Engineering and
                    Technology - 2024</p>
            </div>
            <div className='m-auto md:m-[60px] md:w-[400px] md:h-[300px]' >
                <h1 className='text-cyan p-[30px]' style={{ fontSize: "30px", color: "cyan", padding: "30px" }}>Quick Links </h1>
                <ul>

                    <li>•<Link href="/" className="item"> Home </Link></li>
                    <li>•<Link href="/about/preamble" className="item"> About</Link></li>
                    <li>•<Link href="/dates" className="item"> Important Dates</Link></li>
                    <li>•<Link href="/schedule" className="item"> Programme Schedule</Link></li>
                </ul>
            </div>
            <div className='m-auto md:m-[60px] md:w-[400px] md:h-[300px]' >
                <h1 className='text-cyan p-[30px]' style={{ fontSize: "30px", color: "cyan", padding: "30px" }}>Get in Touch </h1>
                <ul>
                    <li>Phone no :<a href="tel:9322549802">+91-9999999999</a> </li>
                    <li>Email : @ycce.edu</li>
                    <li>YCCE Nagpur</li>
                </ul>
            </div>
        </footer>
    );
}