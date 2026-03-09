import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} rounded relative group text-3xl font-bold tracking-wide lg:text-light lg:dark:text-dark xl:text-[1.9rem] md:text-2xl`}
    >
      {title}
      <span
        className={`
          inline-block h-[2px] bg-dark absolute left-0 -bottom-1.5
          group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"} lg:bg-light lg:dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} rounded relative group text-3xl font-bold tracking-wide lg:text-light lg:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
          inline-block h-[2px] bg-dark absolute left-0 -bottom-1.5
          group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"} lg:bg-light lg:dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="w-full flex items-center justify-between px-32 py-10 font-medium z-10 dark:text-light
        lg:px-16 relative z-1 md:px-12 md:py-8 sm:px-8 sm:py-6"
      >
        <button
          type="button"
          className="flex-col items-center justify-center hidden lg:flex"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-8 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-8 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            } my-1.5`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-8 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="flex items-center justify-center">
            <CustomLink className="mr-8" href="/" title="Home" />
            <CustomLink className="mx-8" href="/about" title="About" />
            <CustomLink className="mx-8" href="/projects" title="Projects" />
            <CustomLink className="mx-8" href="/contact" title="Contact" />
          </nav>

          <nav className="flex items-center justify-center flex-wrap lg:mt-2">
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-14 mr-8"
              href="https://github.com/your-github-username"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit my GitHub profile"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-14 mr-8"
              href="https://www.linkedin.com/in/your-linkedin-url"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit my LinkedIn profile"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              title={
                mode === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-14 h-14 ease flex items-center justify-center rounded-full p-3
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>

        {isOpen ? (
          <motion.div
            className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
            -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md"
            initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <nav className="flex items-center justify-center flex-col gap-5">
              <CustomMobileLink
                toggle={handleClick}
                className="lg:m-0"
                href="/"
                title="Home"
              />
              <CustomMobileLink
                toggle={handleClick}
                className="lg:m-0"
                href="/about"
                title="About"
              />
              <CustomMobileLink
                toggle={handleClick}
                className="lg:m-0"
                href="/projects"
                title="Projects"
              />
              <CustomMobileLink
                toggle={handleClick}
                className="lg:m-0"
                href="/contact"
                title="Contact"
              />
            </nav>

            <nav className="flex items-center justify-center mt-8">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-10 m-4"
                href="https://github.com/your-github-username"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visit my GitHub profile"
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 m-4"
                href="https://www.linkedin.com/in/your-linkedin-url"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visit my LinkedIn profile"
              >
                <LinkedInIcon />
              </motion.a>

              <button
                title={
                  mode === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-10 h-10 ease m-4 flex items-center justify-center rounded-full p-2
                  ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                aria-label="theme-switcher"
              >
                {mode === "light" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}
      </header>
    </>
  );
};

export default Navbar;
