import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 mx-auto flex w-[60%] flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-xl font-bold capitalize sm:text-lg xs:text-base">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{company}
          </a>
        </h3>

        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>

        <p className="w-full font-medium leading-relaxed text-dark/80 dark:text-light/80 md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40 md:my-28">
      <h2 className="mb-20 w-full text-center text-6xl font-bold md:text-5xl sm:text-4xl">
        Relevant Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark
          dark:bg-primaryDark dark:shadow-3xl md:left-[30px] md:w-[2px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <Details
            position="Full-Stack Web Development Student"
            company="UC Irvine Division of Continuing Education"
            companyLink="https://ce.uci.edu/"
            time="Nov 2024 – June 2025"
            address="Online (Part-Time)"
            work="Completed an 8-month immersive coding program focused on front-end and back-end web development. Built and deployed multiple responsive, full-stack web applications using React, JavaScript, Node.js, and MongoDB, while applying concepts in API integration, database design, and user experience through weekly challenges and capstone projects."
          />

          <Details
            position="Data Analyst & Lead Coach"
            company="Bramble Esports"
            companyLink="https://twitter.com/"
            time="Jan 2018 – May 2020"
            address="Remote"
            work="Led a competitive League of Legends team from formation to a 12+ player roster, supporting recruitment, coaching, and match preparation. Analyzed player performance data, developed individualized training plans, and managed community operations through scheduling, communication, and team coordination."
          />

          <Details
            position="Barista / Busser"
            company="Starbucks / Round Hill Country Club"
            companyLink="https://www.starbucks.com/"
            time="March 2016 – July 2020"
            address="Danville / Alamo, CA"
            work="Delivered high-volume customer service with strong attention to detail and teamwork in fast-paced environments. Maintained accuracy and efficiency during peak hours while supporting team operations and customer satisfaction."
          />

          <Details
            position="Data Analyst Intern"
            company="Roche"
            companyLink="https://www.roche.com/"
            time="June 2014 – July 2014"
            address="Basel, Switzerland"
            work="Researched and presented market data on Japan’s pharmaceutical sector to support strategy and global team insights. Strengthened experience in analysis, reporting, and communicating findings clearly to a broader team."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
