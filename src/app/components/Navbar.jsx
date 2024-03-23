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
      { name: "Conference Theme", href: "/about/conference-theme"},
      { name: "Patrons", href: "/board/patrons" },
      { name: "FAQs", href: "/about/faq", newTab: true },
    ],
  };
  const board = {
    trigger: "Advisory Board",
    items: [
      { name: "International", href: "/board/iab" },
      { name: "National", href: "/board/nab" },
    ],
  };
  const committee = {
    trigger: "Committees",
    items: [
      { name: "Technical Program Chairs", href: "/committee/technical-chairs" },
      { name: "General Chairs", href: "/committee/general" },
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
          { name: "International", href: "/committee/tech-committee/international" },
          { name: "National", href: "/committee/tech-committee/national" },
        ],
      },
      {
        trigger: "Organizing Committee",
        items: [
          {
            name: "Convenors",
            href: "/committee/organizing-committee/conveyors",
          },
          {
            name: "Organizing Secretary",
            href: "/committee/organizing-committee/organizing-secretary",
          },
          {
            name: "Organizing Team",
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
