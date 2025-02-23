'use client'

import AnimatedText from '../ui/animated-text'
import { Card } from '@/components/ui/card'
import FAQ from '@/components/landing-page/faq'
import HeroAction from '@/components/landing-page/hero-action'
import Insights from '@/components/landing-page/insights'
import Steps from '@/components/landing-page/steps'
import UsersTypes from '@/components/landing-page/user-types'

export default function LandingPage() {
  // Partner, Assistant, Analysis, Sidekick, Tool, Platform
  const words = ["Analysis", "Companion", "Assistant", "Navigator"];
  const colors = [
    "text-yellow-500",
    "text-yellow-500",
    "text-yellow-500",
    "text-yellow-500",
  ];

  return (
    <main className="container relative mx-auto mt-32 md:mt-40 z-20 max-w-screen-xl">
      <center>
        <section>
          <div className="flex items-center flex-col gap-4 md:gap-6">
            
            <AnimatedText pretext="Financial Research" words={words} posttext="Powered by AI"  colors={colors} />
            <p className="text-lg md:text-xl mx-auto leading-relaxed text-accent-foreground/50 max-w-[50rem]">
              Finyst does the research for you, so you can spend less time
              stressing over it and more time focusing on the things that really
              matter
            </p>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <Card className="max-w-2xl mx-auto md:p-10 md:border-none rounded-3xl drop-shadow-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition duration-300">
            <HeroAction />
          </Card>
        </section>

        <section className="mt-16 md:mt-20">
          <Insights />
        </section>

        <section className="mt-16 md:mt-20">
          <Steps />
        </section>

        <section className="mt-16 md:mt-20">
          <UsersTypes />
        </section>

        <section className="mt-16 md:mt-20">
          <FAQ />
        </section>

        <section className="mt-16 md:mt-20">
          <div className="mx-auto grid items-center md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1 md:gap-2">
              <h1 className="text-3xl lg:text-4xl font-bold md:text-left">
                Start Your Journey to Smarter Investing with AI
              </h1>
              <p className="text-lg md:text-xl md:text-left text-muted-foreground">
                Join the waitlist today!
              </p>
            </div>
            <div className="flex justify-end">
              <HeroAction />
            </div>
          </div>
        </section>
      </center>
    </main>
  )
}
