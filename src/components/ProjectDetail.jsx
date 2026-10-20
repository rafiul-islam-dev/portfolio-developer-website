
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/portfolio";

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section-shell min-h-screen py-40">
        <p className="eyebrow">Project not found</p>
        <h1 className="section-title mt-4">
          This project page does not exist.
        </h1>
        <a
          href="/#projects"
          className="button-primary mt-8 inline-flex"
        >
          <ArrowLeft size={16} />
          Back to projects
        </a>
      </section>
    );
  }

  return (
    <section className="section-shell min-h-screen pb-24 pt-32">
      <a
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-accent"
      >
        <ArrowLeft size={16} />
        Back to all projects
      </a>

      {/* Actual project screenshot */}
      <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#18232c]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} website overview`}
            className="block max-h-[650px] min-h-[260px] w-full object-cover object-top sm:min-h-[360px]"
          />
        ) : (
          <div
            className={`project-visual ${project.visual} relative min-h-[260px] sm:min-h-[360px]`}
          >
            <div className="project-dot-grid" />
            <span className="project-monogram">
              {project.monogram}
              <span className="text-accent">.</span>
            </span>
          </div>
        )}

        <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/60 px-3 py-2 font-mono text-xs text-white">
          {project.number} / PROJECT
        </span>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <p className="eyebrow">
            {project.category} · {project.status}
          </p>

          <h1 className="section-title mt-4">
            {project.name}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {project.description}
          </p>

          <h2 className="mt-10 text-xl font-semibold">
            Project highlights
          </h2>

          <ul className="mt-4 space-y-3">
            {project.details.map((detail) => (
              <li
                key={detail}
                className="flex gap-3 text-sm leading-7 text-zinc-400"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <aside className="content-card h-fit rounded-2xl p-6">
          <h2 className="font-semibold">Built with</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-7 w-full"
          >
            <Github size={16} />
            View source
            <ArrowUpRight size={15} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="button-outline mt-3 w-full"
            >
              Live demo
              <ArrowUpRight size={15} />
            </a>
          )}
        </aside>
      </div>
    </section>
  );
}
