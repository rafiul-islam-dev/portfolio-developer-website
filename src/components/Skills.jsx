
import { skillGroups } from "../data/portfolio";

const skillLogos = {
  HTML: "html5/html5-original",
  CSS: "css3/css3-original",
  JavaScript: "javascript/javascript-original",
  React: "react/react-original",
  "Next.js": "nextjs/nextjs-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-original",
  "Node.js": "nodejs/nodejs-original",
  "Express.js": "express/express-original",
  "REST APIs": null,
  Git: "git/git-original",
  GitHub: "github/github-original",
  "VS Code": "vscode/vscode-original",
  Vercel: "vercel/vercel-original",
};

function SkillLogo({ name }) {
  const baseName = name.replace(" (learning)", "");
  const logo = skillLogos[baseName];

  if (!logo) {
    return (
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-xs font-bold text-accent">
        API
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}.svg`}
      alt={`${baseName} logo`}
      loading="lazy"
      className="h-12 w-12 object-contain"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24 lg:py-28">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">02 / Toolkit</p>
          <h2 className="section-title mt-4">
            Technologies I use<span className="text-accent">.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-zinc-400">
          The tools I use to learn, build, and improve modern web experiences.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="content-card rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {group.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex min-h-[92px] flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-center transition duration-200 hover:border-accent/40 hover:bg-accent/[0.05]"
                >
                  <SkillLogo name={skill} />
                  <span className="text-xs font-medium text-zinc-300">
                    {skill.replace(" (learning)", "")}
                  </span>
                  {skill.includes("(learning)") && (
                    <span className="-mt-2 text-[10px] text-zinc-500">
                      Currently learning
                    </span>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
