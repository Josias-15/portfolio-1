import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Layout, Database, Wrench, Globe, Sparkles } from "lucide-react";

// Updated skills data
const technicalSkills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "Git", level: 85 },
];

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-white" />,
    color: "from-blue-500 to-blue-600",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "SASS"],
  },
  {
    title: "Backend",
    icon: <Code className="h-6 w-6 text-white" />,
    color: "from-teal-500 to-teal-600",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Base de données",
    icon: <Database className="h-6 w-6 text-white" />,
    color: "from-indigo-500 to-indigo-600",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "Outils & Méthodes",
    icon: <Wrench className="h-6 w-6 text-white" />,
    color: "from-amber-500 to-amber-600",
    skills: ["Git", "GitHub", "VS Code", "Kanban", "Figma", "Agile/Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px bg-gradient-to-r from-blue-500 to-teal-500 w-12"></div>
            <span className="text-blue-500 font-medium">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-gray-600 max-w-2xl">
            Avec 2 ans d'expérience en développement web, j'ai acquis une maîtrise solide des technologies
            front-end et back-end pour créer des applications modernes et performantes.
          </p>
        </div>

        {/* Skill Categories Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden">
              <div className={`bg-gradient-to-r ${category.color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills with Progress Bars */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-blue-500" />
              Niveaux de Maîtrise
            </h3>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-200" 
                    indicatorClassName="bg-gradient-to-r from-blue-500 to-teal-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-blue-500" />
              Compétences Additionnelles
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Langues</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Français</span>
                      <span className="text-gray-600">Maîtrise</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Anglais</span>
                      <span className="text-gray-600">Intermédiaire</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md bg-gradient-to-br from-teal-50 to-teal-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <ul className="space-y-2">
                    <li>Travail d'équipe</li>
                    <li>Communication</li>
                    <li>Résolution de problèmes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}