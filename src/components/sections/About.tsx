import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos de Moi</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Développeur web avec 2 ans d'expérience, passionné par les technologies modernes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Parcours Professionnel</h3>
            <p className="text-gray-700 mb-6">
              Je suis un développeur web passionné avec 2 années d'expérience dans la création d'applications web
              modernes et réactives. Je me spécialise dans les technologies front-end et back-end, et j'adore relever de nouveaux défis techniques.
            </p>
            <p className="text-gray-700 mb-6">
              Mon objectif est de créer des solutions web performantes et accessibles qui offrent une expérience utilisateur exceptionnelle
              tout en respectant les meilleures pratiques du développement.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">React</Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">TypeScript</Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Node.js</Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Tailwind CSS</Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Git</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-full">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Formation</h4>
                      <p className="text-sm text-gray-600">Licence en Informatique</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-full">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expérience</h4>
                      <p className="text-sm text-gray-600">2 années</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
              <img 
                src="../../public/images/pp.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="border-none shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-full shrink-0">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Compétences techniques</h3>
                <p className="text-gray-600">
                  Développement front-end et back-end avec les technologies modernes. 
                  Conception d'interfaces utilisateur intuitives et responsive.
                  Implémentation des meilleures pratiques de développement.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-full shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Passions</h3>
                <p className="text-gray-600">
                  Passionné par l'apprentissage continu des nouvelles technologies, 
                  l'optimisation des performances web, et la création d'expériences utilisateur exceptionnelles.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}