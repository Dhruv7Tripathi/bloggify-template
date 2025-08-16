import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

export const Cta4 = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  buttonUrl = "#",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col border md:flex-row items-start justify-between gap-8 rounded-lg bg-black py-10  ml-24 mr-24 px-14 lg:py-16">
          {/* Left side */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-4 text-4xl font-bold">{title}</h4>
            <p className="text-muted-foreground max-w-prose">{description}</p>
            {/* <Button className="mt-6" asChild>
              <a href={buttonUrl} target="_blank" className="group ">
                {buttonText}
              </a>
            </Button> */}
            <Link
              href={buttonUrl}
              className="group w-40 mt-6 flex items-center justify-center gap-2 rounded-xl border border-neutral-600 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0px_0px_7px_1px_#535353] transition-all duration-300 hover:bg-neutral-800/50 md:text-[1rem]"
            >
              <TextGlitch text={buttonText} />
            </Link>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex justify-end items-start">
            <ul className="flex flex-col space-y-2 text-sm font-medium">
              {items.map((item, idx) => (
                <li className="flex items-center" key={idx}>
                  <Check className="mr-4 size-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}