import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
      document.body.className = theme
    }, [theme])
  
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
        {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  )
}