
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative grid min-h-screen items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.15fr_.85fr]"
    >
      <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-72 w-72 rounded-full bg-accent/[0.07] blur-[100px]" />

      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2 text-xs text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          FRESHER FULL STACK WEB DEVELOPER
        </div>

        <p className="mb-4 text-sm text-zinc-400">
          Hi, I'm {profile.name}.
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[76px]">
          I build digital
          <span className="mt-2 block text-zinc-500">experiences that</span>
          <span className="mt-2 block text-accent">make an impact.</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="/#projects" className="button-primary">
            Explore my work <ArrowDownRight size={17} />
          </a>

          <a href="/#contact" className="button-outline">
            Get in touch <ArrowUpRight size={16} />
          </a>

          <a href={profile.resume} download className="button-outline">
            Download resume <Download size={16} />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5 text-zinc-500">
          <span className="text-[10px] uppercase tracking-[.22em]">
            Find me on
          </span>

          <span className="h-px w-8 bg-zinc-700" />

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="icon-link"
          >
            <Github size={19} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="icon-link"
          >
            <Linkedin size={19} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="icon-link"
          >
            <Mail size={19} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[440px]">
        <div className="absolute inset-8 rounded-full bg-accent/[0.12] blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl">
          <img
            src={profile.photo}
            alt={`${profile.name} — profile portrait`}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
          />

          <div className="absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-[#101820] via-[#101820]/90 to-transparent px-6 pb-6 pt-16">
            <p className="text-xl font-semibold text-white">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-zinc-300">{profile.role}</p>
            <p className="mt-2 text-xs text-accent">{profile.location}</p>
          </div>
        </div>

        <div className="absolute -left-4 top-10 rounded-xl border border-white/10 bg-panel/95 px-4 py-3 shadow-xl sm:-left-8">
          <p className="text-xs font-medium text-white">Learn · Build · Improve</p>
          <p className="mt-1 text-[11px] text-zinc-500">
            Growing through projects
          </p>
        </div>
      </div>

      <a
        href="/#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.25em] text-zinc-600 transition hover:text-zinc-300 lg:flex"
      >
        Scroll to explore <ArrowDownRight size={14} />
      </a>
    </section>
  );
}
