"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
            id="about"
        >
            <SectionHeading>About</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in&nbsp;
                <span className="font-medium">Accounting</span>, I decided to
                pursue my passion for programming. I enrolled in a coding
                bootcamp and learned&nbsp;
                <span className="font-medium">full-stack web development</span>
                .&nbsp;
                <span className="italic">My favorite part of programming</span>
                &nbsp; is the problem-solving aspect. I&nbsp;
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is&nbsp;
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Prisma. I am always
                looking to learn new technologies. I am currently looking for
                a&nbsp;
                <span className="font-medium">full-time position</span> as a
                software developer.
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I
                enjoy playing video games, watching movies, and playing with my
                dog. I also enjoy&nbsp;
                <span className="font-medium">learning new things</span>. I am
                currently learning about&nbsp;
                <span className="font-medium">history and philosophy</span>.
                I&apos;m also learning how to play the guitar.
            </p>
        </motion.section>
    );
}
