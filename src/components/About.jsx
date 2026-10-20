
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { profile } from "../data/portfolio";

const highlights = [
  {
    icon: Code2,
    title: "Build with purpose",
    description: "Turning ideas into practical web projects.",
  },
  {
    icon: Lightbulb,
    title: "Stay curious",
    description: "Exploring technologies and solving problems.",
  },
  {
    icon: Rocket,
    title: "Keep improving",
    description: "Learning by building and refining my code.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-band">
      <div className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow">01 / About me</p>

            <h2 className="section-title mt-4">
              A little about
              <span className="block text-zinc-500">what I do.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="content-card rounded-xl p-5"
                >
                  <Icon size={21} className="text-accent" />

                  <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
