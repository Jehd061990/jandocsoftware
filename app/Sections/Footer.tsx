import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    items: ["About", "Services", "Projects", "Contact"],
  },
  {
    title: "Services",
    items: ["Web Applications", "SaaS", "AI Automation", "CRM", "POS"],
  },
  {
    title: "Projects",
    items: ["SukiGo POS", "Restaurant POS", "Inventory", "Dashboard"],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-6 py-14 text-slate-300 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-white">JANDOC SOFTWARE</p>
            <p className="mt-4 max-w-md text-sm leading-7">
              Custom web applications, SaaS platforms, AI automation, and
              business solutions for growing companies.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                {section.title}
              </p>
              <ul className="space-y-3 text-sm">
                {section.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Contact
            </p>
            <p className="text-sm leading-7">Email: hello@jandocsoftware.com</p>
            <p className="mt-3 text-sm leading-7">Location: Philippines</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Follow
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="transition hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 Jandoc Software
        </div>
      </div>
    </footer>
  );
};

export default Footer;
