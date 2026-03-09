import React from "react";

const SkillCategory = ({ title, skills, color }) => {
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
            className={`rounded-full px-4 py-2 text-sm font-medium border border-solid
            ${color}`}
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

      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-1">
        {/* Frontend */}
        <SkillCategory
          title="Frontend"
          color="bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-500/30 dark:text-blue-200"
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

        {/* Workflow / Tools */}
        <SkillCategory
          title="Tools / Workflow"
          color="bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-500/30 dark:text-green-200"
          skills={[
            "Git",
            "GitHub",
            "Responsive UI",
            "UX Thinking",
            "Debugging",
            "Version Control",
          ]}
        />

        {/* Backend / Data */}
        <SkillCategory
          title="Backend / Data"
          color="bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-900/20 dark:border-purple-500/30 dark:text-purple-200"
          skills={[
            "Python",
            "MongoDB",
            "API Integration",
            "Database Design",
            "REST APIs",
          ]}
        />

        {/* Professional Strengths */}
        <SkillCategory
          title="Professional Strengths"
          color="bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-900/20 dark:border-amber-500/30 dark:text-amber-200"
          skills={[
            "Analytical Thinking",
            "Attention to Detail",
            "Communication",
            "Leadership",
            "Adaptability",
            "Fast Typing",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
