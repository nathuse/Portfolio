"use client";

import { motion } from "framer-motion";
import { Code2, LayoutDashboard, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Fast, responsive websites that give businesses a credible online presence.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: LayoutDashboard,
    title: "Platforms & Dashboards",
    text: "Booking systems, admin dashboards, and APIs that replace manual work with software.",
    tags: ["Database Design", "API Development", "Node.js"],
  },
  {
    icon: TrendingUp,
    title: "Strategy & Product",
    text: "Connecting technical decisions to business outcomes, from scoping to launch.",
    tags: ["Business Strategy", "Project Management", "UI/UX Design"],
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
});

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-[#D8D4C6] px-6 py-24 text-[#17150f] md:px-10 lg:pl-72 lg:pr-16"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div {...reveal()}>
          <span className="inline-block rounded-full border border-[#17150f] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            Services
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Solutions
            <br />
            <span className="opacity-60">That Deliver</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
            Same quality, same attention to detail — whatever the size of the
            project.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              {...reveal(0.1 + i * 0.12)}
              className="flex flex-col rounded-2xl bg-[#17150f] p-6 text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2E900] text-[#17150f]">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {service.text}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
