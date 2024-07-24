
import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ChildDropdown({ dropdown, className }) {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-white hover:text-black focus:bg-gray-300 focus:text-black data-[state=open]:bg-gray-300 data-[state=open]:text-black">
                {dropdown.trigger}
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className={`text-white bg-[#222831] border-none ${className}`}>
        {dropdown.items.map((item, index) => {
          return item.href !== undefined ? (
            <Link href={item.href || "/"} key={index} target={item.newTab !== undefined ? "_blank" : "_self"}>
              <DropdownMenuItem className="text-nowrap">{item.name}</DropdownMenuItem>
            </Link>
          ) : (
            <ChildDropdown
              key={index}
              dropdown={item}
            />
          );
        })}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}

