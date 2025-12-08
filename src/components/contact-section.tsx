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
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-secondary transition-all hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical Excellence</h4>
                  <p className="text-muted-foreground text-sm">
                    Strong foundation in software engineering with hands-on
                    experience in modern web technologies and best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Mindset</h4>
                  <p className="text-muted-foreground text-sm">
                    Unique blend of technical and business knowledge ensures
                    solutions align with your goals and deliver real value.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">User-Focused Approach</h4>
                  <p className="text-muted-foreground text-sm">
                    Every solution is built with the end user in mind, ensuring
                    practical and impactful results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Always exploring new technologies and methodologies to
                    deliver the best possible solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-xl">
              <p className="text-center text-sm text-muted-foreground">
                <span className="font-semibold text-foreground block mb-2">
                  Ready to start a project?
                </span>
                Reach out via email or any of the contact methods above. I'm
                always open to discussing new opportunities!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
