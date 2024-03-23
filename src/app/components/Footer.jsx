import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#222831]  text-white p-20 flex justify-center">
            
        <div style={{ marginRight : "60px",width:"400px",height : "300px"}}>
            <Image src={'/images/icaset_logo.png'} width={300} height={150} alt="icaset_Logo" className=" hidden md:block mix-blend-screen object-cover object-center" />
            <p style={{fontSize : "15px"}}>
            1nd International conference on Advance in Science Engineering & Technology(ICASET)
            which will transpire on 23rd-25th November 2024,Nagpur,India</p>
        </div>
        <div style={{ margin : "60px",width:"400px",height : "300px"}}>
            <h1 style={{fontSize : "30px",color :"cyan",padding :"30px"}}>Quick Links </h1>
            <ul>
      
                <li>•<Link href="/" className="item"> Home </Link></li>
                <li>•<Link href="/about" className="item"> About</Link></li>
                <li>•<Link href="/dates" className="item"> Important Dates</Link></li>
                <li>•<Link href="/schedules" className="item"> Programme Schedule</Link></li>
            </ul>
        </div>
        <div style={{ margin : "60px",width:"400px",height : "300px"}}>
        <h1 style={{fontSize : "30px",color :"cyan",padding :"30px"}}>Get in Touch </h1>
            <ul>
                <li>Phone no : 9322549802</li>
                <li>Email : @ycce.edu</li>
                <li>YCCE Nagpurs</li>
            </ul>
        </div>

        </footer>
    );
}