"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../components/theme-toggle";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#generate", label: "Generate" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#support", label: "Support" },
  
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Close on ESC or click outside
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Smooth scroll + close menu
  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
    // also update URL hash without jumping
    history.replaceState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-black dark:bg-white" />
            <span className="font-semibold">Cartolinks</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-80">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={go(n.href)} className="hover:opacity-100">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile trigger */}
            <button
              className="md:hidden p-2 rounded-lg border border-black/10 dark:border-white/10"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div className={`absolute inset-0 transition-opacity ${open ? "opacity-100" : "opacity-0"} bg-black/40`} />
        {/* panel */}
        <div
          ref={sheetRef}
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white dark:bg-zinc-900 border-l border-black/10 dark:border-white/10
                      transition-transform ${open ? "translate-x-0" : "translate-x-full"} p-4`}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button
              className="p-2 rounded-lg border border-black/10 dark:border-white/10"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={go(n.href)}
                className="rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
