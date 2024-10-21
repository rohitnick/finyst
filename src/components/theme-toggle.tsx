import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
  const { theme, setTheme} = useTheme()

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
        {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  )
}