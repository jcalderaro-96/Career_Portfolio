import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 mx-auto flex w-[60%] flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-xl font-bold capitalize sm:text-lg xs:text-base">
          {type}
        </h3>

        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>

        <p className="w-full font-medium leading-relaxed text-dark/80 dark:text-light/80 md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40 md:my-28">
      <h2 className="mb-20 w-full text-center text-6xl font-bold md:text-5xl sm:text-4xl">
        Education & Training
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 h-full w-[4px] origin-top rounded-full bg-dark
          dark:bg-primaryDark dark:shadow-3xl md:left-[30px] md:w-[2px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <Details
            type="Full Stack Bootcamp"
            time="April 2022 – Sep 2022"
            place="UC Berkeley Extension | Completed ~80%"
            info="Hands-on training in web development, React.js, APIs, and databases. Continued strengthening practical frontend and full-stack foundations through structured coursework and project-based learning."
          />

          <Details
            type="Full Stack Development Coursework"
            time="Jan 2021 – May 2021"
            place="Bloom Institute of Technology | Completed ~60%"
            info="Studied JavaScript, React, and backend fundamentals while building a stronger technical base in modern web development and application structure."
          />

          <Details
            type="Coursework Toward a Bachelor’s Degree in Computer Science"
            time="Aug 2014 – Jan 2015"
            place="The Catholic University of America | Scholarship"
            info="Completed early computer science coursework that contributed to foundational technical interest and long-term growth toward software and web development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
