import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send, Phone, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  
  // 👈 Correction : États séparés pour chaque champ
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // 👈 Correction : Mise à jour de l'état correct
    if (name === "from_name") {
      setName(value);
    } else if (name === "user_email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Envoi en cours...');

    emailjs.sendForm(
        'service_tlxe1j6',
        'template_k1hz8cd',
        formRef.current,
        'VygzX7geAqdphKiKF'
      )
      .then((result) => {
        setStatusMessage('Votre message a été envoyé avec succès ! 😊');
        // 👈 Correction : Réinitialisation des états
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, (error) => {
        setStatusMessage('Une erreur est survenue. Veuillez réessayer. 😢');
        console.error("Erreur EmailJS :", error);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      title: "Email",
      value: "josiasndjiki1@gmail.com",
      link: "mailto:josiasndjiki1@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      title: "Téléphone (Whatsapp)",
      value: "+237 652 817 978",
      link: "tel:+237652817978",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "Localisation",
      value: "Dschang, Cameroun",
      link: "https://maps.google.com/?q=Dschang,Cameroun",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px bg-gradient-to-r from-blue-500 to-teal-500 w-12"></div>
            <span className="text-blue-500 font-medium">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parlons de votre projet</h2>
          <p className="text-gray-600 max-w-2xl">
            Une idée de projet ou une opportunité professionnelle ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="grid md:grid-cols-1 gap-5 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="group hover:scale-105 transition-transform duration-300">
                  <Card className="border-none shadow-md overflow-hidden">
                    <div className={`bg-gradient-to-r ${item.color} p-4 text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-2 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm text-white/80">{item.title}</h3>
                          <a
                            href={item.link}
                            className="text-white font-medium hover:underline flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.value}
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 to-blue-100 p-6">
              <h3 className="font-semibold mb-3">Disponibilité</h3>
              <p className="text-gray-700 mb-3">
                Je suis actuellement à la recherche de nouvelles opportunités et disponible pour des projets
                freelance ou des postes à temps plein.
              </p>
            </Card>
          </div>

          <div>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Send className="mr-2 h-5 w-5 text-blue-500" />
                  Envoyez-moi un message
                </h3>
                
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                      <Input
                        id="name"
                        name="from_name"
                        placeholder="Votre nom"
                        value={name} // 👈 Correction : valeur liée à l'état `name`
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email} // 👈 Correction : valeur liée à l'état `email`
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Le sujet de votre message"
                      value={subject} // 👈 Correction : valeur liée à l'état `subject`
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Détaillez votre demande..."
                      rows={5}
                      value={message} // 👈 Correction : valeur liée à l'état `message`
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 group"
                  >
                    Envoyer le message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  {statusMessage && (
                    <p className="mt-4 text-center text-sm font-medium text-gray-600">
                      {statusMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}