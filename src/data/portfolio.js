export const profile = {
  name: "Rafiul Islam",
  role: "Full Stack Web Developer",
  phone: "01767184101",
  location: "Bangladesh",
  photo: "/images/rafiul-profile.png",
  resume: "/resume.pdf",
  email: "rafiul07islam@gmail.com",
  github: "https://github.com/rafiul-islam-dev",
  // Replace this with your actual LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/in/rafiulislam0/", // Replace with your real profile URL before publishing
  intro:
    "I turn ideas into clean, responsive web experiences with thoughtful UI, modern tools, and a focus on usability.",


  about:
    "My programming journey started with curiosity about how websites work and grew into a passion for building useful digital experiences. I enjoy creating clean, responsive interfaces, solving problems, and learning modern web technologies through hands-on projects. Beyond coding, I value creativity, continuous learning, and exploring new ideas. I'm a curious, patient, and growth-minded developer who believes every project is an opportunity to improve.",


};

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel clear and intuitive.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Application logic and API foundations.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database & Tools",
    description: "Tools that support a reliable workflow.",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export const projects = [
  {
    number: "01",

    image: "/images/projects/devstack.PNG",

    name: "DevStack",
    category: "Developer productivity",
    description:
      "A React-based web application that helps developers explore technologies and build a development stack that suits their needs.",
    tags: ["React", "JavaScript", "Responsive UI"],
    github: "https://github.com/rafiul-islam-dev/DevStack-",
    demo: "https://fastidious-lollipop-8d7094.netlify.app/",
    monogram: "DS",
    visual: "project-visual-lime",
    slug: "devstack",
    status: "Project",
    details: ["Helps developers explore technology options", "React-based component-driven interface", "Responsive presentation for different screen sizes"],
  },
  {
    number: "02",
    name: "FitLog",
    category: "Workout library",
    description:
      "A responsive workout library built with Next.js and Tailwind CSS, designed to help users browse workouts and explore exercise details.",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/rafiul-islam-dev/A-responsive-Fit-Log-website",
    demo: "https://fit-log-website-alpha.vercel.app/",
    monogram: "FL",
    visual: "project-visual-blue",
    slug: "fitlog",
    status: "Project",
    details: ["Responsive layout for desktop and mobile", "Workout-library presentation", "Built with reusable UI components"],

    image: "/images/projects/fitlog.PNG",

  },
  {
    number: "03",
    name: "Bazar Dor",
    category: "Market price application",
    description: "An in-progress concept for presenting product and market price information in a clear, accessible interface.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/rafiul-islam-dev/Bazar-Dor",
    demo: "https://bazar-dor-virid.vercel.app/",
    monogram: "BD",
    visual: "project-visual-lime",
    slug: "bazar-dor",
    status: "Project",
    details: ["Focused on clear market-price information", "Feature set and data source are still being developed", "Repository link should be updated to the project repository"],

    image: "/images/projects/bazar-dor.PNG",

  },
];
