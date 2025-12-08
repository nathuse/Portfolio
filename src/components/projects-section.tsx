"use client";

import { motion } from "framer-motion";
import { ExternalLink, Building2, Plane } from "lucide-react";
import Image from "next/image";

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
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions that make an impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-24 h-24 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                  {project.status === "Live" && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      Live
                    </div>
                  )}
                  {project.status === "In Progress" && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                      In Progress
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.status === "Live" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.status === "In Progress" && (
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-xl font-semibold cursor-not-allowed">
                      Coming Soon
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/nathuse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-all hover:shadow-lg"
          >
            View GitHub Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
