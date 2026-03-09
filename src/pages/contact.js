import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Jonathan Calderaro</title>
        <meta
          name="description"
          content="Contact Jonathan Calderaro for frontend development opportunities, project discussions, and professional inquiries."
        />
      </Head>

      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="mb-10 h-px w-full bg-dark/20 dark:bg-light/30" />

          <section className="flex min-h-[72vh] w-full flex-col items-center">
            <AnimatedText
              text="Let’s Connect."
              className="mb-16 !text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl"
            />

            <div
              className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-2xl
              border border-solid border-dark bg-light p-12 text-center shadow-2xl
              dark:border-light dark:bg-dark lg:p-10 md:p-8 sm:p-6"
            >
              <h1 className="mb-4 text-3xl font-bold capitalize md:text-2xl sm:text-xl">
                Contact Me
              </h1>

              <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-dark/80 dark:text-light/80 md:text-base sm:text-sm">
                I’m currently building my portfolio and continuing to grow as a
                frontend developer. If you’d like to connect about
                opportunities, projects, or collaboration, I’d be glad to hear
                from you.
              </p>

              <div className="mb-8 flex flex-col items-center gap-4 text-lg font-semibold md:text-base sm:text-sm">
                <Link
                  href="mailto:your-email@example.com"
                  className="rounded-lg border-2 border-solid border-dark px-6 py-3
                  transition-all duration-200 hover:scale-[1.02] hover:bg-dark hover:text-light
                  dark:border-light dark:hover:bg-light dark:hover:text-dark"
                >
                  your-email@example.com
                </Link>

                <Link
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-solid border-dark px-6 py-3
                  transition-all duration-200 hover:scale-[1.02] hover:bg-dark hover:text-light
                  dark:border-light dark:hover:bg-light dark:hover:text-dark"
                >
                  View GitHub
                </Link>

                <Link
                  href="https://www.linkedin.com/in/your-linkedin-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-solid border-dark px-6 py-3
                  transition-all duration-200 hover:scale-[1.02] hover:bg-dark hover:text-light
                  dark:border-light dark:hover:bg-light dark:hover:text-dark"
                >
                  View LinkedIn
                </Link>
              </div>

              <p className="text-base font-medium text-dark/70 dark:text-light/70 md:text-sm sm:text-xs">
                Sacramento, CA
              </p>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
