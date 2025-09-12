"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    const isDark = (theme ?? resolvedTheme) === "dark";
    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-sm card-hover"
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"} mode</span>
        </button>
    );
}