import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
            >
              Portfolio
            </a>
            <p className="text-gray-600 mt-2 text-sm">
              Développeur web - 2 ans d'expérience
            </p>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/Josias-15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-blue-50 p-2 rounded-full text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/josias-ndjiki-42585727b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-blue-50 p-2 rounded-full text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:josiasndjiki1@gmail.com"
              className="bg-gray-100 hover:bg-blue-50 p-2 rounded-full text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Portfolio Personnel. Tous droits réservés.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
            <a href="#home" className="text-gray-600 hover:text-blue-500 text-sm">Accueil</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 text-sm">À Propos</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500 text-sm">Projets</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-500 text-sm">Compétences</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 text-sm">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}