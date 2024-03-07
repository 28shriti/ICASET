import React from 'react'
import './css/Navbar.css'
import Link from 'next/link'
import Dropdown from './DropDown'

const Navbar = () => {
  const about = { trigger: "About", 
  label: "About", 
  items: ["Preamble", "Who can attend", "Scope and benefits", "FAQ"] }
  const board = { trigger: "Board", label: "Board", items: [<Link href="/board/patrons">Patrons</Link>, "International Advisory Board", "National Advisory Board"] }
  const committee = { trigger: "Committee", label: "Committee", items: ["General Chairs", "Technical Program Chairs", "International Publicity Chairs", "National Publicity Chairs", "Finance Chairs", "Publication Chairs", "Technical Program Committee",
                      <Dropdown dropdown={{trigger: "Organizing Committee", label: "Organizing Committee", items: ["Conveyors", "Organizing secretary", "Organizing team"]}} /> ] }

  return (
    <div className='navbar'>
        <Link href="/" className="item">Home</Link>
        <Dropdown dropdown={about} />
        <Dropdown dropdown={board} />
        <Dropdown dropdown={committee} />
        
    
        <Link href="/speakers" className="item">Keynote Speakers </Link>
        <Link href="/dates" className="item">Important Dates</Link>
        <Link href="/registration" className="item">Registration </Link>
        <Link href="/schedule" className="item">Programme Schedule</Link>
        <Link href="/contact" className="item">Contact US</Link>
        
        {/* <div className="item">Publications</NavLink>
        <div className="item">Location & Navigation</NavLink>
        <div className="item">Sponsers</NavLink>
         */}

    </div>
  )
}

export default Navbar