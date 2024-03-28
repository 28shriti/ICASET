import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Navbar = () => {
  const about = {
    trigger: "About",
    items: [
      { name: "YCCE", href: "/about/YCCE" },
      { name: "Patrons", href: "/about/YCCE#patrons" },
      { name: "Welcome to ICASET-2024", href: "/about/conference" },
      { name: "Conference Theme and Scope", href: "/about/conference#themeAndScope" },
      { name: "FAQs", href: "/about/faq", newTab: true },
    ],
  };
  const board = {
    trigger: "Advisory Board",
    items: [
      { name: "International", href: "/board" },
      { name: "National", href: "/board#nab" },
    ],
  };
  const committee = {
    trigger: "Committees",
    items: [
      { name: "Technical Program Chairs", href: "/committee" },
      { name: "General Chairs", href: "/committee#generalChairs" },
      {
        trigger: "Publicity Chairs",
        items: [
          { name: "International", href: "/committee#ipc" },
          { name: "National", href: "/committee#npc" },
        ]
      },
      { name: "Finance Chairs", href: "/committee#financeChairs" },
      { name: "Publication Chairs", href: "/committee#publicationChairs" },
      {
        trigger: "Technical Program Committee",
        items: [
          { name: "International", href: "/committee/tech-committee" },
          { name: "National", href: "/committee/tech-committee/#ntpc" },
        ],
      },
      {
        trigger: "Organizing Committee",
        items: [
          {
            name: "Convenors",
            href: "/committee/organizing-committee#",
          },
          {
            name: "Organizing Secretary",
            href: "/committee/organizing-committee/#organizing-secretary",
          },
          {
            name: "Organizing Team",
            href: "/committee/organizing-committee/#organizing-team",
          },
        ],
      },
    ],
  };

  const forAuthors = {
    trigger: "For Authors",
    items: [
      { name: "Call for Paper", href: "/authors/cfp" },
      { name: "Important Dates", href: "/authors/dates" },
      { name: "Paper Format", href: "/authors/format" },
      { name: "Paper Submission", href: "/authors/submission" },
      { name: "Publication", href: "/authors/publication" }
    ]
  }

  const contact = {
    name: "Contact Us",
    href: "/contact"
  };

  function CustomAccordionItem({ dropdown, className }) {
    return dropdown["trigger"] != undefined ? (
      <AccordionItem value={dropdown.trigger}>
        <AccordionTrigger>{dropdown.trigger}</AccordionTrigger>
        <AccordionContent>
        <Accordion type="single" collapsible>
          {dropdown.items.map((item, index) => {
            return <CustomAccordionItem key={index} dropdown={item} />
          })}
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    ) : (
      <Link href={dropdown.href} className="item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
        {dropdown.name}
      </Link>)

  }

  return (
    <div>
      <div className="hidden lg:flex justify-around bg-[#222831] p-5 text-white w-full hover:cursor-pointer no-underline sticky top-0 z-10">
        <Link href="/" className="item">
          Home
        </Link>
        <Dropdown dropdown={about} />
        <Dropdown dropdown={board} />
        <Dropdown dropdown={committee} />

        <Link href="/speakers" className="item">
          Keynote Speakers{" "}
        </Link>

        <Dropdown dropdown={forAuthors} />

        <Link href="/registration" className="item">
          Registration{" "}
        </Link>
        <Link href="/schedule" className="item">
          Programme Schedule
        </Link>
        <Link href="/contact" className="item">
          Contact Us
        </Link>
      </div>

      <Sheet>
        <div className="flex lg:hidden p-3 lg:-0 justify-end sticky top-0 z-10">
          <SheetTrigger>Open</SheetTrigger>
        </div>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>ICAASET-2024</SheetTitle>
            <SheetDescription>
            International Conference on Application of Science, Engineering and Technology - 2024
            </SheetDescription>
          </SheetHeader>

          <Accordion type="single" collapsible className="my-10">
            <Link href="/" className="item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
              Home
            </Link>
            <CustomAccordionItem dropdown={about} />
            <CustomAccordionItem dropdown={board} />
            <CustomAccordionItem dropdown={committee} />
            <Link href="/speakers" className="item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
              Keynote Speakers
            </Link>
            <CustomAccordionItem dropdown={forAuthors} />
            <Link href="/registration" className="item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
              Registration
            </Link>
            <Link href="/schedule" className="item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
              Programme Schedule
            </Link>
            <Link href="/contact" className="item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
              Contact Us
            </Link>
          </Accordion>

        </SheetContent>
      </Sheet>

    </div>
  );
};

export default Navbar;
