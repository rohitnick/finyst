'use client'

import { Inter as FontSans } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ReactElement } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={`flex flex-col h-screen justify-between ${cn(
          'font-sans antialiased',
          fontSans.variable
        )}`}
      >
        <Navbar />
        <main className="container relative mx-auto mt-32 md:mt-40 z-20 max-w-screen-xl">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
