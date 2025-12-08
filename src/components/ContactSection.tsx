"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:nathisemere5@gmail.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    nathisemere5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+251 979310820</p>
                  <p className="text-muted-foreground">+251 799110820</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Send className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Telegram</h3>
                  <a 
                    href="https://t.me/Natuh21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @Natuh21
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Github className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/nathuse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/nathuse
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-4 text-center">Connect on Social Media</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a 
                    href="https://www.linkedin.com/in/nathnael-semere-003721335" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a 
                    href="https://github.com/nathuse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
