'use client'

import Link from 'next/link'
import { LinkedinIcon, DiscordIcon } from '@/components/ui/icons'

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-20 border-t">
      <div className="container max-w-screen-xl flex justify-between items-center py-5 md:py-10">
        <div className="flex space-x-4 items-center">
          <Link
            href="https://www.linkedin.com/company/finyst-ai/"
            target="_blank"
            className="p-3 border rounded-full bg-card"
          >
            <LinkedinIcon className="h-4" />
          </Link>
          <Link
            href="https://discord.gg/QHCGPrn3"
            target="_blank"
            className="p-3 border rounded-full bg-card"
          >
            <DiscordIcon className="h-4" />
          </Link>
        </div>
        <div className="text-right text-sm md:text-md">
          Finyst © 2024 All rights reserved.
        </div>
      </div>
    </footer>
  )
}
