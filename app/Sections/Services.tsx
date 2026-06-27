import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Point of Sale",
    description:
      "Fast, reliable checkout flows for retail teams that need speed and simplicity.",
    highlight: "Real-time sales tracking",
  },
  {
    title: "Inventory Management",
    description:
      "Keep stock, suppliers, and replenishment in one clear system that your team can trust.",
    highlight: "Low-stock alerts",
  },
  {
    title: "CRM & Customer Journeys",
    description:
      "Create connected customer experiences with follow-ups, lead stages, and workflow automation.",
    highlight: "Smarter engagement",
  },
  {
    title: "AI Automation",
    description:
      "Use AI to reduce repetitive work and give your staff more time for high-value tasks.",
    highlight: "Process automation",
  },
  {
    title: "Dashboards & Analytics",
    description:
      "Turn your business data into clear decisions with executive-ready reporting dashboards.",
    highlight: "Live insights",
  },
  {
    title: "SaaS Platforms",
    description:
      "Launch subscription products with secure auth, billing logic, and scalable architecture.",
    highlight: "Growth-ready products",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Software built for the way your business actually works.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From daily operations to customer-facing experiences, we design
            products that feel effortless to use and easy to expand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-white/10 bg-white/5 text-left shadow-lg backdrop-blur"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-7 text-slate-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-sm font-medium text-sky-200">
                  {service.highlight}
                </div>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full rounded-full"
                >
                  <Link href="#contact">Discuss this solution</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
