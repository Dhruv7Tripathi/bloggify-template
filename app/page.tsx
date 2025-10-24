"use client"
import { Cta4 } from "@/components/cta";
import { SectionMockupDemoPage } from "@/components/feature";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/heroSection";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricingSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Features } from "@/components/ui/features";
import { faqItems } from "@/contants/index"
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex bg-white dark:bg-black flex-col overflow-hidden pb-12 sm:pb-16 pt-16 sm:pt-20 md:pt-32">
        <SectionMockupDemoPage />
        <Features />
        <Pricing />
      </div>
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-black border-t border-border/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent px-2 sm:px-0">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              Everything you need to know about getting started with Bloggify
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-4 sm:px-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base lg:text-lg font-semibold py-4 sm:py-6 text-foreground hover:text-primary transition-colors duration-200 [&>svg]:size-4 [&>svg]:sm:size-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <div className="bg-black">
        <Cta4
          title="Blogging Made Easy"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae."
          buttonText="Get Started"
          buttonUrl="https://layrdui.dhruvtripathi.in"
          items={[
            "Easy Integration",
            "24/7 Support",
            "Customizable Design",
            "Scalable Performance",
            "Hundreds of Blocks"
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
