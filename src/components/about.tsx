"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated as a programming mathematician in 1997, but my passion for the profession began long before that. Over the years, I have worked as a developer, lead developer, team lead, system analyst, project manager and solution/system architect. I worked alone, in a small team and in an enterprise, I worked as an employee, entrepreneur and freelancer.
      </p>

      <p className="mb-3">
        Over the years, I have learned and applied a lot of technology in my work, and although many things change, fortunately the most exciting and challenging part remains - problem solving. I <span className="underline font-medium">love</span> the feeling when I find an effective solution to a problem and then the solution is realized.
      </p>

      <p className="mb-3">
        Over the years, I mostly dealt with backend development and used <span className="font-medium italic">Java and Python</span>. I like the <span className="font-medium italic">Cloud</span>, primarily <span className="font-medium italic">AWS</span>, but I also tried Azure and GCP. I am currently learning <span className="font-medium italic">NodeJS, Javascript/TypeScript</span>, I deal more with frontend development (Angular, React, Svelte) and Terraform.
        I am currently looking for work as a freelancer or employee, either part-time or full-time.
      </p>

      <p className="mb-3">
        When I&apos;m not coding, I spend time with my daughter and playing squash. I like hiking, logic and board games.{" "}
      </p>
    </motion.section>
  );
}
