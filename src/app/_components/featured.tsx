import Image from "next/image";

import { IconPackage } from "@/components/assets/package";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Featured = ({ className }: { className?: string }) => {
  return (
    <section id="featured-products" className={cn(className, "gap-10 py-24")}>
      <div className="container">
        <div className="mx-auto space-y-4 text-center">
          <Badge variant="outline" className="gap-3 bg-[#F6F6F6]/20 text-white">
            Our Popular Builds
            <div className="flex size-11 items-center justify-center rounded-full bg-black">
              <IconPackage />
            </div>
          </Badge>
          <h2 className="text-4xl font-medium leading-loose">
            A2D&apos;S Powerful Builds
          </h2>
        </div>
        <div className="grid grid-cols-7 gap-5">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="relative col-span-3 flex flex-col items-center justify-between rounded-2xl bg-[#9B9B9B]/20 first:col-span-4 last:col-span-4"
            >
              <Image
                src="/images/noise.png"
                alt="Noise"
                fill
                className="object-cover opacity-5"
              />
              <div className="w-full space-y-3 p-6">
                <h3 className="text-3xl font-medium">{product.title}</h3>
                <p>{product.price}</p>
              </div>
              <Image
                src={product.img}
                width={528}
                height={360}
                alt={product.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PRODUCTS = [
  {
    title: "AMD  RYZEN 9  Build",
    price: "From  ₹1,80,660",
    img: "/images/pc-1.png",
  },
  {
    title: "AMD  RYZEN 7  Build",
    price: "From  ₹1,24,000",
    img: "/images/pc-2.png",
  },
  {
    title: "Intel Core i9 Custom RGB Build",
    price: "From  ₹1,50,660",
    img: "/images/pc-3.png",
  },
  {
    title: "Intel Core i7 Custom RGB Build",
    price: "From  ₹1,08,660",
    img: "/images/pc-4.png",
  },
];
