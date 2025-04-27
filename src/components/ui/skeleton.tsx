import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cn("animate-pulse rounded bg-primary/10", className)}
    {...props}
  />
);
