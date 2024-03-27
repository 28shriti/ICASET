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
      { name: "Preamble", href: "/about/preamble" },
      { name: "Patrons", href: "/board/patrons" },
      { name: "Who can attend", href: "/about/attend" },
      { name: "Scope and benefits", href: "/about/scope" },
      { name: "Conference Theme", href: "/about/conference-theme" },
      { name: "Patrons", href: "/board/patrons" },
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

  const contact = {
    trigger: "Contact Us",
    items: [
      { name: "Site", href: "/contact/site" },
      { name: "Stay in", href: "/contact/stayin" },
    ],
  };

  function ChildAccordion(props) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value={props.trigger}>
          <AccordionTrigger>{props.trigger}</AccordionTrigger>
          <AccordionContent>
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
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

      <Sheet>
        <SheetTrigger className="block lg:hidden">Open</SheetTrigger>
        <SheetContent>
          {/* <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader> */}



        </SheetContent>
      </Sheet>

    </div>
  );
};

export default Navbar;
