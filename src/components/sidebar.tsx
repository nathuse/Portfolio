"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  Check,
  Copy,
  FolderKanban,
  Github,
  Home,
  Layers,
  Linkedin,
  Mail,
  User,
} from "lucide-react";

const EMAIL = "nathisemere5@gmail.com";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "services", label: "Services", icon: Layers },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("home");
  const [copied, setCopied] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setVisible(v > window.innerHeight * 0.65);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <motion.aside
      className="fixed bottom-4 left-4 top-4 z-40 hidden w-52 flex-col gap-3 text-[#17150f] lg:flex"
      initial={false}
      animate={{ x: visible ? 0 : -260, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="rounded-xl border border-black/5 bg-[#E6E2D6]/90 p-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="rounded-md bg-[#F2E900] px-2.5 py-1 text-sm font-black tracking-tight"
          >
            NATHNAEL<span className="align-super text-[8px]">®</span>
          </button>
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/nathuse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md bg-[#17150f] p-1.5 text-white transition-transform hover:scale-110"
            >
              <Github className="h-3 w-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathnael-semere-003721335"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md bg-[#17150f] p-1.5 text-white transition-transform hover:scale-110"
            >
              <Linkedin className="h-3 w-3" />
            </a>
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed opacity-70">
          Connecting technical work with real business needs — every build
          serves a purpose.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-[#E6E2D6]/90 p-4 backdrop-blur-md">
        <div className="flex-1">
          <div className="text-xl font-black text-[#c7ae00]">20+</div>
          <div className="text-[10px] font-medium opacity-70">Projects</div>
        </div>
        <div className="h-8 w-px bg-black/10" />
        <div className="flex-1">
          <div className="text-xl font-black text-[#c7ae00]">2×</div>
          <div className="text-[10px] font-medium opacity-70">Degrees</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1 rounded-xl border border-black/5 bg-[#E6E2D6]/90 p-3 backdrop-blur-md">
        {items.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex items-center gap-2.5 rounded-full px-3 py-1.5 text-left text-xs font-bold uppercase tracking-wide transition-colors ${
              active === id ? "bg-[#F2E900]" : "hover:bg-black/5"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <button
          onClick={copyEmail}
          className="flex w-full items-center justify-between gap-2 rounded-xl border border-black/5 bg-[#E6E2D6]/90 px-3 py-2.5 text-[11px] font-medium opacity-90 backdrop-blur-md transition-opacity hover:opacity-100"
          title="Copy email"
        >
          <span className="truncate">{EMAIL}</span>
          {copied ? (
            <Check className="h-3.5 w-3.5 shrink-0 text-green-700" />
          ) : (
            <Copy className="h-3.5 w-3.5 shrink-0" />
          )}
        </button>
        <motion.button
          onClick={() => scrollTo("contact")}
          className="w-full rounded-xl bg-[#F2E900] py-3 text-sm font-bold"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Get In Touch
        </motion.button>
      </div>
    </motion.aside>
  );
};
