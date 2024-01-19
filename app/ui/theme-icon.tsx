'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

export default function ThemeIcon() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button className="text-black hover:rotate-12" onClick={toggleTheme}>
      <span className="sr-only">Toggle theme</span>

      <SunIcon
        className="block size-7 text-yellow-600 dark:hidden"
        aria-hidden="true"
      />
      <MoonIcon
        className="hidden size-7 text-gray-600 dark:block"
        aria-hidden="true"
      />
    </button>
  );
}
