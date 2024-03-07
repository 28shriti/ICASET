import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Dropdown({dropdown}) {
    return (
        <DropdownMenu>
          <DropdownMenuTrigger>{dropdown.trigger}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{dropdown.label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {dropdown.items.map((item) => {
                return (
                    <DropdownMenuItem>{item}</DropdownMenuItem>
                );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
    )
}