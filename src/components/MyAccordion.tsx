import { AccordionProps } from "@/types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { cn } from "@/lib/utils"


const MyAccordion = ({children, title, contentClassName, triggerClassName}: AccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-transparent"
    >
      <AccordionItem
        value="item-1"
        className="border-none"
      >
        <AccordionTrigger className={cn("font-bold hover:no-underline", triggerClassName)}>
          {title}
        </AccordionTrigger>
        <AccordionContent className={cn(contentClassName)}>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default MyAccordion