'use client'

import Link from "next/link"

import FAQ from "@/components/landing-page/faq"
import UsersTypes from "@/components/landing-page/user-types"
import Insights from "@/components/landing-page/insights"
import Steps from "@/components/landing-page/steps"
import HeroAction from "@/components/landing-page/hero-action"
import Header from "@/components/landing-page/header";
import { DiscordIcon, LinkedinIcon } from "@/components/ui/icons"
import { Card } from "../ui/card"

export default function LandingPage() {
  
  return (
    <div className="min-h-screen">
      <center>
        <div className="max-w-screen-xl">
          <Header />
          <main className="container relative mx-auto mt-32 md:mt-40 z-20">
            <section>
              <div className="items-center flex flex-col gap-4 md:gap-6">
                {/* Partner, Assistant, Analysis, Sidekick, Tool, Platform */}
                <h1 className="text-4xl md:text-5xl font-semibold mb-2 md:mb-3 max-w-[44rem]">Financial Research Companion Powered by AI</h1>
                <p className="text-lg md:text-xl mx-auto leading-relaxed text-accent-foreground/50 max-w-[50rem]">
                  Finyst does the research for you, so you can spend less time stressing over it and more time focusing on the things that really matter
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
              <Steps/>
            </section>

            <section className="mt-16 md:mt-20">
              <UsersTypes/>
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

            <footer className='mt-16 md:mt-20'>
              <div className="border-t flex justify-between items-center py-5 md:py-10">
                <div className="flex space-x-4 items-center">
                  <Link href="https://www.linkedin.com/company/finyst-ai/" className="p-3 border rounded-full bg-card"><LinkedinIcon className="h-4" /></Link>
                  <Link href="https://discord.gg/QHCGPrn3" className="p-3 border rounded-full bg-card"><DiscordIcon className="h-4" /></Link>
                </div>
                <div className="text-right text-sm md:text-md">
                  Finyst © 2024 All rights reserved.
                </div>
              </div>
          </footer>
          </main>
        </div>
      </center>
    </div>
  )
}
