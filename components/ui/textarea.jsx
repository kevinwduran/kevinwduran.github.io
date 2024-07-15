import * as React from "react";

import { cn } from "../../lib/utils.js";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] hover:border-primary/50 w-full rounded-md border-[1px] focus:border-accent font-regular px-4 py-5 text-base placeholder:text-primary/40 focus-visible:outline-none focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
