"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiBrain03Icon,
  AiBrowserIcon,
  AiChipIcon,
  AiCloud01Icon,
  AiCloudIcon,
  AiFolder01Icon,
  AiFolder02Icon,
  AiChat01Icon,
} from "@hugeicons/core-free-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Tailored business platforms built to match your workflows, data flows, and team operations.",
    icon: AiFolder01Icon,
  },
  {
    title: "SaaS Development",
    description:
      "Subscription-ready applications with billing, user management, and polished customer experiences.",
    icon: AiCloud01Icon,
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive work, reduce overhead, and keep high-value staff focused on growth.",
    icon: AiBrain03Icon,
  },
  {
    title: "CRM Systems",
    description:
      "Customer engagement tools that organize pipelines, service requests, and stakeholder communication.",
    icon: AiChat01Icon,
  },
  {
    title: "POS Systems",
    description:
      "Modern point-of-sale software designed for retail, hospitality, and service teams.",
    icon: AiBrowserIcon,
  },
  {
    title: "Inventory Management",
    description:
      "Stock control, supplier workflows, and demand forecasting to reduce shrinkage and stockouts.",
    icon: AiFolder02Icon,
  },
  {
    title: "Business Dashboards",
    description:
      "Executive and operations dashboards that put key metrics, forecasts, and trends at your fingertips.",
    icon: AiCloudIcon,
  },
  {
    title: "API Integrations",
    description:
      "Stable connections across payments, analytics, CRMs, and internal systems for a unified data experience.",
    icon: AiChipIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.08 }}
      className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Business software services made to convert and scale.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            From custom applications and SaaS launches to AI automation and
            integration work, we help businesses become more efficient and more
            profitable.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white transition hover:-translate-y-1 hover:border-sky-300 hover:bg-slate-900/95"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/15 text-sky-300 shadow-inner">
                <HugeiconsIcon icon={service.icon} className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="mt-6 rounded-full border border-slate-700 bg-slate-800 text-white transition group-hover:scale-[1.02]"
              >
                <Link href="#contact">Learn more</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
