"use client";   
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link href={href} {...rest}>
      <Button 
        variant="ghost"
        className={isCurrentPath 
          ? "bg-[#e09e90] text-white p-5 hover:text-[#B76E79] hover:bg-[#e09e90]/90 rounded-4xl border-1 border-[#875950]" 
          : "text-white hover:bg-transparent hover:text-[#e09e90]"
        }
      >{children}</Button>
    </Link>
  );
}