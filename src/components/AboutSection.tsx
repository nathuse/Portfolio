"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin, Code, Briefcase } from "lucide-react"

export default function AboutSection() {
  const skills = [
    "Full-Stack Development",
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Database Design",
    "UI/UX Design",
    "Business Strategy",
    "Project Management"
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Passionate software engineer with a unique blend of technical expertise and business acumen. 
                I specialize in creating robust, scalable web applications that solve real-world problems 
                and drive business growth. My dual background allows me to bridge the gap between technology 
                and business objectives effectively.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Software Engineering</h3>
                  <p className="text-sm text-muted-foreground">Bachelor's Degree</p>
                </div>
                <div>
                  <h3 className="font-semibold">Business Administration & Information Systems</h3>
                  <p className="text-sm text-muted-foreground">Bachelor's Degree</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Skills & Expertise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span className="text-lg">Based in Ethiopia</span>
        </div>
      </div>
    </section>
  )
}
