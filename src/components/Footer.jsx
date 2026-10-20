import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07]">
      <div className="container-shell flex flex-col gap-4 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="font-semibold tracking-wide text-zinc-300">{profile.name}<span className="text-accent">.</span></a>
        <p>Designed &amp; built with care · © {new Date().getFullYear()} {profile.name}</p>
        <a href="#home" className="inline-flex items-center gap-2 transition hover:text-accent">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
