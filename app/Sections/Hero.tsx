import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "10+", label: "Launches shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support coverage" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-6 py-8 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col">
        <header className="mb-10 flex flex-wrap items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <Link
            href="#home"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            Jandoc Software
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-sm text-white">
            Available for new projects
          </span>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Trusted by growing businesses that value speed and clarity
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Custom software that turns daily operations into a growth
                engine.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                We build polished POS, inventory, CRM, analytics, and AI
                automation tools that help your team work faster and serve
                customers better.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">Book a free strategy call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#services">Explore services</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"
                >
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              What you can expect
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="font-semibold text-white">
                  Discovery-led planning
                </span>{" "}
                so your system matches your workflow from day one.
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="font-semibold text-white">
                  Fast, scalable builds
                </span>{" "}
                with modern Next.js, React, and TypeScript.
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="font-semibold text-white">
                  Ongoing support
                </span>{" "}
                for updates, improvements, and team onboarding.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
