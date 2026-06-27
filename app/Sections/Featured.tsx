const Featured = () => {
  return (
    <section id="featured" className="bg-slate-100 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Featured project
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            SukiGo — a modern retail experience for growing teams.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We helped create a streamlined ordering and operations platform that
            connected storefronts, inventory, and reporting in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Analytics", "AI workflow"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
          <h3 className="text-xl font-semibold">Impact delivered</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>• Reduced manual tasks with automated data syncs</li>
            <li>• Improved visibility with real-time reporting</li>
            <li>• Simplified team onboarding through a cleaner workflow</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Featured;
