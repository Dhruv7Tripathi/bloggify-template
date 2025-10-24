"use client"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"
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
      <main className="overflow-hidden bg-white dark:bg-black">
        {/* Desktop background effects - hidden on mobile for performance */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-40 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,85%,.12)_0,hsla(220,50%,55%,.04)_50%,hsla(220,30%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(280,70%,85%,.08)_0,hsla(280,50%,45%,.03)_80%,transparent_100%)] translate-x-1/2 -translate-y-1/2" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(200,70%,85%,.06)_0,hsla(200,50%,45%,.02)_80%,transparent_100%)]" />
        </div>

        {/* Mobile background gradient - simpler version for mobile */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict lg:hidden"
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,hsla(220,70%,85%,.1)_0%,transparent_50%)]" />
        </div>

        <section className="relative rounded-b-4xl mt-0 sm:mt-tab bg-background/50 backdrop-blur-sm border-b border-border/50">
          <div className="relative pt-16 sm:pt-24 md:pt-36 pb-8 sm:pb-12">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full rounded-b-2xl [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-4 py-12 lg:py-2 sm:px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  {/* Mobile-optimized announcement badge */}
                  <Link
                    href="/#"
                    className="hover:bg-background/80 dark:hover:border-t-border bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm group mx-auto flex w-fit items-center gap-2 sm:gap-4 rounded-full border border-border/50 p-1 pl-3 sm:pl-4 shadow-lg shadow-black/10 transition-all duration-300 dark:border-t-white/10 dark:shadow-zinc-950/50 hover:shadow-xl hover:scale-105 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Sparkles className="size-3 sm:size-4 text-primary" />
                      <span className="text-foreground font-medium">Introducing Bloggify</span>
                    </div>
                    <span className="dark:border-background block h-3 sm:h-4 w-0.5 border-l bg-border/50 dark:bg-zinc-600"></span>

                    <div className="bg-background/80 group-hover:bg-muted/80 size-5 sm:size-6 overflow-hidden rounded-full duration-500 backdrop-blur-sm">
                      <div className="flex w-10 sm:w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-5 sm:size-6">
                          <ArrowRight className="m-auto size-2.5 sm:size-3 text-primary" />
                        </span>
                        <span className="flex size-5 sm:size-6">
                          <ArrowRight className="m-auto size-2.5 sm:size-3 text-primary" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Mobile-optimized heading */}
                  <h1 className="max-w-7xl mx-auto text-balance bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-tight mt-6 sm:mt-8 lg:mt-16 px-2 sm:px-0">
                    The Mindful Scroll {" "}
                    <span className="block sm:inline bg-gradient-stop mx-auto max-w-9xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 font-bold leading-[1.1] tracking-tighter text-transparent mt-2 sm:mt-0">
                      Insights, Stories, and Inspiration
                    </span>
                  </h1>

                  {/* Mobile-optimized description */}
                  <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-balance text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
                    Dive into a world of ideas and inspiration with a curated blog that brings you
                    <span className="text-foreground font-medium"> thought-provoking insights</span>, captivating
                    stories, and practical tips on topics you care about.
                  </p>
                </AnimatedGroup>

                {/* Mobile-optimized CTA buttons */}
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
                  className="mt-8 sm:mt-12 flex flex-col sm:flex-row mb-6 sm:mb-8 items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                >
                  <div className="w-full sm:w-auto p-1 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/#" className="flex items-center justify-center gap-2">
                        <span className="text-nowrap">Start Blogging</span>
                      </Link>
                    </Button>
                  </div>

                  <Link href="/#" className="group w-full sm:w-auto">
                    <button className="w-full sm:w-auto rounded-xl flex flex-row justify-center px-6 sm:px-8 py-1 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-border/50">
                      <span className="flex items-center gap-2">
                        Explore Stories
                        <ArrowRight className="size-3 mt-1 sm:size-4 transition-transform duration-200 group-hover:translate-x-2" />
                      </span>
                    </button>
                  </Link>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}