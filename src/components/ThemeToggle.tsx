import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm" />
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative group p-2.5 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
      title={`Current: ${theme} (${currentTheme})`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 text-foreground transition-all duration-500 ${
            currentTheme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 text-foreground transition-all duration-500 ${
            currentTheme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-0'
          }`}
        />
        {/* System Icon (when theme is 'system' but currentTheme is light/dark) */}
        {theme === 'system' && (
          <Monitor
            className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 ${
              theme === 'system' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  );
};

export default ThemeToggle;
