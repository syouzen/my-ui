"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function TestAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>테스트</AccordionTrigger>
        <AccordionContent className="space-y-2">테스트</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
