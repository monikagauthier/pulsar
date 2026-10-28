"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/data/content";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-300",
        stuck
          ? "border-energy/10 bg-deep-900/80 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-shell items-center justify-between gap-6 px-6 md:px-14">
        <Link href="#topo" aria-label="PULSAR — início">
          <Logo className="w-[132px]" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-9">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-xs tracking-wide text-[#9fb0a2] transition-colors hover:text-[#eef2ea]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button href="#oferta" className="hidden md:inline-flex">
            Começar agora
          </Button>
          <button
            className="grid h-11 w-11 place-items-center rounded-sm border border-energy/20 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[1.5px] w-5 bg-[#eef2ea] before:absolute before:-top-[6px] before:block before:h-[1.5px] before:w-5 before:bg-[#eef2ea] after:absolute after:top-[6px] after:block after:h-[1.5px] after:w-5 after:bg-[#eef2ea]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="grid gap-3 border-b border-energy/10 bg-deep-900 px-6 pb-8 pt-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-1 font-display text-2xl text-[#eef2ea]"
            >
              {n.label}
            </Link>
          ))}
          <Button href="#oferta" className="mt-2 justify-center">
            Começar agora
          </Button>
        </div>
      )}
    </header>
  );
}
