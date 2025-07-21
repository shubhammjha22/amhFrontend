import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTAButton({ href, onClick, children, className = "" }) {
  const baseClass =
    "bg-green-500 hover:bg-green-600 text-black rounded-full transition-all duration-200 hover:scale-105";

  if (href) {
    return (
      <Link href={href}>
        <Button className={`${baseClass} ${className}`} onClick={onClick}>
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}
