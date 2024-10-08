'use client'

import Link from "next/link"

import FAQ from "@/components/landing-page/faq"
import UsersTypes from "@/components/landing-page/user-types"
import Insights from "@/components/landing-page/insights"
import Steps from "@/components/landing-page/steps"
import HeroAction from "@/components/landing-page/hero-action"
import Header from "@/components/landing-page/header";
import { DiscordIcon, LinkedinIcon } from "@/components/ui/icons"

export default function LandingPage() {
  
  return (
    <div className="min-h-screen">
      <center>
        <div className="max-w-screen-xl">
          <Header />

          <main className="container relative mx-auto mt-32 md:mt-40 z-20">
            <section>
              <div className="text-center flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">Financial Research with<br />Power of AI</h1>
                <p className="text-xl mx-auto leading-relaxed text-muted-foreground">
                  Finyst does the research for you, so you can spend less time stressing over it <br/> and more time focusing on the things that really matter
                </p>
              </div>
            </section>

            <section className="mt-20">
              <HeroAction />
            </section>

            <section className="mt-20">
              <Insights />
            </section>

            <section className="mt-20 border py-12 px-8 rounded">
              <Steps/>
            </section>

            <section className="mt-20">
              <UsersTypes/>
            </section>

            <section className="mt-20">
              <FAQ />
            </section>

            <footer className='mt-20'>
              <div className="border-t flex justify-between items-center py-10">
                <div className="flex space-x-4 items-center">
                  <Link href="https://www.linkedin.com/company/finyst-ai/" className="p-3 border rounded-full bg-card"><LinkedinIcon className="h-4" /></Link>
                  <Link href="https://discord.gg/QHCGPrn3" className="p-3 border rounded-full bg-card"><DiscordIcon className="h-4" /></Link>
                </div>
                <div className="text-right">
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
