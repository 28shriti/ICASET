import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown";

const Navbar = () => {
  const about = {
    trigger: "About",
    items: [
      { name: "Preamble", href: "/about/preamble" },
      { name: "Who can attend", href: "/about/attend" },
      { name: "Scope and benefits", href: "/about/scope" },
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
          { name: "Conveyors", href: "/committee/organizing-committee/conveyors" },
          { name: "Organizing secretary", href: "/committee/organizing-committee/organizing-secretary" },
          { name: "Organizing team", href: "/committee/organizing-committee/organizing-team" },
          ],
      },
    ],
  };

  return (
    <div className="flex justify-around bg-[#222831] p-5 text-white w-full hover:cursor-pointer no-underline">
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
      <Link href="/contact" className="item">
        Contact US
      </Link>
    </div>
  );
};

export default Navbar;
