import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ChildDropdown({ dropdown, className }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full hover:bg-white hover:text-black relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">{dropdown.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={`text-white bg-[#222831] border-none ${className}`}>
      {dropdown.items.map((item, index) => {
          return item["href"] != undefined ? (
            <Link href={item.href || "/"} key={index} target={`${item["newTab"] != undefined ? "_blank" : "_self"}`}>
              <DropdownMenuItem>{item.name}</DropdownMenuItem>
            </Link>
          ) : (
            <ChildDropdown
              key={index}
              className="ml-90 -mt-10"
              dropdown={item}
            />
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
