"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"


export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your inquiry has been received. Our enterprise team will contact you shortly to discuss your specific
            requirements.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Inquiry</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="contact">
     <div className="container px-4 md:px-10 py-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Pachete de Prețuri Flexibile


                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                  Oferim pachete personalizate, accesibile și adaptate nevoilor afacerii tale, pentru a-ți asigura cel mai bun raport calitate-preț pentru serviciile noastre.
                  </p>
                </div>
            
                <div className="pt-4">
                  <p className="font-medium">
                    Contactați-ne pentru o ofertă personalizată și pentru a discuta cerințele dumneavoastră specifice.
                  </p>
                </div>
              </div>
              <div className="lg:ml-10">
                
                 <Card>
      <CardHeader>
        <CardTitle>Contactați Echipa Noastra</CardTitle>
        <CardDescription>
          Fill out the form below to discuss your organization&apos;s needs and receive a custom quote.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nume</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Prenume</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" placeholder="Acme Inc." required />
          </div>
         
          <div className="space-y-2">
            <Label htmlFor="message">Cum va putem ajuta ?</Label>
            <Textarea id="message" placeholder="Tell us about your specific requirements and use cases..." rows={4} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Trimite cerere"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
              </div>
            </div>
          </div>
   </section>
  )
}
