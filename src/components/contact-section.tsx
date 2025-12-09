"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nathisemere5@gmail.com",
    href: "mailto:nathisemere5@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 979310820",
    href: "tel:+251979310820",
  },
  {
    icon: Phone,
    label: "Phone (Alt)",
    value: "+251 799110820",
    href: "tel:+251799110820",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@Natuh21",
    href: "https://t.me/Natuh21",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nathuse",
    color: "hover:bg-gray-600 hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathnael-semere-003721335",
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/Natuh21",
    color: "hover:bg-blue-500 hover:text-white",
  },
];

export const ContactSection = () => {
  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle mailto and tel links normally
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return; // Let default behavior handle these
    }

    // For external links (http/https), handle iframe context
    if (href.startsWith("http")) {
      e.preventDefault();
      
      // Check if we're in an iframe
      const isInIframe = window.self !== window.top;
      
      if (isInIframe) {
        // Post message to parent to open in new tab
        window.parent.postMessage(
          { type: "OPEN_EXTERNAL_URL", data: { url: href } },
          "*"
        );
      } else {
        // Not in iframe, open normally
        window.open(href, "_blank", "noopener,noreferrer");
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const reasonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's collaborate on your next project or discuss opportunities
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleLinkClick(item.href, e)}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div className="pointer-events-none">
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      onClick={(e) => handleLinkClick(social.href, e)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-secondary transition-all cursor-pointer ${social.color}`}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: 360,
                        transition: { duration: 0.4 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-6 h-6 pointer-events-none" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
            <div className="space-y-6">
              {[
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
              ].map((reason, index) => (
                <motion.div
                  key={reason.number}
                  className="flex items-start gap-4"
                  custom={index}
                  variants={reasonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "var(--primary)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.span
                      className="text-primary font-bold"
                      whileHover={{ color: "var(--primary-foreground)" }}
                    >
                      {reason.number}
                    </motion.span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-2">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-primary/10 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "var(--primary)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.p
                className="text-center text-sm text-muted-foreground"
                whileHover={{ color: "var(--primary-foreground)" }}
              >
                <span className="font-semibold text-foreground block mb-2">
                  Ready to start a project?
                </span>
                Reach out via email or any of the contact methods above. I'm
                always open to discussing new opportunities!
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};