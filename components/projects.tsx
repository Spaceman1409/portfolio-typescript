"use client";

import React, { Fragment } from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <>
            <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
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
