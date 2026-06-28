"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarIcon,
  AiChat01Icon,
  AiFolder02Icon,
  CameraLensIcon,
  RocketIcon,
  Shield01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";

const steps = [
  {
    title: "Discovery Call",
    description:
      "Understand your business goals, challenges, and success metrics.",
    icon: AiChat01Icon,
  },
  {
    title: "Planning",
    description:
      "Define scope, timelines, and a growth-minded delivery roadmap.",
    icon: AiFolder02Icon,
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive screens and workflows that make adoption easy.",
    icon: CameraLensIcon,
  },
  {
    title: "Development",
    description:
      "Build using modern web architecture, automation, and quality controls.",
    icon: RocketIcon,
  },
  {
    title: "Testing",
    description:
      "Validate experiences across devices with performance and security checks.",
    icon: Shield01Icon,
  },
  {
    title: "Deployment",
    description:
      "Launch your solution with reliable hosting, integrations, and monitoring.",
    icon: Wrench01Icon,
  },
  {
    title: "Support",
    description:
      "Maintain your platform and support new business priorities after launch.",
    icon: CalendarIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const Process = () => {
  return (
    <motion.section
      id="process"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.08 }}
      className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Development Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A clear process for launching dependable business software.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            From discovery to support, every step is designed to reduce risk and
            keep your project aligned to business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/15 text-sky-300 shadow-inner">
                <HugeiconsIcon icon={step.icon} className="size-5" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  Step {index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
