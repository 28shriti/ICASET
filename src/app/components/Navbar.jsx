import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown";

const Navbar = () => {
  const about = {
    trigger: "About",
    items: [
      { name: "YCCE", href: "/about/YCCE" },
      { name: "Preamble", href: "/about/preamble" },
      { name: "Who can attend", href: "/about/attend" },
      { name: "Scope and benefits", href: "/about/scope" },
      {
        trigger: "Conference Theme",
        items: [
          {name: "Data Science and Machine Learning", href: "/about/conference-theme/track1"},
          {name: "Modelling and Optimization", href: "/about/conference-theme/track2"},
          {name: "IOT and Communications", href: "/about/conference-theme/track3"},
          {name: "Technology and Innovation and Development in Management", href: "/about/conference-theme/track4"},
        ]
      },
      { name: "FAQ", href: "/about/faq" },
    ],
  };
  const board = {
    trigger: "Board",
    items: [
      { name: "Patrons", href: "/board/patrons" },
      { name: "International Advisory Board", href: "/board/iab" },
      { name: "National Advisory Board", href: "/board/nab" },
    ],
  };
  const committee = {
    trigger: "Committee",
    items: [
      { name: "General Chairs", href: "/committee/general" },
      { name: "Technical Program Chairs", href: "/committee/technical-chairs" },
      {
        name: "International Publicity Chairs",
        href: "/committee/international",
      },
      { name: "National Publicity Chairs", href: "/committee/national" },
      { name: "Finance Chairs", href: "/committee/finance" },
      { name: "Publication Chairs", href: "/committee/publication" },
      {
        trigger: "Technical Program Committee",
        items: [
          { name: "International", href: "/tech-committee/international" },
          { name: "National", href: "/tech-committee/national" },
        ],
      },
      {
        trigger: "Organizing Committee",
        items: [
          {
            name: "Conveyors",
            href: "/committee/organizing-committee/conveyors",
          },
          {
            name: "Organizing secretary",
            href: "/committee/organizing-committee/organizing-secretary",
          },
          {
            name: "Organizing team",
            href: "/committee/organizing-committee/organizing-team",
          },
        ],
      },
    ],
  };

  const contact = {
    trigger: "Contact Us",
    items: [
      { name: "Site", href: "/contact/site" },
      { name: "Stay in", href: "/contact/stayin" },
    ],
  };

  return (
    <div className="flex justify-around bg-[#222831] p-5 text-white w-full hover:cursor-pointer no-underline sticky top-0 z-10">
      <Link href="/" className="item">
        Home
      </Link>
      <Dropdown dropdown={about} />
      <Dropdown dropdown={board} />
      <Dropdown dropdown={committee} />

      <Link href="/speakers" className="item">
        Keynote Speakers{" "}
      </Link>
      <Link href="/dates" className="item">
        Important Dates
      </Link>
      <Link href="/registration" className="item">
        Registration{" "}
      </Link>
      <Link href="/schedule" className="item">
        Programme Schedule
      </Link>
      
      <Dropdown dropdown={contact} />
    </div>
  );
};

export default Navbar;
