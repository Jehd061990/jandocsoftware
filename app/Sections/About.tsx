const About = () => {
  return (
    <section id="about" className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Thoughtful digital products with measurable business value.
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="rounded-xl bg-white p-4 shadow-sm">
              Modern stacks like Next.js, React, and TypeScript for long-term
              maintainability.
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm">
              Clear communication and practical solutions instead of unnecessary
              complexity.
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm">
              A strong focus on UX, speed, and tools your team will actually
              enjoy using.
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Our process
          </p>
          <div className="mt-6 space-y-4">
            {["Discovery", "Planning", "Development", "Launch", "Support"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-300">
                    0{index + 1}
                  </div>
                  <span className="text-base font-medium">{step}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
