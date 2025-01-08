import { IconBracket } from "@/components/assets/icons/bracket";
import { IconChip } from "@/components/assets/icons/chip";
import { IconDashboard } from "@/components/assets/icons/dashboard";
import { IconDelivery } from "@/components/assets/icons/delivery";
import { IconNote } from "@/components/assets/icons/note";
import { IconPackage } from "@/components/assets/package";
import { Badge } from "@/components/ui/badge";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container space-y-12 py-24">
      <div className="mx-auto space-y-4 text-center">
        <Badge variant="outline" className="gap-3">
          Build Your Dream PC
          <div className="flex size-11 items-center justify-center rounded-full bg-black">
            <IconPackage />
          </div>
        </Badge>
        <h2 className="text-4xl font-medium leading-loose">How It Works?</h2>
      </div>
      <ul className="grid grid-cols-5 gap-4">
        {STEPS.map((step, index) => (
          <li key={index} className="rounded-sm bg-[#F7F7F7] p-4">
            <div className="flex size-16 items-center justify-center rounded-md bg-black">
              {step.icon}
            </div>
            <h3 className="pt-9 text-lg font-medium">{step.title}</h3>
            <p className="text-md pt-3">{step.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const STEPS = [
  {
    title: "Requirement Analysis",
    description:
      "Discuss your needs and budget. Our experts help you define the perfect specs for your dream PC.",
    icon: <IconNote />,
  },
  {
    title: "Component Selection",
    description:
      "We handpick top-quality parts that match your requirements, ensuring optimal performance.",
    icon: <IconChip />,
  },
  {
    title: "Expert Assembly",
    description:
      "Our skilled technicians meticulously build your PC, paying attention to every detail for a flawless setup.",
    icon: <IconBracket />,
  },
  {
    title: "High End Testing",
    description:
      "We put your new PC through its paces with high-end benchmarks and stress tests to ensure reliability.",
    icon: <IconDashboard />,
  },
  {
    title: "Secure Delivery",
    description:
      "Your custom-built PC is carefully packaged and shipped to your doorstep, ready for out of the box.",
    icon: <IconDelivery />,
  },
];
