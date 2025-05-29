import { Button } from "@/components/ui/button"
import CssGridBackground from "../css-grid-background"
import FramerSpotlight from "../framer-spotlight"
import TypingPromptInput from "../typing-prompt-input"


export default function Hero1() {
    return (

        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">IT Solution</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Soluții IT inteligente pentru afacerea ta
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
               Realizăm website-uri performante, edităm videoclipuri captivante și implementăm strategii de marketing care generează rezultate. Tot ce ai nevoie pentru a-ți crește prezența online — într-un singur loc.
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-3 mt-16">
                <Button className="flex items-center gap-3 px-5 py-6 h-[60px] bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-cyan-500 dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)] relative overflow-hidden group cursor-pointer">
                  Incepe Acum
                </Button>
                <Button className="px-5 py-6 h-[60px] rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-[15px] font-medium text-foreground cursor-pointer">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

    )
}
        