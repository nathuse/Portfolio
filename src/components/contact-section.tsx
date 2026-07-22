"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nathisemere5@gmail.com",
    href: "mailto:nathisemere5@gmail.com",
    isExternal: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 979310820",
    href: "tel:+251979310820",
    isExternal: false,
  },
  {
    icon: Phone,
    label: "Phone (Alt)",
    value: "+251 799110820",
    href: "tel:+251799110820",
    isExternal: false,
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@Natuh21",
    href: "https://t.me/Natuh21",
    isExternal: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+251 979310820",
    href: "https://wa.me/251979310820",
    isExternal: true,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nathuse",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathnael-semere-003721335",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/Natuh21",
  },
];

const reasons = [
  {
    number: "1",
    title: "Technical Excellence",
    description:
      "Strong foundation in software engineering with hands-on experience in modern web technologies and best practices.",
  },
  {
    number: "2",
    title: "Business Mindset",
    description:
      "Unique blend of technical and business knowledge ensures solutions align with your goals and deliver real value.",
  },
  {
    number: "3",
    title: "User-Focused Approach",
    description:
      "Every solution is built with the end user in mind, ensuring practical and impactful results.",
  },
  {
    number: "4",
    title: "Continuous Learning",
    description:
      "Always exploring new technologies and methodologies to deliver the best possible solutions.",
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
});

export const ContactSection = () => {
  const handleLinkClick = (
    href: string,
    isExternal: boolean,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }
    if (isExternal && href.startsWith("http")) {
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
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#D8D4C6] px-6 py-24 text-[#17150f] md:px-10 lg:pl-72 lg:pr-16"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div {...reveal()}>
          <span className="inline-block rounded-full border border-[#17150f] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get In
            <br />
            <span className="opacity-60">Touch</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
            Let&apos;s collaborate on your next project or discuss
            opportunities.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <motion.div
              {...reveal(0.1)}
              className="rounded-2xl bg-[#17150f] p-7 text-white"
            >
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="mt-5 space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleLinkClick(item.href, item.isExternal, e)}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-xl bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                    >
                      <span className="rounded-lg bg-[#F2E900] p-2">
                        <Icon className="h-4 w-4 text-[#17150f]" />
                      </span>
                      <span className="pointer-events-none">
                        <span className="block text-xs text-white/50">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium transition-colors group-hover:text-[#F2E900]">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              {...reveal(0.2)}
              className="rounded-2xl bg-[#17150f] p-7 text-white"
            >
              <h3 className="text-xl font-bold">Connect With Me</h3>
              <div className="mt-5 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      onClick={(e) =>
                        handleLinkClick(social.href, true, e)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-[#F2E900] hover:text-[#17150f]"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <Icon className="pointer-events-none h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            {...reveal(0.15)}
            className="rounded-2xl bg-[#17150f] p-7 text-white"
          >
            <h3 className="text-xl font-bold">Why Work With Me?</h3>
            <div className="mt-6 space-y-5">
              {reasons.map((reason) => (
                <div key={reason.number} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2E900] font-bold text-[#17150f]">
                    {reason.number}
                  </span>
                  <div>
                    <h4 className="font-semibold">{reason.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-[#F2E900] p-6 text-[#17150f]">
              <p className="text-center text-sm">
                <span className="mb-1.5 block font-bold">
                  Ready to start a project?
                </span>
                Reach out via email or any of the contact methods above.
                I&apos;m always open to discussing new opportunities!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
