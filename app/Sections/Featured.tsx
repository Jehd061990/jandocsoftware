import Link from "next/link";

const portfolioProjects = [
  {
    name: "SukiGo POS",
    summary:
      "An all-in-one retail platform for fast checkout, inventory sync, and customer loyalty.",
    outcome:
      "Reduced transaction time and improved team efficiency across multiple locations.",
    preview: "Retail dashboard with real-time stock and checkout flow.",
    ctaLabel: "Explore retail operations",
    ctaHref: "#contact",
    tags: ["POS", "Retail", "Next.js"],
  },
  {
    name: "Restaurant POS",
    summary:
      "A kitchen-ready ordering solution built for high-volume hospitality operations.",
    outcome:
      "Enabled faster table turnover and real-time menu updates from one system.",
    preview: "Order management and kitchen queue preview.",
    ctaLabel: "Book a hospitality demo",
    ctaHref: "#contact",
    tags: ["POS", "Restaurant", "Automation"],
  },
  {
    name: "Inventory Control",
    summary:
      "Smart stock management with barcode tracking, low-stock alerts, and supplier workflows.",
    outcome:
      "Cut waste, improved reorder timing, and kept seasonal demand under control.",
    preview: "Inventory heatmap with reorder signals and supplier status.",
    ctaLabel: "Request an inventory review",
    ctaHref: "#contact",
    tags: ["Inventory", "Analytics", "Efficiency"],
  },
  {
    name: "Sales Dashboard",
    summary:
      "A unified analytics workspace for revenue forecasting, performance, and pipeline visibility.",
    outcome:
      "Helped leadership make faster decisions with clear sales and growth KPIs.",
    preview: "KPI cards, trend charts, and customer insights in one view.",
    ctaLabel: "View dashboard workflow",
    ctaHref: "#contact",
    tags: ["Dashboard", "BI", "Reporting"],
  },
  {
    name: "Construction Management System",
    summary:
      "A project control suite for scheduling, budgets, and contractor collaboration.",
    outcome:
      "Reduced delays and improved communication across field teams and stakeholders.",
    preview: "Gantt scheduling, budget summary, and progress tracking.",
    ctaLabel: "Discuss your build process",
    ctaHref: "#contact",
    tags: ["Construction", "Project", "Operations"],
  },
  {
    name: "CRM Platform",
    summary:
      "A business-grade customer management system for sales, service, and retention.",
    outcome:
      "Increased lead follow-up consistency and customer lifetime value.",
    preview: "Pipeline cards, customer activity, and follow-up reminders.",
    ctaLabel: "Start your CRM review",
    ctaHref: "#contact",
    tags: ["CRM", "Retention", "Workflow"],
  },
  {
    name: "Property Management",
    summary:
      "A leasing and maintenance platform built for multi-property portfolios.",
    outcome:
      "Automated tenant requests, rent tracking, and financial reporting.",
    preview:
      "Property portfolio overview, maintenance tickets, and tenant metrics.",
    ctaLabel: "Schedule a property walkthrough",
    ctaHref: "#contact",
    tags: ["Property", "Rentals", "Automation"],
  },
];

const Featured = () => {
  return (
    <section id="featured" className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Portfolio highlights
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Business software that turns complex operations into dependable
            growth engines.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            From point-of-sale to SaaS dashboards, these projects show how we
            build systems that free teams from manual work and keep leaders
            focused on scaling.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-3xl bg-sky-500/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700 shadow-sm">
                {project.tags[0]}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.summary}
              </p>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-900/5 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Live mockup
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Preview
                  </span>
                </div>
                <div className="space-y-2 rounded-3xl bg-white/90 p-3 shadow-inner">
                  <div className="h-2 rounded-full bg-slate-200/80" />
                  <div className="grid gap-2">
                    <div className="h-3 rounded-full bg-slate-200/70 w-3/4" />
                    <div className="h-3 rounded-full bg-slate-200/60 w-1/2" />
                    <div className="h-3 rounded-full bg-slate-200/70 w-5/6" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-500">{project.preview}</p>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {project.outcome}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={project.ctaHref}
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  {project.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
