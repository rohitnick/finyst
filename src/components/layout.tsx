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
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
