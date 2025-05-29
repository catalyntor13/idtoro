import FeatureCard from "@/app/components/feature-card"
import { Video, Store, Globe } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Video />,
      title: "Editare video profesională",
      description:
        "Transformăm conținutul brut în videoclipuri dinamice și captivante, perfecte pentru promovare, social media sau prezentări de brand.",
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon:  <Globe />,
      title: " Website-uri rapide și moderne",
      description: "Construim site-uri optimizate, responsive și ușor de administrat, care pun în valoare brandul tău și îmbunătățesc experiența utilizatorului.",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon:  <Store />,
      title: "Marketing & Optimizare",
      description: "Implementăm strategii inteligente de promovare online, SEO și automatizări care atrag clienți și cresc vizibilitatea afacerii tale.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
   
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="features" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-[20px]">
              Key Features
            </div>
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
             Platformă IT profesională pentru afaceri moderne
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Infrastructură digitală de încredere, adaptată nevoilor fiecărei companii: de la site-uri rapide la campanii de marketing bine optimizate.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
