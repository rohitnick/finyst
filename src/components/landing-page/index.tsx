'use client'

import { SunIcon, MoonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react"


import FAQ from "@/components/landing-page/faq"
import UsersTypes from "@/components/landing-page/user-types"
import Insights from "@/components/landing-page/insights"
import Steps from "@/components/landing-page/steps"
import HeroAction from "@/components/landing-page/hero-action"
import { Button } from "@/components/ui/button"
import { DiscordIcon, LinkedinIcon, Logo } from "@/components/ui/icons"
import { googleFormLink } from "@/lib/constants";

export default function LandingPage() {
  const [theme, setTheme] = useState('dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='min-h-screen'>
      <center>
        <div className="max-w-screen-xl">
          <header className="fixed top-0 left-0 right-0 z-50 shadow-md border-b border-border/20 font-medium text-xl">
            <div className="container mx-auto flex items-center justify-between py-6 max-w-screen-xl">
              <div className="flex items-center">
                <Logo className="h-8" />
              </div>
              {/* <nav className="hidden md:flex space-x-4 border border-border/50 rounded-full py-3 px-8 items-center gap-5">
                <Link href="#" className="hover:text-primary">Blog</Link><span className="w-1 h-1 bg-white rounded-full"></span>
                <Link href="#" className="hover:text-primary">Discord</Link><span className="w-1 h-1 bg-white rounded-full"></span>
                <Link href="#" className="hover:text-primary">Slack</Link><span className="w-1 h-1 bg-white rounded-full"></span>
                <Link href="#" className="hover:text-primary">Contact</Link>
              </nav> */}
              <div className="flex items-center space-x-4">
                <Button onClick={toggleTheme} variant="ghost" size="icon">
                  {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </Button>
                <Link target="_blank" href={googleFormLink}>
                <Button variant="outline" size="lg" className='hidden bg-transparent md:inline-flex rounded-full border'>
                  Get Started
                </Button>
                </Link>
                <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" variant="ghost" size="icon">
                  <HamburgerMenuIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {isMenuOpen && (
              <nav className="md:hidden p-4 space-y-2 bg-background/95">
                {/* <Link href="#" className="block hover:text-yellow-500">Blog</Link>
                <Link href="#" className="block hover:text-yellow-500">Discord</Link>
                <Link href="#" className="block hover:text-yellow-500">Slack</Link>
                <Link href="#" className="block hover:text-yellow-500">Contact</Link> */}
                <Button variant="outline">
                  Get Started
                </Button>
              </nav>
            )}
          </header>

          { theme === 'dark' &&
            (<div className="absolute top-0 right-0 z-0 w-full">
              <Image alt="background" src='/background.png' width={0} height={0} className="self-stretch w-full h-full"/>
            </div>)
          }

          <main className="container relative mx-auto mt-44 z-20">
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
                  <Link href="#" className="p-3 border rounded-full bg-card"><LinkedinIcon className="h-4" /></Link>
                  <Link href="#" className="p-3 border rounded-full bg-card"><DiscordIcon className="h-4" /></Link>
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
