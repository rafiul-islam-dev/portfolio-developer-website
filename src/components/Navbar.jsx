
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a
          href="/#home"
          className="flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-sm font-bold text-accent">
            RI.
          </span>

          <span className="text-sm font-semibold tracking-wide">
            {profile.name}
            <span className="ml-2 hidden font-normal text-zinc-500 sm:inline">
              / Portfolio
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={label} href={`/${href}`} className="nav-link">
              {label}
            </a>
          ))}

          <a
            href={profile.resume}
            download
            className="button-outline !px-4 !py-2"
          >
            Resume <ArrowUpRight size={15} />
          </a>

          <a href="/#contact" className="button-outline !px-4 !py-2">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 p-2 text-zinc-200 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/[0.07] bg-panel px-5 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={`/${href}`}
              onClick={() => setOpen(false)}
              className="block border-b border-white/[0.05] py-3 text-sm text-zinc-300 last:border-0"
            >
              {label}
            </a>
          ))}

          <a
            href={profile.resume}
            download
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center gap-2 py-2 text-sm text-accent"
          >
            Download resume <ArrowUpRight size={15} />
          </a>

          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center gap-2 py-2 text-sm text-accent"
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
