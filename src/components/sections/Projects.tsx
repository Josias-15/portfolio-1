import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// Project data with local images
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce avec panier, paiement et gestion des commandes.",
    image: "/images/Ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Analytics",
    description: "Un dashboard interactif pour visualiser et analyser les données d'entreprise.",
    image: "/images/portfolio1.png",
    tags: ["React.js", "Tailwind"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Application de Réservation de billets de Voyage",
    description: "Une app pour reserver les billets de voyage inter-urbain dans differente agence de voyage.",
    image: "/images/vy.jpg", // Using Ecommerce image as fallback for the third project
    tags: ["React Native", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px bg-gradient-to-r from-blue-500 to-teal-500 w-12"></div>
            <span className="text-blue-500 font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets Récents</h2>
          <p className="text-gray-600 max-w-2xl">
            Découvrez une sélection de mes projets récents qui démontrent mes compétences 
            techniques et ma capacité à résoudre des problèmes complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col border-none shadow-lg transition-all duration-300 hover:-translate-y-2">
              {/* Project Image in CardHeader */}
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              
              {/* Project Details */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Démo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Voir tous les projets
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}