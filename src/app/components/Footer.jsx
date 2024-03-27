import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#222831]  text-white p-20 pb-0 flex justify-center">
        <div className="mr-[60px] w-[400px] h-[300px]" >
            <Image src={'/images/icaset_logo.png'} width={300} height={150} alt="icaset_Logo" className=" hidden md:block mix-blend-screen object-cover object-center" />
            <p style={{fontSize : "15px"}}>
            International conference on Science Engineering & Technology(ICASET)
            which will transpire on 23rd-24th November 2024,Nagpur,India</p>
        </div>
        <div className='m-[60px] w-[400px] h-[300px]' >
            <h1 className='text-cyan p-[30px]' style={{fontSize : "30px",color :"cyan",padding :"30px"}}>Quick Links </h1>
            <ul>
      
                <li>•<Link href="/" className="item"> Home </Link></li>
                <li>•<Link href="/about/preamble" className="item"> About</Link></li>
                <li>•<Link href="/dates" className="item"> Important Dates</Link></li>
                <li>•<Link href="/schedule" className="item"> Programme Schedule</Link></li>
            </ul>
        </div>
        <div className='m-[60px] w-[400px] h-[300px]' >
        <h1 className='text-cyan p-[30px]' style={{fontSize : "30px",color :"cyan",padding :"30px"}}>Get in Touch </h1>
            <ul>
                <li>Phone no :<a href="tel:9322549802">+91-9999999999</a> </li>
                <li>Email : @ycce.edu</li>
                <li>YCCE Nagpur</li>
            </ul>
        </div>
        </footer>
    );
}