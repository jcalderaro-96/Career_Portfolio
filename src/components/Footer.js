import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        {/* Left */}
        <span>{new Date().getFullYear()} © All Rights Reserved.</span>

        {/* Center */}
        <span className="flex items-center lg:py-2 text-center">
          Designed and built by&nbsp;
          <span className="font-semibold">Jonathan Calderaro</span>
        </span>

        {/* Right */}
        <Link
          href="/contact"
          className="underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark"
        >
          Let’s Connect
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
