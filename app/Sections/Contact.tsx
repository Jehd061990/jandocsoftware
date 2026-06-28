import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build something smarter for your business?
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            Share a few details and we will follow up with ideas,
            recommendations, and a clear next step.
          </p>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-300">
            <p className="font-semibold text-white">What to include</p>
            <ul className="mt-3 space-y-2">
              <li>• Your business goals and biggest bottlenecks</li>
              <li>• The type of platform or workflow you need</li>
              <li>• Your preferred timeline and contact method</li>
            </ul>
          </div>
        </div>

        <form className="grid gap-4 rounded-[1.5rem] bg-white p-6 text-slate-900 shadow-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              <span>Name</span>
              <input
                required
                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                placeholder="Alex Rivera"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Email</span>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                placeholder="alex@company.com"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              <span>Company</span>
              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                placeholder="Your company"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Phone</span>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                placeholder="(555) 123-4567"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              <span>Service needed</span>
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-sky-500">
                <option>POS system</option>
                <option>Inventory tool</option>
                <option>CRM platform</option>
                <option>AI automation</option>
                <option>Custom web app</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Project timeline</span>
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-sky-500">
                <option>Next 2 weeks</option>
                <option>Next month</option>
                <option>Next quarter</option>
                <option>Just exploring</option>
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium">
            <span>Project details</span>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
              placeholder="Tell us about your goals, current challenges, and desired outcome."
            />
          </label>

          <Button type="submit" className="rounded-full">
            Send inquiry
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
