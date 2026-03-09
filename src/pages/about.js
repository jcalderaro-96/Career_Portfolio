import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const FramerImage = motion(Image);

export default function About() {
  return (
    <>
      <Head>
        <title>About | Jonathan Calderaro</title>
        <meta
          name="description"
          content="Learn more about Jonathan Calderaro, a junior frontend developer focused on responsive web applications, modern UI development, and continued growth in full-stack development."
        />
      </Head>

      <main className="w-full text-dark dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="mb-10 h-px w-full bg-dark/20 dark:bg-light/30" />

          <section className="relative flex min-h-[72vh] w-full items-center md:min-h-fit md:py-8">
            <div className="flex w-full items-center justify-between gap-16 md:flex-col md:gap-12">
              <div className="flex w-[55%] flex-col items-start self-center lg:w-full lg:items-center lg:text-center">
                <p className="mb-4 text-lg font-bold uppercase tracking-wide text-dark/75 dark:text-light/75 md:text-base sm:text-sm">
                  About Me
                </p>

                <h1 className="w-full text-left text-6xl font-bold leading-tight xl:text-5xl lg:text-center lg:text-5xl md:text-4xl sm:text-3xl">
                  Building Toward Stronger Frontend Development
                </h1>

                <h2 className="mt-3 w-full text-left text-2xl font-semibold uppercase tracking-wide text-dark/80 dark:text-light/80 lg:text-center md:text-xl sm:text-base">
                  Junior Frontend Developer
                </h2>

                <p className="my-5 w-full text-left text-lg font-medium leading-relaxed md:text-base sm:text-sm lg:text-center">
                  I’m a junior frontend developer focused on building responsive
                  web applications with JavaScript, React, Next.js, and modern
                  UI tools. I’ve continued developing my technical foundation
                  through structured training, project work, and ongoing
                  self-study.
                </p>

                <p className="mb-5 w-full text-left text-lg font-medium leading-relaxed md:text-base sm:text-sm lg:text-center">
                  My background combines frontend development, analytical work,
                  and communication-heavy roles, which has shaped the way I
                  approach building: methodically, collaboratively, and with
                  attention to detail.
                </p>

                <p className="w-full text-left text-lg font-medium leading-relaxed md:text-base sm:text-sm lg:text-center">
                  I’m especially interested in creating clean user experiences,
                  strengthening my full-stack skills, and contributing to
                  real-world web products where thoughtful execution matters.
                </p>
              </div>

              <div className="flex w-[45%] justify-center md:w-full">
                <div
                  className="relative w-[68%] h-max rounded-2xl border-2 border-solid border-dark
                  bg-light p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] dark:border-light dark:bg-dark
                  dark:shadow-[0_12px_30px_rgba(255,255,255,0.06)] md:w-[58%] sm:w-[72%]"
                >
                  <div
                    className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl
                    bg-dark dark:bg-light"
                  />
                  <div className="overflow-hidden rounded-2xl">
                    <FramerImage
                      className="h-auto w-full rounded-2xl"
                      src={profile}
                      alt="Jonathan Calderaro portrait"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      40vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-10 h-px w-full bg-dark/20 dark:bg-light/30" />

          <Skills />

          <div className="my-16 h-px w-full bg-dark/20 dark:bg-light/30" />

          <Experience />

          <div className="my-16 h-px w-full bg-dark/20 dark:bg-light/30" />

          <Education />
        </Layout>
      </main>
    </>
  );
}
