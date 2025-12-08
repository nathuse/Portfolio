"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code2, TrendingUp } from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Business Strategy",
  "Project Management",
  "Database Design",
  "API Development",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating impactful solutions that bridge technology
            and business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a software engineer with a unique blend of technical expertise
              and business acumen. With bachelor's degrees in both{" "}
              <span className="text-foreground font-semibold">
                Software Engineering
              </span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">
                Business Administration & Information Systems
              </span>
              , I specialize in building practical, user-focused solutions that
              make a real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Ethiopia, I'm always learning, experimenting, and looking
              for opportunities to work on meaningful projects. I enjoy connecting
              technical work with real business needs, ensuring that every
              solution I build serves a purpose and creates value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-sm text-muted-foreground">Dual Degrees</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bachelor's in Software Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bachelor's in Business Administration & Information Systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-sm text-muted-foreground">Based in</p>
                </div>
              </div>
              <p className="text-muted-foreground">Ethiopia 🇪🇹</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Focus Areas</h4>
                  <p className="text-sm text-muted-foreground">What I do</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <Code2 className="w-4 h-4" />
                  Full-Stack Development
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  Business Strategy
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg font-medium transition-all hover:scale-105 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
