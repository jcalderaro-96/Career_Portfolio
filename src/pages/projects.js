import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import proj1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";

const FramerImage = motion(Image);

const CapstoneProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative mx-auto flex w-[88%] items-center justify-between rounded-3xl rounded-br-2xl
      border border-solid border-dark bg-light p-8
      shadow-[0_12px_30px_rgba(0,0,0,0.12)] dark:border-light dark:bg-dark
      dark:shadow-[0_12px_30px_rgba(255,255,255,0.05)]
      lg:w-full lg:flex-col lg:p-6 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl
        bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-[48%] cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          priority
        />
      </Link>

      <div className="flex w-[52%] flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-5">
        <span className="text-base font-semibold text-primary dark:text-primaryDark md:text-sm">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="underline-offset-4 hover:underline"
        >
          <h2 className="my-3 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl">
            {title}
          </h2>
        </Link>

        <p className="my-2 text-base font-medium leading-relaxed text-dark/80 dark:text-light/80 md:text-sm">
          {summary}
        </p>

        <div className="mt-4 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-9"
            aria-label={`${title} github link`}
          >
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark px-5 py-2 text-base font-semibold text-light
            dark:bg-light dark:text-dark sm:px-4 sm:text-sm"
            aria-label={title}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative mx-auto flex w-[92%] flex-col items-center justify-center rounded-2xl rounded-br-2xl
      border border-solid border-dark bg-light p-5
      shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-light dark:bg-dark
      dark:shadow-[0_8px_24px_rgba(255,255,255,0.04)] xs:w-full xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl
        bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-sm font-semibold text-primary dark:text-primaryDark">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="underline-offset-4 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold lg:text-lg">
            {title}
          </h2>
        </Link>

        <p className="mt-2 text-sm font-medium leading-relaxed text-dark/80 dark:text-light/80">
          {summary}
        </p>

        <div className="mt-4 flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-base font-semibold underline underline-offset-4 md:text-sm"
            aria-label={title}
          >
            Visit Project
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-7 md:w-6"
            aria-label={`${title} github link`}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectListItem = ({ title, summary, status, link }) => {
  return (
    <motion.li
      initial={{ y: 60 }}
      whileInView={{ y: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative my-3 flex w-full items-start justify-between rounded-xl border border-solid border-dark
      bg-light px-6 py-6 text-dark dark:border-light dark:bg-dark dark:text-light
      md:flex-col md:gap-3"
    >
      <div className="w-[78%] md:w-full">
        <Link href={link} className="underline-offset-4 hover:underline">
          <h3 className="text-xl font-bold md:text-lg sm:text-base">{title}</h3>
        </Link>
        <p className="mt-2 text-base font-medium leading-relaxed text-dark/80 dark:text-light/80 sm:text-sm">
          {summary}
        </p>
      </div>

      <span className="min-w-max pl-4 text-base font-semibold text-primary dark:text-primaryDark md:pl-0 md:text-sm">
        {status}
      </span>
    </motion.li>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Jonathan Calderaro</title>
        <meta
          name="description"
          content="Browse development projects by Jonathan Calderaro, including featured builds, UI-focused work, and in-progress portfolio pieces."
        />
      </Head>

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="mb-10 h-px w-full bg-dark/20 dark:bg-light/30" />

          <AnimatedText
            text="Projects That Reflect How I Build"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl md:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
          />

          {/* Capstone */}
          <section className="w-full">
            <div className="mb-10">
              <h2 className="text-6xl font-bold md:text-5xl sm:text-4xl">
                Capstone Project
              </h2>
              <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-dark/75 dark:text-light/75 md:text-base sm:text-sm">
                A larger build intended to represent the strongest combination
                of frontend structure, responsive design, and practical
                implementation in my portfolio.
              </p>
            </div>

            <CapstoneProject
              type="Capstone Build"
              title="Primary Portfolio Project Placeholder"
              summary="This section is reserved for my strongest completed project. It will highlight the project’s purpose, the technologies used, the problems it solves, and the decisions that best reflect how I approach frontend development and product structure."
              img={proj1}
              link="#"
              github="#"
            />
          </section>

          <div className="my-16 h-px w-full bg-dark/20 dark:bg-light/30" />

          {/* Featured Secondary */}
          <section className="w-full">
            <div className="mb-10 flex w-full items-end justify-between gap-6 md:flex-col md:items-start">
              <div>
                <h2 className="text-6xl font-bold md:text-5xl sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-dark/75 dark:text-light/75 md:text-base sm:text-sm">
                  Additional projects that showcase responsive UI work,
                  component structure, and practical frontend problem solving.
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-1">
              <FeaturedProject
                type="Featured Build"
                title="Secondary Project Placeholder One"
                summary="Reserved for a polished project that demonstrates clean interface design, stronger component organization, and real development workflow."
                img={proj2}
                link="#"
                github="#"
              />

              <FeaturedProject
                type="Featured Build"
                title="Secondary Project Placeholder Two"
                summary="Reserved for a supporting project that adds range to the portfolio and highlights additional technical or design strengths."
                img={proj3}
                link="#"
                github="#"
              />
            </div>
          </section>

          <div className="my-16 h-px w-full bg-dark/20 dark:bg-light/30" />

          {/* Additional Projects List */}
          <section className="w-full">
            <h2 className="text-6xl font-bold text-center md:text-5xl sm:text-4xl">
              Additional Projects
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-medium leading-relaxed text-dark/75 dark:text-light/75 md:text-base sm:text-sm">
              A running list of additional builds, experiments, and smaller
              projects that contribute to the overall portfolio.
            </p>

            <ul className="mt-12 flex w-full flex-col items-center">
              <ProjectListItem
                title="Project Placeholder Three"
                summary="A smaller project focused on interface structure, state handling, and clean component composition."
                status="Planned"
                link="#"
              />

              <ProjectListItem
                title="Project Placeholder Four"
                summary="A build intended to show practical frontend problem solving and stronger responsiveness across screen sizes."
                status="Planned"
                link="#"
              />

              <ProjectListItem
                title="Project Placeholder Five"
                summary="A smaller supporting project that will help round out the portfolio with another real-world use case."
                status="Planned"
                link="#"
              />

              <ProjectListItem
                title="Project Placeholder Six"
                summary="An experimental or utility-focused build that demonstrates continued growth, iteration, and technical curiosity."
                status="Planned"
                link="#"
              />

              <ProjectListItem
                title="Project Placeholder Seven"
                summary="A future project slot reserved for another completed build once additional portfolio work is ready to be showcased."
                status="Planned"
                link="#"
              />
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
}
