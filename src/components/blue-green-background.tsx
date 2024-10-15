// ThemeMessage.tsx
import clsx from "clsx";
import { useEffect, useState } from "react";

export function BlueGreenBackground({className, ...props}: {className?: string}) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const updateTheme = () => {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
    };

    // Update theme on mount and add event listener
    updateTheme();
    window.addEventListener('themeChange', updateTheme);

    // Clean up event listener on unmount
    return () => window.removeEventListener('themeChange', updateTheme);
  }, []);

  return (
    <>
      { theme === 'dark' && (
        <div
          className={clsx(
            "absolute z-0 top-0 left-0 w-full h-full blur-[150px] md:blur-[450px] bg-cover bg-[url('/background.svg')]",
            className
          )}
          {...props}
        />
      )}
    </>
  );
}
