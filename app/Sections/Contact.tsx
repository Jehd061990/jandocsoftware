import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build Your Next Software Project?
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Let’s discuss your idea and turn it into a modern scalable
              application.
            </p>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-300">
              <p className="font-semibold text-white">What we need</p>
              <ul className="mt-4 space-y-2">
                <li>• Your business goals and biggest challenges</li>
                <li>• The type of software and user experience you need</li>
                <li>• Your timeline, budget, and success metrics</li>
              </ul>
            </div>
          </div>

          <form
            className="grid gap-4 rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-lg"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                  placeholder="Alex Rivera"
                />
              </label>
              <label className="space-y-2 text-sm font-medium">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                  placeholder="Jandoc Software"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">
                <span>Business Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                  placeholder="alex@company.com"
                />
              </label>
              <label className="space-y-2 text-sm font-medium">
                <span>Project Budget</span>
                <select
                  name="budget"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-sky-500"
                >
                  <option value="">Select budget</option>
                  <option>$10k–$25k</option>
                  <option>$25k–$50k</option>
                  <option>$50k–$100k</option>
                  <option>$100k+</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">
                <span>Timeline</span>
                <select
                  name="timeline"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-sky-500"
                >
                  <option value="">Select timeline</option>
                  <option>Next 2 weeks</option>
                  <option>Next month</option>
                  <option>Next quarter</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium">
                <span>Project Description</span>
                <textarea
                  name="details"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-0 focus:border-sky-500"
                  placeholder="Describe your business, goals, and the solution you need."
                />
              </label>
            </div>

            <Button type="submit" className="rounded-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
