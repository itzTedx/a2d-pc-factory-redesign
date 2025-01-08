import { Featured } from "./_components/featured";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <div
        aria-hidden
        className="absolute -top-[78rem] left-1/2 size-[86rem] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,_#FFC774_0%,_#FEA116_104.46%)] opacity-60 blur-[400px]"
      />
      <Hero className="bg-black text-white" />
      <HowItWorks />
      <Featured className="bg-black text-white" />
    </main>
  );
}
