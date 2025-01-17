"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ITEMS = new Array(4).fill(null).map((_, index) => index + 1);

export function CarouselSection() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full py-8">
      <Carousel index={index} onIndexChange={setIndex}>
        <CarouselContent className="relative">
          {ITEMS.map((item) => {
            return (
              <CarouselItem key={item} className="p-4">
                <div className="flex aspect-video items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  {item}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full justify-center space-x-3 px-4">
        {ITEMS.map((item) => {
          return (
            <button
              key={item}
              type="button"
              aria-label={`Go to slide ${item}`}
              onClick={() => setIndex(item - 1)}
              className="h-12 w-12 border border-zinc-200 dark:border-zinc-800"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
