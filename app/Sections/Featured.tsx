import Link from "next/link";

const portfolioProjects = [
  {
    name: "SukiGo POS",
    summary:
      "An all-in-one retail platform for fast checkout, inventory sync, and customer loyalty.",
    outcome:
      "Reduced transaction time and improved team efficiency across multiple locations.",
    preview: "Retail dashboard with real-time stock and checkout flow.",
    previewType: "retail",
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
    previewType: "restaurant",
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
    previewType: "inventory",
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
    previewType: "dashboard",
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
    previewType: "construction",
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
    previewType: "crm",
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
    previewType: "property",
    ctaLabel: "Schedule a property walkthrough",
    ctaHref: "#contact",
    tags: ["Property", "Rentals", "Automation"],
  },
];

const getPreviewGraphic = (type: string) => {
  const gradientId = `preview-gradient-${type}`;

  const background = (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width="320"
        height="176"
        rx="24"
        fill={`url(#${gradientId})`}
      />
    </>
  );

  switch (type) {
    case "retail":
      return (
        <>
          {background}
          <rect x="24" y="24" width="94" height="16" rx="8" fill="#1e293b" />
          <rect x="24" y="52" width="120" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="70" width="76" height="10" rx="5" fill="#1e293b" />
          <rect x="184" y="52" width="112" height="80" rx="16" fill="#111827" />
          <rect x="196" y="64" width="80" height="10" rx="5" fill="#1f2937" />
          <rect x="196" y="84" width="64" height="10" rx="5" fill="#1f2937" />
          <rect x="196" y="104" width="48" height="10" rx="5" fill="#1f2937" />
          <rect x="196" y="124" width="80" height="10" rx="5" fill="#1f2937" />
          <rect x="24" y="96" width="120" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="116" width="80" height="10" rx="5" fill="#1e293b" />
          <circle cx="264" cy="134" r="12" fill="#0ea5e9" opacity="0.95" />
        </>
      );
    case "restaurant":
      return (
        <>
          {background}
          <rect x="24" y="24" width="76" height="16" rx="8" fill="#1e293b" />
          <rect x="24" y="52" width="268" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="72" width="220" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="92" width="176" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="112" width="198" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="132" width="138" height="10" rx="5" fill="#1e293b" />
          <path
            d="M244 40 H292 A8 8 0 0 1 300 48 V84 A8 8 0 0 1 292 92 H244 Z"
            fill="#111827"
          />
          <circle cx="268" cy="62" r="10" fill="#f97316" />
          <rect x="254" y="84" width="12" height="8" rx="3" fill="#fb923c" />
        </>
      );
    case "inventory":
      return (
        <>
          {background}
          <rect x="24" y="24" width="224" height="14" rx="7" fill="#1e293b" />
          <rect x="24" y="46" width="24" height="92" rx="6" fill="#1e293b" />
          <rect x="62" y="60" width="24" height="78" rx="6" fill="#1e293b" />
          <rect x="100" y="76" width="24" height="62" rx="6" fill="#1e293b" />
          <rect x="138" y="92" width="24" height="46" rx="6" fill="#1e293b" />
          <rect x="176" y="108" width="24" height="30" rx="6" fill="#1e293b" />
          <rect x="214" y="96" width="24" height="42" rx="6" fill="#1e293b" />
          <path
            d="M24 144 H296"
            stroke="#0ea5e9"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <rect x="24" y="24" width="248" height="10" rx="5" fill="#111827" />
        </>
      );
    case "dashboard":
      return (
        <>
          {background}
          <rect x="24" y="24" width="74" height="14" rx="7" fill="#1e293b" />
          <rect x="24" y="48" width="134" height="14" rx="7" fill="#1e293b" />
          <rect x="24" y="76" width="90" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="92" width="132" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="116" width="88" height="10" rx="5" fill="#1e293b" />
          <path
            d="M172 50 C188 80 204 58 220 88 C236 118 252 78 268 96"
            stroke="#38bdf8"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="172" cy="56" r="4" fill="#38bdf8" />
          <circle cx="228" cy="87" r="4" fill="#38bdf8" />
          <circle cx="266" cy="94" r="4" fill="#38bdf8" />
          <rect x="172" y="116" width="44" height="22" rx="10" fill="#111827" />
          <rect x="222" y="116" width="56" height="22" rx="10" fill="#111827" />
        </>
      );
    case "construction":
      return (
        <>
          {background}
          <rect x="24" y="24" width="138" height="12" rx="6" fill="#1e293b" />
          <rect x="24" y="44" width="120" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="64" width="90" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="84" width="180" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="110" width="76" height="14" rx="7" fill="#1e293b" />
          <rect x="108" y="110" width="92" height="14" rx="7" fill="#1e293b" />
          <rect x="208" y="110" width="76" height="14" rx="7" fill="#1e293b" />
          <path
            d="M32 144 L80 118 L128 144 L176 118 L224 144 L272 118 L320 144"
            stroke="#0ea5e9"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </>
      );
    case "crm":
      return (
        <>
          {background}
          <rect x="24" y="24" width="98" height="14" rx="7" fill="#1e293b" />
          <rect x="24" y="48" width="192" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="66" width="172" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="86" width="142" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="108" width="220" height="10" rx="5" fill="#1e293b" />
          <rect x="228" y="48" width="64" height="18" rx="9" fill="#111827" />
          <rect x="236" y="56" width="24" height="8" rx="4" fill="#0ea5e9" />
          <rect x="228" y="76" width="64" height="18" rx="9" fill="#111827" />
        </>
      );
    case "property":
      return (
        <>
          {background}
          <rect x="24" y="24" width="100" height="14" rx="7" fill="#1e293b" />
          <rect x="24" y="48" width="88" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="66" width="128" height="10" rx="5" fill="#1e293b" />
          <path d="M196 48 L244 48 L244 80 L196 80 Z" fill="#111827" />
          <path d="M212 64 L220 64 L220 76 L212 76 Z" fill="#0ea5e9" />
          <path d="M252 66 L284 66 L284 116 L252 116 Z" fill="#111827" />
          <rect x="264" y="74" width="12" height="14" rx="4" fill="#38bdf8" />
          <rect x="268" y="96" width="18" height="10" rx="4" fill="#0ea5e9" />
          <rect x="24" y="96" width="112" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="116" width="164" height="10" rx="5" fill="#1e293b" />
        </>
      );
    default:
      return (
        <>
          {background}
          <rect x="24" y="32" width="120" height="12" rx="6" fill="#1e293b" />
          <rect x="24" y="56" width="200" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="78" width="160" height="10" rx="5" fill="#1e293b" />
          <rect x="24" y="100" width="180" height="10" rx="5" fill="#1e293b" />
        </>
      );
  }
};

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
              className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
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

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-900/5 p-4 transition duration-300 group-hover:bg-slate-950/5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Live mockup
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Preview
                  </span>
                </div>
                <div className="rounded-3xl bg-white/90 p-3 shadow-inner">
                  <svg
                    viewBox="0 0 320 176"
                    className="h-40 w-full rounded-[1.25rem] bg-slate-950/5"
                    role="img"
                    aria-label={project.preview}
                  >
                    {getPreviewGraphic(project.previewType)}
                  </svg>
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
