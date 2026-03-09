import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";

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

      <TransitionEffect />

      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Jonathan Calderaro portrait"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Jonathan Calderaro"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <h1 className="mt-2 w-full text-left text-2xl font-semibold uppercase tracking-wide text-dark/80 dark:text-light/80 lg:text-center md:text-xl sm:text-lg">
                Junior Frontend Developer
              </h1>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I build responsive web applications using JavaScript, React,
                Next.js, and modern frontend tools.
              </p>

              <p className="mb-6 text-base font-medium md:text-sm sm:!text-xs">
                I’m focused on creating clean user experiences, strengthening my
                full-stack skills, and building projects that reflect real
                development work.
              </p>

              <div className="mt-2 flex items-center self-start lg:self-center sm:flex-col sm:items-stretch sm:gap-3">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center justify-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  download
                >
                  View Resume
                  <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:your-email@example.com"
                  className="ml-4 flex items-center justify-center rounded-lg border-2 border-solid border-dark p-2.5 px-6 text-lg font-semibold capitalize text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base sm:ml-0"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Decorative light bulb graphic"
          />
        </div>
      </article>
    </>
  );
}
