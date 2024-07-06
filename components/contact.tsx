"use client";

import Link from "next/link";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <>
            <motion.section
                id="contact"
                ref={ref}
                className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{
                    once: true,
                }}
            >
                <SectionHeading>Contact Me</SectionHeading>
                <p className="text-gray-700 -mt-6">
                    Please contact me directly at&nbsp;
                    <Link
                        className="underline"
                        href="mailto:shivasingh604@gmail.com"
                    >
                        E-Mail
                    </Link>
                    &nbsp;or through this form.
                </p>
                <form
                    className="mt-10 flex flex-col"
                    action={async (formData) => {
                        const { data, error } = await sendEmail(formData);

                        if (error) {
                            toast.error(error);
                            return;
                        }

                        toast.success("Email sent successfully!");
                    }}
                >
                    <input
                        type="email"
                        name="senderEmail"
                        className="h-14 px-4 rounded-lg borderBlack"
                        placeholder="Your email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        className="h-52 my-3 rounded-lg borderBlack p-4"
                        maxLength={5000}
                        required
                    />
                    <SubmitBtn />
                </form>
            </motion.section>
        </>
    );
}
