"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../public/profile_pic.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", delay: 0.2 }}
                    >
                        <Image
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                            src={profile}
                            alt="profile"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                        />
                    </motion.div>
                    <motion.span
                        className="absolute text-3xl bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m John</span>
                &nbsp;I&apos;m a&nbsp;
                <span className="font-bold">BackEnd Developer&nbsp;</span>
                with&nbsp;<span className="font-bold">5 years</span>&nbsp;of
                experience. I enjoy building&nbsp;
                <span className="italic">sites and apps.&nbsp;</span>My focus
                is&nbsp;<span className="underline">React.Js (Next.Js)</span>.
            </motion.p>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link
                    className="group bg-gray-900 text-white text-sm px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    href="#contact"
                >
                    Contact Me
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                    className="group bg-white text-sm px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
                    href="/Resume.pdf"
                    target="_blank"
                    download={true}
                >
                    Download CV
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </Link>
                <Link
                    className="bg-white p-[10px] text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
                    target="_blank"
                    href="https://www.linkedin.com"
                >
                    <BsLinkedin />
                </Link>
                <Link
                    className="bg-white p-[10px] text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
                    target="_blank"
                    href="https://www.github.com"
                >
                    <FaGithubSquare />
                </Link>
            </motion.div>
        </section>
    );
}
