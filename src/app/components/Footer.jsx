import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>

        <div className="w-full bg-[#31363F] text-white md:p-2 py-5 flex flex-col md:flex-row justify-center items-center">
            <div className="m-auto md:mr-[60px] md:w-[400px] md:h-[200px] flex flex-col items-center md:m-[60px] mt-2">
                <Image src={'/images/ic-aset_logo.png'} width={300} height={150} alt="icaset_Logo" className="md:block mix-blend-screen object-cover object-center" />
                <p className='md:text-left text-md px-3 text-center'>
                    International Conference on Applications of Science, Engineering and Technology - 2024
                </p>
            </div>

            <div className='m-auto md:m-8 md:ml-8 md:w-96 md:h-48 pl-10'>
                <h1 className='text-cyan text-3xl py-8 ' style={{ color: "cyan" }}>Quick Links</h1>
                <ul>
                    <li>•<Link href="/" className="item"> Home </Link></li>
                    <li>•<Link href="/about/conference" className="item"> About</Link></li>
                    <li>•<Link href="/authors/dates" className="item"> Important Dates</Link></li>
                    <li>•<Link href="/authors/cfp" className="item"> Call For Paper</Link></li>
                </ul>
            </div>

            <div className='m-auto md:m-8 md:w-96 md:h-48' >
            <h1 className='text-cyan text-3xl py-8' style={{color: "cyan"}}>Get in Touch</h1>
                <ul>
                    <li><Link href="https://ycce.edu/" className="item">YCCE official website</Link></li>
                    <li>Phone no : +91-8275783031 </li>
                    <li>Email : ksingh@ycce.edu</li>
                </ul>
           </div>
        </div>

        <div className="bg-[#222831] text-white p-10">
        <h1 className="text-cyan text-center text-lg mb-4" style={{color: "cyan"}}>Developer Team</h1>
            <div className="flex flex-wrap justify-evenly">
                <Link href='https://www.linkedin.com/in/shriti-nandanwar-ba9b06257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="m-2">Shriti Nandanwar</Link>
                <Link href='https://www.linkedin.com/in/rushikeshmunne/' className="m-2">Rushikesh Munne</Link>
                <Link href='https://www.linkedin.com/in/om-mane-20479a25b/' className="m-2">Om Mane</Link>
                <Link href='https://www.linkedin.com/in/piyush-bhoyar-b130a6256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className="m-2">Piyush Bhoyar</Link>
                <Link href='/' className="m-2">Pranav Suryavanshi</Link>
                <Link href='http://portfolio-yashghogre.vercel.app' className="m-2">Yash Ghogre</Link>
            </div>
        </div>

        <div className="flex justify-center items-center p-2 bg-white md:text-center">
            <p>Copyright © 2024 IC-ASET - All Rights Reserved</p>
        </div>      
        </footer>
    );
}