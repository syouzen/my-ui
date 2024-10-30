"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from "../ui/popover";

export default function TestPopover() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="text-gy-8 transition-colors active:text-gy-9">
        TEST POPOVER
      </PopoverTrigger>
      <PopoverContent sideOffset={5} className="p-2">
        test
        <PopoverArrow className="fill-white" />
      </PopoverContent>
    </Popover>
  );
}
