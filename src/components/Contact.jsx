import { useState } from "react";
import { ArrowUpRight, Check, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="section-shell py-24 lg:py-32">
      <div className="contact-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">04 / Contact</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Have an idea?<br /><span className="text-zinc-500">Let&apos;s build it.</span></h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">I&apos;m happy to connect with people who care about building useful things for the web.</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col">
            <button type="button" onClick={copyEmail} className="button-primary">{copied ? <Check size={17} /> : <Mail size={17} />}{copied ? "Email copied" : "Copy email address"}</button>
            <a href={profile.github} target="_blank" rel="noreferrer" className="button-outline"><Github size={17} /> GitHub profile <ArrowUpRight size={15} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-outline"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="relative mt-12 border-t border-white/10 pt-5 text-xs text-zinc-500">Open to meaningful conversations, collaboration, and new opportunities.</div>
      </div>
    </section>
  );
}
