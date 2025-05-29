import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Am primit un website modern, exact cum ne doream. Totul a fost livrat la timp, iar comunicarea a fost excelentă pe tot parcursul proiectului.",
      name: "Ema Karter",
      title: "Artista, Influencer",
      avatar: "EK",
    },
    {
      quote:
        "Echipa a creat un site atractiv, care ne-a ajutat să atragem mai mulți clienți. Ne-au oferit și suport după lansare, ceea ce a fost un mare plus!",
      name: "Boonie Blue",
      title: "Director la OnlyFans",
      avatar: "BB",
    },
    {
      quote:
        "Serviciile lor de marketing și optimizare ne-au crescut vizibilitatea în online. Rezultate reale, livrate rapid. Îi recomand cu încredere!",
      name: "David Ramon",
      title: "Cercetator NASA, CERN",
      avatar: "DR",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Partener de incredere
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Vezi ce spun clientii nostri
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">&quot;</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

