"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";

export default function TestDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>TEST DROPDOWN</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>test0 </DropdownMenuItem>
        <DropdownMenuItem>test1</DropdownMenuItem>
        <DropdownMenuItem>test2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
