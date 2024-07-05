"use client";

import React, { Fragment, useEffect } from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Projects() {
    const { setActiveSection } = useActiveSectionContext();
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            setActiveSection("Projects");
        }
    }, [inView]);

    return (
        <>
            <section ref={ref} id="projects" className="scroll-mt-28">
                <SectionHeading>My Projects</SectionHeading>
                <div>
                    {projectsData?.map((project, index) => (
                        <Fragment key={index}>
                            <Project {...project} />
                        </Fragment>
                    ))}
                </div>
            </section>
        </>
    );
}
