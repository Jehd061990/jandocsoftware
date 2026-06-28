"use client";

import { motion } from "framer-motion";

const trustItems = [
  "Modern Tech Stack",
  "AI-assisted Development",
  "Fast Delivery",
  "Clean & Scalable Code",
];

const techBrands = [
  { name: "Next.js", accent: "bg-slate-950 text-white" },
  { name: "React", accent: "bg-sky-600 text-white" },
  { name: "TypeScript", accent: "bg-sky-950 text-white" },
  { name: "Node.js", accent: "bg-emerald-600 text-slate-950" },
  { name: "TailwindCSS", accent: "bg-cyan-600 text-slate-950" },
  { name: "PostgreSQL", accent: "bg-slate-900 text-white" },
  { name: "Supabase", accent: "bg-violet-700 text-white" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const TrustBar = () => {
  return (
    <motion.section
      id="trust"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.14 }}
      className="bg-slate-50 px-6 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Trusted by fast-growing businesses
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Growth-focused solutions built with reliability and speed in mind.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            We partner with business owners to deliver software that reduces
            manual work, improves visibility, and supports expansion across
            U.S., Australian, and Philippine markets.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-900 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-2xl text-white sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Technologies we deliver with confidence
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {techBrands.map((brand) => (
                <div
                  key={brand.name}
                  className={`flex items-center justify-between rounded-3xl ${brand.accent} px-4 py-3 font-semibold shadow-sm`}
                >
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustBar;
