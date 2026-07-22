"use client";

import { useRef, useState } from "react";
import { Download, Github, Hammer, LayoutGrid, Linkedin, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const NAME = "NATHNAEL";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const traits = [
  { icon: Sparkles, label: "Creative" },
  { icon: ShieldCheck, label: "Reliable" },
  { icon: Target, label: "Strategist" },
  { icon: Hammer, label: "Builder" },
  { icon: Zap, label: "Efficient" },
];

const blurIn = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay, duration: 0.7, ease: EASE_OUT },
});

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll-driven exit: the hero scatters and blurs away as you scroll past it
  const nameY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-45%"]);
  const nameOpacity = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);
  const portraitBlurPx = useTransform(scrollYProgress, [0.05, 0.6], [0, 24]);
  const portraitBlur = useMotionTemplate`blur(${portraitBlurPx}px)`;
  const portraitOpacity = useTransform(scrollYProgress, [0.2, 0.75], [1, 0]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.12]);
  const taglineY = useTransform(scrollYProgress, [0, 0.6], [0, 90]);
  const taglineOpacity = useTransform(scrollYProgress, [0.05, 0.45], [1, 0]);
  const leftX = useTransform(scrollYProgress, [0, 0.6], [0, -140]);
  const rightX = useTransform(scrollYProgress, [0, 0.6], [0, 140]);
  const sidesOpacity = useTransform(scrollYProgress, [0.05, 0.5], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#D8D4C6] text-[#17150f]"
    >
      {/* Mobile top bar: brand chip, CTA, menu */}
      <motion.div
        style={{ opacity: sidesOpacity }}
        className="absolute inset-x-4 top-4 z-20 md:hidden"
      >
        <motion.div className="flex items-center justify-between" {...blurIn(0.2)}>
          <span className="rounded-xl bg-[#F2E900] px-3 py-2 text-sm font-black tracking-tight">
            NATHNAEL<span className="align-super text-[8px]">®</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-xl bg-[#F2E900] px-3.5 py-2 text-sm font-bold"
            >
              Get In Touch
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="rounded-xl bg-[#EFECE2]/90 p-2.5"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
      {menuOpen && (
        <div className="absolute right-4 top-[4.5rem] z-30 flex w-44 flex-col rounded-xl bg-[#17150f]/95 p-2 text-white backdrop-blur-md md:hidden">
          {["home", "about", "projects", "services", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => {
                setMenuOpen(false);
                scrollToSection(id);
              }}
              className="rounded-lg px-4 py-2.5 text-left text-xs font-bold uppercase tracking-widest hover:bg-white/10"
            >
              {id === "about" ? "About Me" : id}
            </button>
          ))}
        </div>
      )}

      {/* Giant staggered name */}
      <motion.h1
        aria-label={NAME}
        style={{ y: nameY, opacity: nameOpacity }}
        className="absolute inset-x-0 top-[9vh] z-[1] flex justify-center overflow-hidden font-black uppercase leading-none tracking-tight text-[#F2E900] select-none text-[14.5vw] md:top-[8vh] md:text-[15.5vw]"
      >
        {NAME.split("").map((letter, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: EASE_OUT }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Mini nav row, under the name */}
      <motion.nav
        style={{ opacity: sidesOpacity }}
        className="absolute inset-x-0 top-[8vh] z-[3] mt-[20vw] md:mt-[16.5vw] hidden md:flex items-center justify-between px-8 lg:px-14 text-[11px] font-semibold uppercase tracking-widest"
      >
        <motion.div style={{ x: leftX }} className="flex items-center gap-3" {...blurIn(1.5)}>
          {["home", "about", "projects"].map((id, i) => (
            <span key={id} className="flex items-center gap-3">
              {i > 0 && <span className="opacity-30">|</span>}
              <button
                onClick={() => scrollToSection(id)}
                className="uppercase tracking-widest transition-opacity hover:opacity-60"
              >
                {id === "about" ? "About Me" : id}
              </button>
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: rightX }} className="flex items-center gap-3" {...blurIn(1.5)}>
          <button
            onClick={() => scrollToSection("contact")}
            className="uppercase tracking-widest transition-opacity hover:opacity-60"
          >
            Contact
          </button>
          <span className="opacity-30">|</span>
          <a
            href="https://github.com/nathuse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-opacity hover:opacity-60"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <span className="opacity-30">|</span>
          <a
            href="https://www.linkedin.com/in/nathnael-semere-003721335"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-opacity hover:opacity-60"
          >
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
        </motion.div>
      </motion.nav>

      {/* Portrait cutout, rising in front of the name */}
      <motion.div
        style={{ filter: portraitBlur, opacity: portraitOpacity, scale: portraitScale }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-[76svh] w-max md:h-[82svh] -translate-x-1/2"
      >
        <motion.img
          src="/nathnael-cutout.png"
          alt="Portrait of Nathnael Semere Assefa"
          className="h-full w-auto max-w-none object-contain object-bottom"
          initial={{ opacity: 0, y: 140, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.85, duration: 1.1, ease: EASE_OUT }}
        />
      </motion.div>

      {/* Tagline over the portrait */}
      <motion.div
        style={{ y: taglineY, opacity: taglineOpacity }}
        className="absolute bottom-[23svh] left-1/2 z-[4] w-full max-w-6xl -translate-x-1/2 px-6 md:bottom-[22svh] md:px-10"
      >
        <div className="md:ml-[26%]">
          <div className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl">
            {["Code,", "Applied", "Differently."].map((line, i) => (
              <motion.span key={line} className="block" {...blurIn(1.6 + i * 0.12)}>
                {line}
              </motion.span>
            ))}
          </div>
          <motion.div className="mt-6 hidden flex-wrap items-center gap-3 md:flex" {...blurIn(2.4)}>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="rounded-md bg-[#F2E900] px-5 py-2.5 text-sm font-bold text-[#17150f]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/Nathnael-Semere-Assefa-CV.pdf"
              download
              className="flex items-center gap-2 rounded-md bg-[#17150f] px-5 py-2.5 text-sm font-bold text-[#F2E900]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <Download className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Stat cards, left */}
      <motion.div
        style={{ x: leftX, opacity: sidesOpacity }}
        className="absolute bottom-[20svh] left-6 z-[3] hidden flex-col gap-3 md:flex lg:left-14"
      >
        <motion.div
          className="w-44 rounded-xl bg-[#2a2822]/80 p-4 text-white backdrop-blur-md"
          {...blurIn(2.15)}
        >
          <div className="text-3xl font-black text-[#F2E900]">20+</div>
          <div className="mt-1 text-xs font-medium opacity-80">Projects built &amp; shipped</div>
        </motion.div>
        <motion.div
          className="w-44 rounded-xl bg-[#2a2822]/80 p-4 text-white backdrop-blur-md"
          {...blurIn(2.3)}
        >
          <div className="text-3xl font-black text-[#F2E900]">Full-Stack</div>
          <div className="mt-1 text-xs font-medium opacity-80">Web · Mobile · AR</div>
        </motion.div>
      </motion.div>

      {/* Trait list: left-floating on mobile, right column on desktop */}
      <motion.div
        style={{ x: rightX, opacity: sidesOpacity }}
        className="absolute left-4 top-[30svh] z-[3] md:left-auto md:top-auto md:bottom-[20svh] md:right-6 lg:right-14"
      >
        <motion.ul
          className="flex w-40 flex-col gap-2.5 rounded-xl bg-[#2a2822]/40 p-4 text-white backdrop-blur-sm md:bg-[#2a2822]/80 md:backdrop-blur-md"
          {...blurIn(2.25)}
        >
          {traits.map((trait, i) => (
            <motion.li
              key={trait.label}
              className="flex items-center gap-2.5 text-sm font-semibold"
              {...blurIn(2.35 + i * 0.08)}
            >
              <trait.icon className="h-4 w-4 text-[#F2E900]" />
              {trait.label}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Floating stat cards, mobile only */}
      <motion.div
        style={{ x: rightX, opacity: sidesOpacity }}
        className="absolute right-4 top-[46svh] z-[3] md:hidden"
      >
        <motion.div
          className="w-36 rounded-xl bg-[#2a2822]/40 p-4 text-center text-white backdrop-blur-sm"
          {...blurIn(2.2)}
        >
          <div className="text-4xl font-black text-[#F2E900]">2×</div>
          <div className="mt-1 text-xs font-semibold">
            Degrees, SWE &amp; Business
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ x: leftX, opacity: sidesOpacity }}
        className="absolute bottom-[8svh] left-4 z-[3] md:hidden"
      >
        <motion.div
          className="w-40 rounded-xl bg-[#2a2822]/40 p-4 text-white backdrop-blur-sm"
          {...blurIn(2.5)}
        >
          <div className="text-3xl font-black text-[#F2E900]">20+</div>
          <div className="mt-1 text-xs font-medium opacity-80">
            Projects built &amp; shipped
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom blurbs */}
      <motion.div style={{ opacity: sidesOpacity }}>
        <motion.p
          className="absolute bottom-4 left-4 right-4 z-[3] rounded-lg bg-[#D8D4C6]/90 px-3 py-2 text-[13px] font-medium leading-relaxed backdrop-blur-md lg:bottom-8 lg:left-14 lg:right-auto lg:max-w-[220px] lg:bg-transparent lg:p-0 lg:text-xs lg:opacity-70 lg:backdrop-blur-none"
          {...blurIn(3)}
        >
          Software engineer &amp; business strategist. That&apos;s Nathnael.
        </motion.p>
        <motion.p
          className="absolute bottom-8 right-6 z-[3] hidden max-w-[260px] text-xs font-medium leading-relaxed opacity-70 lg:block lg:right-14"
          {...blurIn(3.1)}
        >
          Building practical, user-focused solutions that connect technical work
          with real business needs — from Ethiopia 🇪🇹
        </motion.p>
      </motion.div>
    </section>
  );
};
