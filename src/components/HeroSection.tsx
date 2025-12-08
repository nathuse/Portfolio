"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Nathnael Semere Assefa
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
            Software Engineer & Business Strategist
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative digital solutions with expertise in Software Engineering and Business Administration. Based in Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8">
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="text-lg px-8">
              Get in Touch
            </Button>
          </div>
          <div className="pt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
