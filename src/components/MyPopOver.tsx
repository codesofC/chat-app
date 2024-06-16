import { PopoverProps } from "@/types";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";


const MyPopOver = ({
  buttonOver,
  children,
  buttonClassName,
  popOverClassName,
}: PopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button asChild className={cn(buttonClassName, "bg-transparent text-secondary-foreground px-0 hover:bg-transparent")}>
          {buttonOver}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(popOverClassName,  "p-4")}>
        { children }
      </PopoverContent>
    </Popover>
  )
}

export default MyPopOver