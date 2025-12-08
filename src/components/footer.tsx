"use client";

import { Github, Linkedin, Send, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">NS</span>
              </div>
              <span className="font-semibold text-lg">Nathnael Semere</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Software Engineer & Business Strategist based in Ethiopia, building
              meaningful solutions that make an impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/nathuse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nathnael-semere-003721335"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/Natuh21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <a
                href="mailto:nathisemere5@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                nathisemere5@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Nathnael Semere Assefa. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in
              Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};