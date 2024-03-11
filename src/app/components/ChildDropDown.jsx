import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Dropdown({ dropdown, className }) {
  // console.log("lol" instanceof string)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full hover:bg-white hover:text-black relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">{dropdown.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={`text-white bg-[#222831] border-none ${className}`}>
        {dropdown.items.map((item, index) => {
          return item["href"] ? (
            <Link href={item.href || "/"} key={index}>
              <DropdownMenuItem>{item.name}</DropdownMenuItem>
            </Link>
          ) :
          (typeof item == "string" ? <DropdownMenuItem>{item}</DropdownMenuItem> : item);
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
