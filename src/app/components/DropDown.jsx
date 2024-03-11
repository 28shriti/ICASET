import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ChildDropdown from "./ChildDropDown"

export default function Dropdown({ dropdown, className }) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{dropdown.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        className={`text-white bg-[#222831] border-none ${className}`}
      >
        {dropdown.items.map((item, index) => {
          return item["href"] != undefined ? (
            <Link href={item.href || "/"} key={index}>
              <DropdownMenuItem>{item.name}</DropdownMenuItem>
            </Link>
          ) : (
            <ChildDropdown
            key={index}
              className="ml-40 mt-[-20px]"
              dropdown={item}
            />
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
