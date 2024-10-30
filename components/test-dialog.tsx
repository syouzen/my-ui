"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

export default function TestDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>TEST DIALOG</DialogTrigger>
      <DialogContent>
        <DialogTitle>테스트</DialogTitle>
        <DialogDescription>테스트</DialogDescription>
        <DialogClose>X</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
