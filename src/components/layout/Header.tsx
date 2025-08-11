import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section
      const sections = ["home", "about", "projects", "skills", "contact"];
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Accueil", href: "home" },
    { name: "À Propos", href: "about" },
    { name: "Projets", href: "projects" },
    { name: "Compétences", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`font-medium transition-colors ${
                activeSection === item.href
                ? "text-blue-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-teal-500"
                : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button size="sm" variant="outline" className="ml-2 flex items-center gap-1 border-blue-500 text-blue-500 hover:bg-blue-50">
            <Download className="h-4 w-4" />
            CV
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-8 mt-8">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Portfolio
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      document.querySelector('[data-radix-collection-item]')?.click(); // Close sheet
                    }}
                    className={`text-lg font-medium transition-colors ${
                      activeSection === item.href ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-2 w-full flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                  <Download className="h-4 w-4" />
                  Télécharger CV
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}