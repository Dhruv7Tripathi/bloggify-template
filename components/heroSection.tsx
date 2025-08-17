"use client"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import Navbar from "./navbar"
import Footer from "./footer"
import { faqItems } from "@/contants/index"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Features } from "./ui/features"
import { SectionMockupDemoPage } from "@/components/feature"
import Pricing from "./pricingSection"
import { Cta4 } from "./cta-4"
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-black">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-40 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,85%,.12)_0,hsla(220,50%,55%,.04)_50%,hsla(220,30%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(280,70%,85%,.08)_0,hsla(280,50%,45%,.03)_80%,transparent_100%)] translate-x-1/2 -translate-y-1/2" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(200,70%,85%,.06)_0,hsla(200,50%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="relative rounded-b-4xl mt-tab bg-background/50 backdrop-blur-sm border-b border-border/50">
          <div className="relative pt-24 md:pt-36 pb-12">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full rounded-b-2xl [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/#"
                    className="hover:bg-background/80 dark:hover:border-t-border bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm group mx-auto flex w-fit items-center gap-4 rounded-full border border-border/50 p-1 pl-4 shadow-lg shadow-black/10 transition-all duration-300 dark:border-t-white/10 dark:shadow-zinc-950/50 hover:shadow-xl hover:scale-105"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-primary" />
                      <span className="text-foreground text-sm font-medium">Introducing Bloggify</span>
                    </div>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-border/50 dark:bg-zinc-600"></span>

                    <div className="bg-background/80 group-hover:bg-muted/80 size-6 overflow-hidden rounded-full duration-500 backdrop-blur-sm">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-primary" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-primary" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="max-w-9xl mx-auto text-balance bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-tight lg:mt-16">
                    The Mindful Scroll
                    Insights, Stories, and Inspiration
                  </h1>

                  <p className="mx-auto mt-8 max-w-3xl text-balance text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Dive into a world of ideas and inspiration with a curated blog that brings you
                    <span className="text-foreground font-medium"> thought-provoking insights</span>, captivating
                    stories, and practical tips on topics you care about.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col mb-8 items-center justify-center gap-4 md:flex-row"
                >
                  <div className=" p-1 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 "
                    >
                      <Link href="/blog" className="flex items-center gap-2">
                        <span className="text-nowrap">Start Blogging</span>
                      </Link>
                    </Button>
                  </div>

                  <Link href="/explore" className="group">
                    <button
                      className="rounded-xl flex flex-row px-8 py-6 text-base font-medium backdrop-blur-sm transition-all duration-300 "
                    >
                      <span className="flex items-center gap-2">
                        Explore Stories
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-2" />
                      </span>
                    </button>
                  </Link>

                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>

        <div className="flex bg-black flex-col overflow-hidden pb-16 pt-20 md:pt-32">

          <SectionMockupDemoPage />
          <Features />
          <Pricing />
        </div>
        <section className="w-full py-20 sm:py-24 bg-black border-t border-border/50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to know about getting started with Bloggify
              </p>
            </div>

            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline sm:text-lg font-semibold py-6 text-foreground hover:text-primary transition-colors duration-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-6 leading-relaxed">
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
            buttonUrl="https://shadcnblocks.com"
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
      </main>
    </>
  )
}