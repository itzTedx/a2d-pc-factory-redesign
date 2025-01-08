import Link from "next/link";

import { cn } from "@/lib/utils";

export const PrimaryButton = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-14 items-center justify-center gap-3 rounded-full bg-white/15 pl-5 pr-2 text-sm font-medium backdrop-blur-2xl",
        className
      )}
    >
      {children}
    </Link>
  );
};
