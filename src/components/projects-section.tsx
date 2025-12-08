"use client";

import { motion } from "framer-motion";
import { ExternalLink, Building2, Plane } from "lucide-react";

const projects = [
  {
    title: "Tabu Construction",
    description:
      "A comprehensive website for a construction company showcasing their services, projects, and expertise. Built with modern web technologies to provide an excellent user experience and professional online presence.",
    link: "https://tabuconstruction.com",
    icon: Building2,
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    status: "Live",
  },
  {
    title: "Ethiotrails",
    description:
      "An immersive tour and travel company website designed to showcase Ethiopia's beautiful destinations and travel packages. Features engaging visuals and intuitive navigation for seamless trip planning.",
    link: "#",
    icon: Plane,
    tags: ["Next.js", "TypeScript", "UI/UX Design", "Travel Platform"],
    status: "In Progress",
  },
];

export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Real-world solutions that make an impact
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={projectVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                  >
                    <Icon className="w-24 h-24 text-primary/40 relative z-10" />
                  </motion.div>
                  {project.status === "Live" && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      Live
                    </motion.div>
                  )}
                  {project.status === "In Progress" && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(234, 179, 8, 0.4)",
                          "0 0 0 10px rgba(234, 179, 8, 0)",
                        ],
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      In Progress
                    </motion.div>
                  )}
                </div>

                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + tagIndex * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {project.status === "Live" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Website
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  )}
                  {project.status === "In Progress" && (
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-xl font-semibold cursor-not-allowed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      Coming Soon
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.p
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Want to see more of my work?
          </motion.p>
          <motion.a
            href="https://github.com/nathuse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub Profile
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};