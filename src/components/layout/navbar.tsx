import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Logo } from "../logo";
import { PrimaryButton } from "../ui/custom/primary-button";

export const Navbar = () => {
  return (
    <header className="bg-black py-6 text-white">
      <nav className="container relative z-50 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="flex items-center gap-8 rounded-full bg-white/15 px-10 py-4 backdrop-blur-2xl">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>

        <PrimaryButton href="/">
          Contact us
          <div className="flex size-10 items-center justify-center rounded-full bg-brand">
            <ArrowUpRight />
          </div>
        </PrimaryButton>
      </nav>
    </header>
  );
};

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Why Us",
    href: "/",
  },
  {
    title: "Products",
    href: "/",
  },
  {
    title: "Testimonials",
    href: "/",
  },
];
