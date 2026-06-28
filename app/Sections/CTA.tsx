import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-slate-100 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Ready to launch?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ready to Build Your Next Software Project?
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Let's discuss your idea and turn it into a modern scalable
              application.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Book a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="#contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
