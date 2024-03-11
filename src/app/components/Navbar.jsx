import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown";
import ChildDropdown from "./ChildDropDown"

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
      "Patrons",
      "International Advisory Board",
      "National Advisory Board",
    ],
  };
  const committee = {
    trigger: "Committee",
    items: [
      "General Chairs",
      "Technical Program Chairs",
      "International Publicity Chairs",
      "National Publicity Chairs",
      "Finance Chairs",
      "Publication Chairs",
      "Technical Program Committee",
      <ChildDropdown className="ml-40 mt-[-20px]"
        dropdown={{
          trigger: "Organizing Committee",
          items: ["Conveyors", "Organizing secretary", "Organizing team"],
        }}
      />,
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
