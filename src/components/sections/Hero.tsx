import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Développeur <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Web</span> et <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">Mobile</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            Passionné par la création d'applications modernes et performantes, avec 2 ans d'expérience professionnelle et une formation en informatique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-more">
            <Button asChild size="lg" className="px-6">
              <a href="#projects">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="px-6">
              <a href="/images/cv.pdf" download>
                Télécharger CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}