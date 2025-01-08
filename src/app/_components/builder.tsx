import { IconPackage } from "@/components/assets/package";
import { CarouselSection } from "@/components/carousel";
import { BuilderForm } from "@/components/forms/builder-form";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Builder = () => {
  return (
    <section id="builder" className="container space-y-4 py-24">
      <div className="mx-auto text-center">
        <Badge variant="outline" className="gap-3">
          Build Your Dream PC
          <div className="flex size-11 items-center justify-center rounded-full bg-black">
            <IconPackage />
          </div>
        </Badge>
        <h2 className="text-4xl font-medium leading-loose">
          Build your dream PC with A2D Experts
        </h2>
        <p>
          Choose each component yourself using our intuitive interface. Perfect
          for tech-savvy enthusiasts who know their specs.
        </p>
      </div>
      <Tabs defaultValue="own">
        <TabsList className="mx-auto my-9 grid w-[400px] grid-cols-2">
          <AnimatedBackground
            defaultValue="own"
            className="rounded-full bg-black"
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
          >
            <TabsTrigger value="own" data-id="own">
              Select By Own
            </TabsTrigger>
            <TabsTrigger value="expert" data-id="expert">
              Request From Expert
            </TabsTrigger>
          </AnimatedBackground>
        </TabsList>
        <TabsContent value="own" className="grid grid-cols-7 gap-3">
          <div className="relative col-span-4 rounded-xl bg-[#F7F7F7] p-6">
            <h3 className="absolute bg-gradient-to-r from-[#E6E6E6] to-[#F4F4F4] bg-clip-text text-[7.75rem] font-semibold leading-none text-transparent">
              PREDATOR
            </h3>
            <CarouselSection />
          </div>
          <div className="col-span-3 rounded-xl bg-[#F7F7F7] p-6">
            <h4 className="pb-3 text-2xl font-medium">Select Components</h4>
            <BuilderForm />
          </div>
        </TabsContent>
        <TabsContent value="expert">hello</TabsContent>
      </Tabs>
    </section>
  );
};
