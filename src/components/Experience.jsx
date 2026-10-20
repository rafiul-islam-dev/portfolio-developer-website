import { BookOpenCheck, Code2, Rocket } from "lucide-react";
const milestones = [
  { icon: BookOpenCheck, title: "Structured learning", text: "Building a foundation in web development through consistent practice with HTML, CSS, JavaScript, React, and Next.js." },
  { icon: Code2, title: "Project-based practice", text: "Applying concepts in personal projects such as DevStack and FitLog, with Bazar Dor currently in progress." },
  { icon: Rocket, title: "Next step", text: "Looking for an entry-level opportunity where I can learn from experienced developers and contribute to real products." },
];
export default function Experience() {
  return <section id="experience" className="section-band"><div className="section-shell py-24 lg:py-32"><p className="eyebrow">04 / Experience</p><h2 className="section-title mt-5">Learning by <span className="text-zinc-500">building.</span></h2><p className="mt-5 max-w-2xl leading-7 text-zinc-400">I am a fresher, so this section highlights my learning journey and practical project work rather than claiming professional employment I have not had.</p><div className="mt-10 grid gap-4 md:grid-cols-3">{milestones.map(({icon:Icon,title,text},i)=><article key={title} className="content-card rounded-2xl p-6"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/[.07] text-accent"><Icon size={20}/></span><span className="font-mono text-xs text-zinc-600">0{i+1}</span></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p></article>)}</div></div></section>;
}
