"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Tabu Construction",
      description: "A comprehensive website for a construction company showcasing their projects, services, and expertise. Features include project galleries, service descriptions, and contact forms for client inquiries.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e4c13527-9912-43d6-a277-d86b0ee39207/generated_images/modern-construction-company-website-hero-5b059490-20251208205011.jpg",
      url: "https://tabuconstruction.com",
      tags: ["Web Development", "Corporate", "Construction"]
    },
    {
      title: "Ethiotrails",
      description: "A tour and travel company website designed to showcase Ethiopia's rich cultural heritage and breathtaking landscapes. Features tour packages, booking systems, and destination guides for travelers.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e4c13527-9912-43d6-a277-d86b0ee39207/generated_images/ethiopian-travel-and-tourism-website-sho-6cfe79b5-20251208205012.jpg",
      url: "https://ethiotrails.com",
      tags: ["Web Development", "Tourism", "Travel"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
