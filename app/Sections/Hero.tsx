"use client";

import Link from "next/link";
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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Trust", href: "#trust" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const dashboardMetrics = [
  { label: "New leads", value: "82", trend: "+18%" },
  { label: "Revenue", value: "$124K", trend: "+12%" },
  { label: "Automation tasks", value: "46", trend: "+28%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 px-4 py-4 backdrop-blur backdrop-saturate-150 shadow-sm shadow-slate-900/5 transition duration-300 sm:px-8 lg:px-12">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 max-w-7xl">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-[0.02em] text-slate-950"
        >
          JANDOC SOFTWARE
        </Link>

        <nav className="order-3 w-full md:order-2 md:w-auto">
          <ul className="flex flex-wrap justify-center gap-2 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <span className="order-2 rounded-full bg-slate-950 px-3 py-2 text-sm font-medium text-white md:order-3">
          Available for new projects
        </span>
      </div>
    </header>
  );
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.16),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur">
            <HugeiconsIcon
              icon={AiCloud01Icon}
              className="size-4 text-sky-500"
            />
            Built for US, Australian, and Philippine businesses
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Custom Web Applications & AI Automation for Growing Businesses
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              We build scalable SaaS platforms, CRM systems, AI-powered
              workflows, dashboards, and business applications that help
              companies automate operations and grow faster.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Book a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="#featured">View Our Work</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {dashboardMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
                <p className="mt-3 text-sm font-semibold text-sky-700">
                  {metric.trend}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <Card className="rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-950">
                Operations dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.3em] text-sky-300">
                    Live KPIs
                  </span>
                  <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-300">
                    Updated
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Revenue
                    </p>
                    <p className="mt-3 text-2xl font-semibold">$124K</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Tasks
                    </p>
                    <p className="mt-3 text-2xl font-semibold">46</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-3/4 rounded-full bg-sky-500" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-100 p-4 text-slate-800">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      New customers
                    </p>
                    <p className="mt-3 text-xl font-semibold">82</p>
                  </div>
                  <div className="rounded-3xl bg-slate-100 p-4 text-slate-800">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      Revenue growth
                    </p>
                    <p className="mt-3 text-xl font-semibold">+12%</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between gap-3 px-6 py-5 text-slate-500">
              <span>Connected to Stripe & Shopify</span>
              <HugeiconsIcon
                icon={AiBrowserIcon}
                className="size-5 text-slate-400"
              />
            </CardFooter>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-950">
                  AI Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 rounded-3xl bg-sky-50 p-4 text-sky-700">
                  <HugeiconsIcon icon={AiBrain03Icon} className="size-5" />
                  <span>Automation rules</span>
                </div>
                <p className="text-sm text-slate-600">
                  Delivering automated approvals and follow-up actions.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-950">
                  Core App
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 rounded-3xl bg-slate-100 p-4 text-slate-700">
                  <HugeiconsIcon icon={AiChipIcon} className="size-5" />
                  <span>API integration</span>
                </div>
                <p className="text-sm text-slate-600">
                  Connected payments, logistics, and inventory systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
