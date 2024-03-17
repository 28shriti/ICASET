import React from "react";
import Image from "next/image";
import Link from "next/link";
// import logo from "@/app/icaset_logo.jpg"

export default function Footer() {
    return (
        <footer className="w-full bg-[#222831]  text-white">
            
            <div className=" flex p-20 justify-evenly ">

            <div><Image src={'/images/icaset_logo.png'} height={100} width={100} className="mix-blend-screen" />
            ICASET
            
            </div>
            <div >
                📍LOCATION
                <ul className=" font-light">
                    <Link href="https://ycce.edu" >YCCE</Link>
                    <li>Hingna</li>
                </ul>
            </div>

            <div>GET IN TOUCH
                <ul>
                    <li>Call : 91-0909586049587</li>
                </ul>
            </div>

            </div>

           <center><div>© 2024 ICASET - All rights reserved.</div></center> 

        </footer>
    );
}