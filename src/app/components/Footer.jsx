import React from "react";
import Image from "next/image";
import logo from "@/app/icaset_logo.jpg"

export default function Footer() {
    return (
        <footer className="w-full bg-[#222831]  text-white">
            
            <div className=" flex p-20 justify-evenly ">

            <div><Image src={logo} className="h-20 w-auto" />
            ICASET
            
            </div>
            <div >
                LOCATION
                <ul className=" font-light">
                    <li>Ycce</li>
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