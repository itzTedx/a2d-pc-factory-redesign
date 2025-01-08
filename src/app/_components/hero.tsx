import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { IconArmy } from "@/components/assets/army";
import HeroPc from "@/components/assets/hero-pc.png";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/ui/custom/primary-button";
import { cn } from "@/lib/utils";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      id="hero"
      className={cn(
        className,
        "flex flex-col items-center justify-center gap-10 pt-9"
      )}
    >
      <div className="container flex flex-col items-center justify-center gap-3 text-center">
        <Badge className="relative z-10 gap-2.5">
          <div className="size-[30px] overflow-hidden rounded-full bg-brand">
            <IconArmy />
          </div>
          Hey Soldiers!
        </Badge>
        <h1 className="text-5xl font-medium leading-snug">
          From Components to Masterpiece Your <br />
          <span className="relative h-16 border border-[#FFD596] bg-brand/5 px-1.5">
            <div className="absolute left-0 before:absolute before:left-1/2 before:top-1/2 before:size-1.5 before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-[#FFD596]" />
            <div className="absolute right-0 before:absolute before:right-1/2 before:top-1/2 before:size-1.5 before:translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-[#FFD596]" />
            Ultimate PC
            <div className="absolute left-0 before:absolute before:bottom-1/2 before:left-1/2 before:size-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#FFD596]" />
            <div className="absolute right-0 before:absolute before:bottom-1/2 before:right-1/2 before:size-1.5 before:-translate-y-1/2 before:translate-x-1/2 before:rounded-full before:bg-[#FFD596]" />
          </span>{" "}
          Awaits
        </h1>
        <p>
          Transforming components into computing powerhouses. We build the PC
          you&apos;ve always wanted, tailored to your needs and budget.
        </p>
      </div>
      <div className="flex w-fit items-center gap-4">
        <PrimaryButton href="/" className="bg-white text-black">
          Build Your Dream PC
          <div className="flex size-10 items-center justify-center rounded-full bg-brand">
            <ArrowUpRight />
          </div>
        </PrimaryButton>
        <PrimaryButton href="/">
          Contact us
          <div className="flex size-10 items-center justify-center rounded-full bg-brand">
            <ArrowUpRight />
          </div>
        </PrimaryButton>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 h-[70%] w-full bg-gradient-to-t from-black/90 to-black/0" />
        <Image src={HeroPc} alt="Pc" />
      </div>
    </section>
  );
};
