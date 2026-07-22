"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Tabu Construction",
    description:
      "A corporate website for a construction company, showcasing their services, completed projects, and expertise — turning word-of-mouth referrals into a professional first impression.",
    link: "https://tabuconstruction.com",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765881616542.png?width=8000&height=8000&resize=contain",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    num: "02",
    title: "Ethiotrails",
    description:
      "An immersive tour and travel website showcasing Ethiopia's destinations and travel packages, built around engaging visuals and intuitive navigation for seamless trip planning.",
    link: "https://www.ethiotrails.com",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765881674539.png?width=8000&height=8000&resize=contain",
    tags: ["Next.js", "TypeScript", "UI/UX"],
  },
  {
    num: "03",
    title: "Elume",
    description:
      "A furnished-apartment rental platform for Addis Ababa — guests browse units and book online, while an admin dashboard lets owners manage listings and reservations end to end.",
    link: "https://elumeapartment.com",
    image: "/projects/elume.jpg",
    tags: ["Booking Platform", "Admin Dashboard", "React"],
  },
  {
    num: "04",
    title: "Legacy Law Firm",
    description:
      "A polished website for a full-service Ethiopian law firm — practice areas, fee calculators, and one-tap consultation booking over email, phone, WhatsApp, and Telegram.",
    link: "https://legacylawfirmethiopia.com",
    image: "/projects/legacy.jpg",
    tags: ["Next.js", "Tailwind", "Responsive"],
  },
];

export const ProjectsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });

  // Measure exactly how far the track must travel so the last card ends
  // fully in view on any screen size, instead of guessing a percentage.
  const [shift, setShift] = useState(0);
  useEffect(() => {
    const measure = () => {
      const sticky = stickyRef.current;
      const cards = cardsRef.current;
      if (!sticky || !cards) return;
      const styles = getComputedStyle(sticky);
      const visible =
        sticky.clientWidth -
        parseFloat(styles.paddingLeft) -
        parseFloat(styles.paddingRight);
      setShift(Math.max(0, cards.scrollWidth - visible));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);
  const x = useTransform(scrollYProgress, [0.08, 0.92], [0, -shift]);

  return (
    <section id="projects" className="relative bg-[#0e0d09] text-white">
      <div ref={trackRef} className="relative h-[320vh]">
        <div
          ref={stickyRef}
          className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6 md:px-10 lg:pl-72 lg:pr-0"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-white/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                Selected Work
              </span>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Built to Ship,
                <br />
                Made to Perform
              </h2>
            </motion.div>
            <motion.p
              className="max-w-sm text-sm leading-relaxed text-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I&apos;ve helped businesses across different industries turn their
              ideas into websites and platforms that look and work exactly how
              they imagined. Here&apos;s a look at some of that work.
            </motion.p>
          </div>

          <motion.div ref={cardsRef} style={{ x }} className="mt-12 flex gap-6">
            {projects.map((project) => (
              <article
                key={project.num}
                className="group relative flex w-[82vw] shrink-0 flex-col overflow-hidden rounded-2xl bg-[#1b1a14] sm:w-[460px]"
              >
                <div className="flex items-center justify-between p-4">
                  <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-bold">
                    {project.num}
                  </span>
                  <div className="flex gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-medium text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-56 overflow-hidden px-4">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2E900] text-[#17150f] transition-transform hover:scale-110"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
