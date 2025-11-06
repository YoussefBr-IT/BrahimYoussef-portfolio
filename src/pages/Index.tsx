import { 
  Bot, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  FileCode, 
  Code2,
  Palette,
  Database,
  GitBranch,
  Server,
  Wind
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroBg from "@/assets/hero-bg.jpg";
import Chat from "@/components/Chat";
import { useChatbot } from "@/contexts/ChatContext";
import heroImage from "@/assets/youssef.png";


const Index = () => {
  const experience = [
    {
      role: "Stagiaire Développeur Web",
      company: "Axia Solutions",
      period: "2024",
      description:
        "Conception d’une application web pour un bar à salade (« Calories ») et développement d’une application de gestion d’employés. Technologies utilisées : React, Node.js."
    },
    {
      role: "Chef d’équipe",
      company: "Restauration / Événementiel",
      period: "2023",
      description:
        "Gestion et encadrement d’une équipe de serveurs lors de mariages et d’événements. Organisation, coordination et service client."
    },
    {
      role: "Employé Polyvalent",
      company: "Astral",
      period: "2023",
      description:
        "Chargé de la communication d’une entreprise de vente de peinture. Gestion du contenu et promotion de l’image de marque."
    }
  ];

  const education = [
    {
      degree: "Cycle Ingénieur (1ʳᵉ année)",
      school: "École Supérieure d'Électronique de l’Ouest (ESEO)",
      period: "2025 - 2026",
      description:
        "Études d’ingénierie orientées vers l’électronique et l’informatique. Réalisation de projets tels qu’une gâche électrique automatique et un radar de recul à technologie ultrason."
    },
    {
      degree: "Classe préparatoire intégrée TIC",
      school: "École Polytechnique de Sousse",
      period: "2023 - 2025",
      description:
        "Formation préparatoire axée sur les technologies de l’information et de la communication, la programmation et la conception de projets informatiques."
    },
    {
      degree: "Baccalauréat en Sciences Techniques",
      school: "Lycée Ibnou Sina",
      period: "2022 - 2023",
      description: "Diplôme du baccalauréat, spécialité sciences techniques."
    },
    {
      degree: "Certifications",
      school: "Cisco et autres plateformes",
      period: "2023 - 2025",
      description:
        "Certification CCNA (Cisco), Développement Web (HTML/CSS/JS/PHP) et maîtrise des bases de données SQL/MySQL."
    }
  ];

  const projects = [
    {
      title: "Jeu vidéo de type plateforme",
      description:
        "Développement d’un jeu en 2D avec Pygame, mettant en œuvre des concepts de physique et d’animation.",
      tech: ["Python", "Pygame"]
    },
    {
      title: "Logiciel de gestion de ventes informatiques",
      description:
        "Application de bureau développée en Java pour gérer les ventes, produits et clients d’un service informatique.",
      tech: ["Java"]
    },
    {
      title: "Site web E-commerce",
      description:
        "Création d’un site de vente en ligne responsive, avec intégration du front-end et du back-end.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      title: "Application de gestion de location de films et séries",
      description:
        "Développement d’un programme complet en C pour gérer la location et le suivi des films et séries.",
      tech: ["C"]
    },
    {
      title: "Réseau virtuel sécurisé",
      description:
        "Conception et configuration d’un réseau virtuel sécurisé à l’aide des outils Cisco.",
      tech: ["Cisco", "Networking"]
    }
  ];


  const { toggleChatbot } = useChatbot()
  return (

    <div className="min-h-screen bg-background text-foreground">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleChatbot}
        title="Toggle chatbot"
        className="fixed top-6 right-6 z-50 rounded-full p-3 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
      >
        <Bot className="size-4" />

      </Button>
      {/* Bento Grid Container */}
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

          {/* Hero Section - Large */}
           <Card className="lg:col-span-8 lg:row-span-2 p-8 lg:p-12 border-border bg-card shadow-elegant animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
              <div className="flex-none">
                <div className="w-40 h-52 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-2xl overflow-hidden border-2 border-primary/20 bg-card shadow-elegant ring-1 ring-primary/10">
                  <img
                    src={heroImage}
                    alt="avatar"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Salut, je suis <span className="text-primary">Youssef</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 Étudiant en première année du cycle ingénieur, passionné par le développement logiciel et l’analyse de données. Rigoureux, curieux et motivé par les nouvelles technologies, je souhaite mettre en pratique mes connaissances académiques à travers un stage technique et contribuer activement à des projets concrets favorisant l’innovation et l’apprentissage.
                </p>
                <div className="flex gap-4" style={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle' }}>
                  <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 ">
                      Resume
                      <FileDown className="ml-2 size-5" />
                    </Button>
                  </a>
                </div>
                
              </div>

            </div>
          </Card>

          {/* Contact Section */}
          <Card className="md:col-span-4 md:row-span-2 bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Contactez-moi</h2>
            <p className="text-muted-foreground mb-8 flex-1">
              Collaborons sur votre prochain projet. Je suis toujours disponible pour discuter de nouvelles opportunités et de défis intéressants.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:it.youssefbrahim@gmail.com"
                className="flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 transition-all group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">it.youssefbrahim@gmail.com</span>
              </a>
              <a
                href="https://github.com/YoussefBr-IT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 transition-all group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">YoussefBr-IT</span>
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-brahim-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">youssef-brahim-it</span>
              </a>
            </div>
          </Card>

          {/* Experience/Education Toggle */}
          <Card className="md:col-span-4 bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="space-y-3">
                <div className="grid gap-4 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {experience.map((exp, index) => (
                    <div key={index} className="p-3 bg-secondary hover:bg-secondary/80 transition-colors">
                      <h3 className="font-semibold text-sm">{exp.role}</h3>
                      <p className="text-xs text-muted-foreground">{exp.company}</p>
                      <p className="text-xs text-primary mt-1">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                  </div>
              </TabsContent>
              <TabsContent value="education" className="space-y-3">
                <div className="grid gap-4 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">

                  {education.map((edu, index) => (
                    <div key={index} className="p-3 bg-secondary hover:bg-secondary/80 transition-colors">
                      <h3 className="font-semibold text-sm">{edu.degree}</h3>
                      <p className="text-xs text-muted-foreground">{edu.school}</p>
                      <p className="text-xs text-primary mt-1">{edu.period}</p>
                      <p className="text-xs text-muted-foreground">{edu.description}</p>

                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Projects Section */}
          <Card className="md:col-span-8 bg-card border-border p-6 hover:border-primary/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 ">Projets</h2>
            <div className="grid gap-4 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 bg-secondary hover:bg-secondary/80 transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="lg:col-span-12 lg:row-span-1 p-8 border-border bg-card shadow-elegant flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Code2 className="w-8 h-8 text-gray-700 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2 text-white">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileCode className="w-8 h-8 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Next.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileCode className="w-8 h-8 text-[#3178C6] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 text-[#06B6D4] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Tailwind</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Server className="w-8 h-8 text-[#339933] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <Wind className="w-8 h-8 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Express</span>
                </div>
                <div className="flex flex-col items-center">
                  <Database className="w-8 h-8 text-[#47A248] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <GitBranch className="w-8 h-8 text-[#F05032] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Git</span>
                </div>
              </div>

            </div>
          </Card>

          <div className="lg:col-span-4 lg:row-span-2">
            <Chat />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
