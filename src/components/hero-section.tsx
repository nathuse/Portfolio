"use client";

import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Nathnael Semere Assefa
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-4">
              Software Engineer & Business Strategist
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building practical, user-focused solutions and connecting technical
              work with real business needs from Ethiopia 🇪🇹
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-all hover:shadow-lg"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <a
              href="https://github.com/nathuse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-full transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathnael-semere-003721335"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-full transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
