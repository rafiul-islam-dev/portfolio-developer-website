
import { ArrowRight, ArrowUpRight, Github, Globe2 } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-band">
      <div className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">03 / Selected work</p>
            <h2 className="section-title mt-4">
              Things I've built<span className="text-accent">.</span>
            </h2>
          </div>

          <a
            href="https://github.com/rafiul-islam-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-accent"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="content-card group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#18232c]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} website overview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`project-visual ${project.visual} h-full`}>
                    <div className="project-dot-grid" />
                    <div className="project-monogram">
                      {project.monogram}
                      <span className="text-accent">.</span>
                    </div>
                  </div>
                )}

                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] text-white">
                  {project.number} / PROJECT
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/50 p-2.5 text-white transition hover:border-accent/50 hover:text-accent"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[.15em] text-accent">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-white"
                  >
                    Project details <ArrowRight size={15} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition hover:text-accent"
                  >
                    <Github size={16} /> Source code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-accent"
                    >
                      <Globe2 size={16} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
