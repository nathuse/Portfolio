"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Rocket, Scan } from "lucide-react";

const chapters = [
  {
    num: "01",
    title: "Two degrees, one lens",
    text: "I studied Software Engineering and Business Administration & Information Systems side by side. Ever since, I can't look at code without seeing the business case — or at a business problem without sketching the system.",
    icon: GraduationCap,
    handle: "@education",
  },
  {
    num: "02",
    title: "First client sites",
    text: "Local businesses became my first clients — a construction company, then a full-service law firm. Word-of-mouth reputations turned into credible online presences.",
    icon: Briefcase,
    handle: "@clients",
  },
  {
    num: "03",
    title: "From websites to platforms",
    text: "Elume let guests book furnished apartments in Addis Ababa online, with an admin dashboard replacing scattered manual bookings. Ethiotrails brought Ethiopia's destinations to travelers worldwide.",
    icon: Rocket,
    handle: "@products",
  },
  {
    num: "04",
    title: "Beyond the browser",
    text: "Now I'm experimenting past the web — augmented-reality dining menus you can view at true scale from a QR code, and computer-vision prototypes for road safety.",
    icon: Scan,
    handle: "@rnd",
  },
  {
    num: "05",
    title: "The journey continues",
    text: "Based in Ethiopia, always learning. Every solution I build has to serve a purpose and create value — that's the whole point.",
    icon: MapPin,
    handle: "@today",
  },
];

// Weaving S-curve through alternating anchors, like the reference video.
// Built in pixel coordinates measured from the timeline box: dash-based path
// drawing (framer's pathLength) miscomputes in Chrome when the viewBox is
// stretched with non-scaling strokes, so the geometry must be 1:1.
const buildCurve = (count: number, w: number, h: number) => {
  const seg = h / count;
  const anchors = Array.from({ length: count }, (_, i) => ({
    x: w * (i % 2 === 0 ? 0.86 : 0.14),
    y: seg * (i + 0.5),
  }));
  let d = `M ${w / 2} 0`;
  let prev = { x: w / 2, y: 0 };
  for (const a of anchors) {
    d += ` C ${prev.x} ${prev.y + seg * 0.45}, ${a.x} ${a.y - seg * 0.45}, ${a.x} ${a.y}`;
    prev = a;
  }
  d += ` C ${prev.x} ${prev.y + seg * 0.45}, ${w / 2} ${h - seg * 0.3}, ${w / 2} ${h}`;
  return { d, anchors };
};

const cardReveal = {
  initial: { opacity: 0, y: 60, filter: "blur(14px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.45 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export const AboutSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  // Symmetric offsets make progress equal the fraction of the timeline that
  // has crossed the 80%-viewport line — so the tip of the drawn curve rides
  // that line, staying just below what the user is reading, never racing off.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.8"],
  });
  const drawProgress = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  const [box, setBox] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setBox({ w: el.offsetWidth, h: el.offsetHeight });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const curve = box.h > 0 ? buildCurve(chapters.length, box.w, box.h) : null;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#D8D4C6] px-6 py-24 text-[#17150f] md:px-10 lg:pl-72 lg:pr-16"
    >
      {/* Blurred portrait backdrop */}
      <img
        src="/nathnael-cutout.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 w-[520px] max-w-none -translate-x-1/2 opacity-25 blur-2xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div {...cardReveal} viewport={{ once: true, amount: 0.4 }}>
          <span className="inline-block rounded-full border border-[#17150f] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            Start Small · Grow Big
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            About Me (&amp;)
            <br />
            <span className="opacity-60">My Journey</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed opacity-70">
            A software engineer with a business brain. What happened between the
            first degree and today is easier to show than explain.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-20">
          {/* Curved path, drawn as you scroll */}
          {curve && (
            <>
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox={`0 0 ${box.w} ${box.h}`}
                fill="none"
                aria-hidden
              >
                <path
                  d={curve.d}
                  stroke="#17150f"
                  strokeOpacity="0.22"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <motion.path
                  d={curve.d}
                  stroke="#17150f"
                  strokeOpacity="0.65"
                  strokeWidth="1.5"
                  style={{ pathLength: drawProgress }}
                />
              </svg>
              {/* Dots on the curve */}
              {curve.anchors.map((a, i) => (
                <span
                  key={i}
                  className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#17150f] bg-[#F2E900]"
                  style={{ left: a.x, top: a.y }}
                />
              ))}
            </>
          )}

          <div className="flex flex-col gap-16 lg:gap-24">
            {chapters.map((chapter, i) => (
              <div
                key={chapter.num}
                className={`relative flex w-[86%] sm:w-[70%] lg:w-1/2 ${
                  i % 2 === 0
                    ? "self-start pr-4 lg:pr-14"
                    : "self-end pl-4 lg:pl-14"
                }`}
              >
                <motion.article
                  {...cardReveal}
                  className="w-full rounded-2xl border border-black/5 bg-[#E6E2D6]/85 p-6 shadow-[0_20px_50px_-20px_rgba(23,21,15,0.25)] backdrop-blur-md"
                >
                  <div className="text-5xl font-black text-[#F2E900] [text-shadow:0_1px_0_rgba(23,21,15,0.2)]">
                    &apos;{chapter.num}
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{chapter.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">
                    {chapter.text}
                  </p>
                  <div className="mt-4 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17150f] text-[#F2E900]">
                      <chapter.icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold opacity-60">
                      {chapter.handle}
                    </span>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
