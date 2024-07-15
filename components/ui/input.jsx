import * as React from "react"

import { cn } from "../../lib/utils.js"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex w-full h-[48px] hover:border-primary/50 rounded-md border border-[#e9e9e9] focus:border-accent focus:border-[1px] font-regular px-4 py-5 text-base placeholder:text-primary/40 outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
