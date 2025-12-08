"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e4c13527-9912-43d6-a277-d86b0ee39207/generated_images/modern-minimalist-professional-logo-desi-19be2d50-20251208204955.jpg"
              alt="NSA Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-bold text-xl">NSA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
