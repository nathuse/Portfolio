"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code2, TrendingUp } from "lucide-react";
import Image from "next/image";

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
"API Development"];


export const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    })
  };

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>

            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>

            Passionate about creating impactful solutions that bridge technology
            and business
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

            <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border">

              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>

                    <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765884626187.png?width=8000&height=8000&resize=contain"
                  alt="Nathnael Semere Assefa"
                  fill
                  className="object-cover !w-full !h-[199px] !max-w-full" />

                  </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Based in Ethiopia, I'm always learning, experimenting, and looking
                for opportunities to work on meaningful projects. I enjoy connecting
                technical work with real business needs, ensuring that every
                solution I build serves a purpose and creates value.
              </p>
            </motion.div>

          <motion.div
            variants={containerVariants}
            className="space-y-6">

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border">

              <motion.div
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 5 }}>

                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}>

                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-sm text-muted-foreground">Dual Degrees</p>
                </div>
              </motion.div>
              <ul className="space-y-2 text-muted-foreground">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}>

                  <span className="text-primary mt-1">•</span>
                  <span>Bachelor's in Software Engineering</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}>

                  <span className="text-primary mt-1">•</span>
                  <span>Bachelor's in Business Administration & Information Systems</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border">

              <motion.div
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 5 }}>

                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}>

                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-sm text-muted-foreground">Based in</p>
                </div>
              </motion.div>
              <p className="text-muted-foreground">Ethiopia 🇪🇹</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border">

              <motion.div
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 5 }}>

                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}>

                  <Briefcase className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">Focus Areas</h4>
                  <p className="text-sm text-muted-foreground">What I do</p>
                </div>
              </motion.div>
              <div className="flex flex-wrap gap-2 text-sm">
                <motion.span
                  className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>

                  <Code2 className="w-4 h-4" />
                  Full-Stack Development
                </motion.span>
                <motion.span
                  className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>

                  <TrendingUp className="w-4 h-4" />
                  Business Strategy
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -5 }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border">

          <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) =>
            <motion.span
              key={skill}
              custom={index}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg font-medium transition-all cursor-default">

                {skill}
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};