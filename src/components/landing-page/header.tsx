'use client'

import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react"
import { SunIcon, MoonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"


import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/icons"
import { googleFormLink } from "@/lib/constants";

export default function Header() {
    const [theme, setTheme] = useState('dark')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      document.body.className = theme
    }, [theme])
  
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 90) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   return  (<>
        <header className={`fixed top-0 left-0 right-0 z-50 shadow-md border-b border-border/20 font-medium text-xl ${isScrolled && 'bg-background'}`}>
            <div className="container mx-auto flex items-center justify-between py-4 max-w-screen-xl">
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
                <Image alt="background" src='/background-1.png' width={0} height={0} className="self-stretch w-full h-full mask-image-[linear-gradient(to_top,transparent,10%,white,90%,transparent)]"/>
            </div>)
        }
    </>)
}