'use client'

import { useState, useEffect } from "react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"


import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/icons"
import { ThemeToggle } from "@/components/theme-toggle";
import { BlueGreenBackground } from "@/components/blue-green-background";
import Link from "next/link"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [_theme, setTheme] = useState('dark');

    useEffect(() => {
        // Read the current theme from localStorage and set it in state
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(globalThis.scrollY > 70);
        };

        globalThis.scroll
        globalThis.addEventListener('scroll', handleScroll);

        return () => {
            globalThis.removeEventListener('scroll', handleScroll);
        };
    }, []);

   return  (<>
        <header className={`fixed top-0 left-0 right-0 z-50 shadow-md border-b border-border/20 font-medium text-xl ${isScrolled && 'bg-background'}`}>
            <div className="container mx-auto flex items-center justify-between py-4 max-w-screen-xl">
            <div className="flex items-center">
                <Link href="/">
                    <Logo className="h-8" />
                </Link>
            </div>
            {/* <nav className="hidden md:flex space-x-4 border border-border/50 rounded-full py-3 px-8 items-center gap-5">
                <Link href="#" className="hover:text-primary">Blog</Link><span className="w-1 h-1 bg-white rounded-full"></span>
                <Link href="#" className="hover:text-primary">Discord</Link><span className="w-1 h-1 bg-white rounded-full"></span>
                <Link href="#" className="hover:text-primary">Slack</Link><span className="w-1 h-1 bg-white rounded-full"></span>
                <Link href="#" className="hover:text-primary">Contact</Link>
            </nav> */}
            <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Button variant="outline" size="lg" className='hidden bg-transparent md:inline-flex rounded-full border'>
                    Coming Soon
                </Button>
                <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" variant="ghost" size="icon">
                    <HamburgerMenuIcon className="h-5 w-5" />
                </Button>
            </div>
            </div>
            {isMenuOpen && (
            <nav className="md:hidden p-4 space-y-2 bg-transparent">
                {/* <Link href="#" className="block hover:text-yellow-500">Blog</Link>
                <Link href="#" className="block hover:text-yellow-500">Discord</Link>
                <Link href="#" className="block hover:text-yellow-500">Slack</Link>
                <Link href="#" className="block hover:text-yellow-500">Contact</Link> */}
                <Button variant="outline">
                    Coming Soon
                </Button>
            </nav>
            )}

        </header>

        <BlueGreenBackground />
    </>)
}