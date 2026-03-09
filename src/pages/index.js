import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";

import featuredProject1 from "../../public/images/articles/pagination component in reactjs.jpg";
import featuredProject2 from "../../public/images/articles/create loading screen in react js.jpg";

const FramerImage = motion(Image);

function FeaturedProjectCard({ img, title, summary, link }) {
  return (
    <li
      className="relative w-full rounded-2xl border border-solid border-dark bg-light p-4
      dark:border-light dark:bg-dark"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl
        bg-dark dark:bg-light"
      />

      <Link
        href={link}
        className="inline-block w-full overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </Link>

      <div className="mt-4">
        <Link href={link}>
          <h3 className="text-xl font-bold capitalize hover:underline md:text-lg sm:text-base">
            {title}
          </h3>
        </Link>

        <p className="mt-2 text-sm font-medium text-dark/80 dark:text-light/80 sm:text-xs">
          {summary}
        </p>

        <Link
          href={link}
          className="mt-4 inline-flex items-center text-base font-semibold underline underline-offset-4"
        >
          View Project
        </Link>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Calderaro | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Jonathan Calderaro, a junior frontend developer building responsive web applications with JavaScript, React, Next.js, and modern UI tools."
        />
      </Head>

      <main className="w-full text-dark dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <section className="relative flex min-h-[72vh] w-full items-center md:min-h-fit md:py-8">
            <div className="flex w-full items-center justify-between gap-16 md:flex-col md:gap-12">
              <div className="flex w-[45%] justify-center md:w-full">
                <div
                  className="relative w-[68%] h-max rounded-2xl border-2 border-solid border-dark
                  bg-light p-4 dark:border-light dark:bg-dark md:w-[58%] sm:w-[72%]"
                >
                  <div
                    className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl
                    bg-dark dark:bg-light"
                  />
                  <Image
                    src={profilePic}
                    alt="Jonathan Calderaro portrait"
                    className="h-auto w-full rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                  />
                </div>
              </div>

              <div className="flex w-[55%] flex-col items-start self-center lg:w-full lg:items-center lg:text-center">
                <AnimatedText
                  text="Jonathan Calderaro"
                  className="!text-left !text-7xl xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />

                <h1 className="mt-3 w-full text-left text-3xl font-semibold uppercase tracking-wide text-dark/80 dark:text-light/80 lg:text-center md:text-2xl sm:text-lg">
                  Junior Frontend Developer
                </h1>

                <p className="my-5 w-full text-left text-lg font-medium leading-relaxed md:text-base sm:!text-sm lg:text-center">
                  I build responsive web applications using JavaScript, React,
                  Next.js, and modern frontend tools.
                </p>

                <p className="mb-7 w-full text-left text-lg font-medium leading-relaxed md:text-base sm:!text-sm lg:text-center">
                  I’m focused on clean user experiences, practical projects, and
                  continued growth in full-stack development.
                </p>

                <div className="mt-2 flex items-center self-start lg:self-center sm:flex-col sm:items-stretch sm:gap-3">
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center justify-center rounded-lg border-2 border-solid bg-dark p-3 px-7 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2.5 md:px-5 md:text-base"
                    download
                  >
                    View Resume
                    <LinkArrow className="ml-1 !w-6 md:!w-4" />
                  </Link>

                  <Link
                    href="mailto:your-email@example.com"
                    className="ml-4 flex items-center justify-center rounded-lg border-2 border-solid border-dark p-3 px-7 text-lg font-semibold capitalize text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2.5 md:px-5 md:text-base sm:ml-0"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 inline-block w-24 md:hidden">
              <Image
                className="relative h-auto w-full"
                src={lightBulb}
                alt="Decorative light bulb graphic"
              />
            </div>
          </section>

          <div className="my-10 h-px w-full bg-dark/20 dark:bg-light/30" />

          <section className="w-full py-6">
            <div className="mb-10 flex w-full items-end justify-between gap-6 md:flex-col md:items-start">
              <div>
                <h2 className="text-4xl font-bold md:text-3xl sm:text-2xl">
                  Featured Projects
                </h2>
                <p className="mt-2 text-base font-medium text-dark/75 dark:text-light/75 md:text-sm">
                  A few selected builds and UI-focused experiments.
                </p>
              </div>

              <Link
                href="/projects"
                className="text-lg font-semibold underline underline-offset-4 md:text-base"
              >
                View All Projects
              </Link>
            </div>

            <ul className="grid w-full grid-cols-2 gap-8 md:grid-cols-1">
              <FeaturedProjectCard
                img={featuredProject1}
                title="React pagination component"
                summary="A focused frontend build exploring reusable UI structure, state handling, and clean component design in React."
                link="/projects"
              />

              <FeaturedProjectCard
                img={featuredProject2}
                title="Custom loading screen patterns"
                summary="An interface experiment centered on user feedback, visual polish, and responsive loading states in modern React apps."
                link="/projects"
              />
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
}
