"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-[1fr_auto] items-center gap-4 rounded-3xl border px-4 py-3 transition-all duration-300 md:grid-cols-[1fr_auto_1fr] md:px-5 ${
            scrolled
              ? "border-black/5 bg-white/95 shadow-xl shadow-black/10 backdrop-blur-xl"
              : "border-white/10 bg-black/30 shadow-lg shadow-black/10 backdrop-blur-xl"
          }`}
        >
          <a
            href="#home"
            aria-label="LPSTAV – domů"
            className="flex min-w-0 items-center justify-start"
          >
            <Image
              src="/images/logo.png"
              alt="LPSTAV S.R.O."
              width={240}
              height={90}
              priority
              className="h-auto w-[145px] object-contain sm:w-[170px] lg:w-[185px]"
            />
          </a>

          <nav
            aria-label="Hlavní navigace"
            className={`hidden items-center gap-2 rounded-2xl border p-1.5 text-sm font-bold transition md:flex md:-translate-x-10 ${
              scrolled
                ? "border-black/5 bg-slate-100/90 text-slate-800"
                : "border-white/10 bg-white/[0.06] text-white"
            }`}
          >
            <a
              href="#sluzby"
              className="rounded-xl px-5 py-3 transition hover:bg-yellow-500 hover:text-black"
            >
              Služby
            </a>

            <a
              href="#galerie"
              className="rounded-xl px-5 py-3 transition hover:bg-yellow-500 hover:text-black"
            >
              Galerie
            </a>

            <a
              href="#kontakt"
              className="rounded-xl px-5 py-3 transition hover:bg-yellow-500 hover:text-black"
            >
              Kontakt
            </a>
          </nav>

          <div className="flex justify-end">
            <a
              href="tel:+420774898947"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-black text-black shadow-lg shadow-yellow-500/25 transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-yellow-500/50 sm:px-7"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92V20A2 2 0 0 1 19.82 22C9.39 20.9 3.1 14.61 2 4.18A2 2 0 0 1 4 2H7.09A2 2 0 0 1 9.05 3.57L9.75 6.67A2 2 0 0 1 9.18 8.56L7.91 9.83A15.5 15.5 0 0 0 14.17 16.09L15.44 14.82A2 2 0 0 1 17.33 14.25L20.43 14.95A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="hidden sm:inline">Zavolat</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}