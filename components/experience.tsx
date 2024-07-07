"use client";

import React, { Fragment } from "react";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData?.map((exp, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#F3F4F6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border:
                                    theme === "light"
                                        ? "0.4rem solid rgba(0, 0, 0, 0.05)"
                                        : "0.4rem solid  rgba(255, 255, 255, 0.5)",

                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9CA3AF",
                            }}
                            date={exp.date}
                            icon={exp.icon}
                            iconStyle={{
                                background:
                                    theme === "light"
                                        ? "#FFFFFF"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize vertical-timeline-element-title">
                                {exp?.title}
                            </h3>
                            <p className="font-normal !mt-0">{exp?.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 vertical-timeline-element-subtitle dark:text-white/75">
                                {exp?.description}
                            </p>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
