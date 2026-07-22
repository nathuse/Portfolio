"use client";

import { Github, Linkedin, Send } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExternalLink = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage(
        { type: "OPEN_EXTERNAL_URL", data: { url: href } },
        "*"
      );
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="bg-[#17150f] text-white lg:pl-72">
      <div className="mx-auto max-w-4xl px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-[#F2E900] px-2.5 py-1 text-sm font-black tracking-tight text-[#17150f]">
                NATHNAEL<span className="align-super text-[8px]">®</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Software Engineer &amp; Business Strategist based in Ethiopia,
              building meaningful solutions that make an impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm text-white/60 transition-colors hover:text-[#F2E900]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/nathuse" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/nathnael-semere-003721335",
                },
                { icon: Send, label: "Telegram", href: "https://t.me/Natuh21" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => handleExternalLink(social.href, e)}
                  className="rounded-lg bg-white/10 p-3 transition-all hover:scale-110 hover:bg-[#F2E900] hover:text-[#17150f]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-white/60">
              <a
                href="mailto:nathisemere5@gmail.com"
                className="transition-colors hover:text-[#F2E900]"
              >
                nathisemere5@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {currentYear} Nathnael Semere Assefa. Code, Applied Differently.
        </div>
      </div>
    </footer>
  );
};
