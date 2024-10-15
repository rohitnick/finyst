import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState('dark')

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
    window.dispatchEvent(new Event('themeChange')); // Notify other components of theme change
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
        {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  )
}