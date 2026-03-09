import React from "react";

const SkillCategory = ({ title, skills }) => {
  return (
    <div
      className="rounded-2xl border border-solid border-dark bg-light p-8
      shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-light dark:bg-dark
      dark:shadow-[0_8px_24px_rgba(255,255,255,0.04)]"
    >
      <h3 className="mb-5 text-2xl font-bold md:text-xl sm:text-lg">{title}</h3>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-solid border-dark px-4 py-2 text-base font-medium
            dark:border-light md:text-sm sm:text-xs"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="w-full py-8">
      <div className="mb-12 text-center">
        <h2 className="text-6xl font-bold md:text-5xl sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-relaxed text-dark/75 dark:text-light/75 md:text-base sm:text-sm">
          Core tools, technologies, and workflows I’m using to build responsive
          web applications and continue growing as a frontend developer.
        </p>
      </div>

      <div className="grid w-full grid-cols-3 gap-8 lg:grid-cols-1">
        <SkillCategory
          title="Frontend"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
          ]}
        />

        <SkillCategory
          title="Backend / Data"
          skills={[
            "Python",
            "MongoDB",
            "API Integration",
            "Database Design",
            "REST APIs",
          ]}
        />

        <SkillCategory
          title="Tools / Workflow"
          skills={[
            "Git",
            "GitHub",
            "Responsive UI",
            "UX Thinking",
            "Debugging",
            "Version Control",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
