"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiBrain03Icon,
  AiCloud01Icon,
  AiChat01Icon,
  AiFolder02Icon,
  AiChipIcon,
  AiCloudIcon,
} from "@hugeicons/core-free-icons";

const reasons = [
  {
    title: "Modern Technologies",
    description:
      "We build with Next.js, React, TypeScript, and cloud-native tooling for speed, security, and scalability.",
    icon: AiCloud01Icon,
  },
  {
    title: "Scalable Architecture",
    description:
      "Your platform is designed to expand with your customers, not hinder future growth.",
    icon: AiFolder02Icon,
  },
  {
    title: "AI-powered Development Workflow",
    description:
      "Smart automation and code generation accelerate delivery while raising quality.",
    icon: AiBrain03Icon,
  },
  {
    title: "Responsive Communication",
    description:
      "Clear updates, discovery sessions, and pragmatic decisions keep your project on track.",
    icon: AiChat01Icon,
  },
  {
    title: "Performance-first Development",
    description:
      "Fast loading, efficient data flows, and optimized experiences for every user.",
    icon: AiChipIcon,
  },
  {
    title: "Long-term Technical Support",
    description:
      "We help you maintain, extend, and refine your platform after launch.",
    icon: AiCloudIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <motion.section
      id="why"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Why businesses choose Jandoc Software
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Strategic software delivery with business outcomes in mind.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            We focus on real business results — faster operations, clearer data,
            and a platform that supports growth across U.S., Australian, and
            Philippine markets.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white/10"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300">
                <HugeiconsIcon icon={reason.icon} className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
