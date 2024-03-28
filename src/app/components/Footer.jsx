import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
        <div className="w-full bg-[#222831]  text-white md:p-2 py-5 flex flex-col md:flex-row justify-center items-center">
            <div className=" m-auto md:mr-[60px] md:w-[400px] md:h-[200px] flex flex-col items-center">
                <Image src={'/images/icaset_logo.png'} width={300} height={150} alt="icaset_Logo" className=" md:block mix-blend-screen object-cover object-center" />
                <p className='md:text-left text-md px-3 text-center'>
                    International Conference on Applications of Science, Engineering and
                    Technology - 2024</p>
            </div>
            <div className='m-auto md:m-[60px] md:w-[400px] md:h-[200px]' >
                <h1 className='text-cyan p-[30px]' style={{ fontSize: "30px", color: "cyan", padding: "30px" }}>Quick Links </h1>
                <ul>

                    <li>•<Link href="/" className="item"> Home </Link></li>
                    <li>•<Link href="/about/conference" className="item"> About</Link></li>
                    <li>•<Link href="/authors/dates" className="item"> Important Dates</Link></li>
                    <li>•<Link href="/author/callforpaper" className="item"> Call For Paper</Link></li>
                </ul>
            </div>
            <div className='m-auto md:m-[60px] md:w-[400px] md:h-[200px]' >
                <h1 className='text-cyan p-[30px]' style={{ fontSize: "30px", color: "cyan", padding: "30px" }}>Get in Touch </h1>
                <ul>
                    <li>Phone no :<a href="tel:9322549802">+91-</a> </li>
                    <li>Email : @ycce.edu</li>
                    <li><Link href="https://ycce.edu/" className="item">YCCE</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="bg-[#222831] text-white p-10">
           
            <h1 style={{ fontSize: "20px", color: "cyan" ,display : "flex" ,justifyContent : "space-evenly",padding : "10px"}}>Developer Team </h1>
            <div className="flex-wrap" style={{display : "flex" ,justifyContent : "space-evenly"}}>
                 <Link href='/'>Shriti Nandanwar</Link>
                   <Link href='/'>Rushikesh Munne</Link> 
                   <Link href='/'>Om Mane</Link> 
                   <Link href='/'>Piyush Bhoyar</Link> 
                   <Link href='/'>Pranav Suryavanshi</Link> 
                   <Link href='/'>Yash Ghogre</Link> 
            </div>
        </div>
        <div className=" flex justify-center items-center p-5 bg-white">
                    @2024 IC-ASET - All Right Reserved 
            </div>
            
        </footer>
    );
}