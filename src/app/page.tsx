"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Layout, Server } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const gradientText = "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text";

export default function Home() {
  const services = [
    {
      icon: <Layout className="w-10 h-10 mb-4 text-blue-500" />,
      title: "Design de Interface",
      description: "Criação de interfaces modernas e responsivas com foco na experiência do usuário."
    },
    {
      icon: <Code className="w-10 h-10 mb-4 text-purple-500" />,
      title: "Desenvolvimento Web",
      description: "Desenvolvimento de aplicações web completas utilizando as tecnologias mais recentes."
    },
    {
      icon: <Server className="w-10 h-10 mb-4 text-green-500" />,
      title: "Desenvolvimento Backend",
      description: "Construção de APIs robustas e escaláveis para suportar suas aplicações."
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["PHP","Node.js", "Python", "SQL", "MongoDB", "REST APIs"],
    tools: ["Git", "Docker", "AWS", "VS Code", "Postman", "Github", "Nginx", "Apache"]
  };

  return (
    <>
      <Sidebar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Seção Home */}
          <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="text-center w-full"
            >
              <motion.h1 
                variants={fadeInUp}
                className={`text-6xl font-bold mb-6 ${gradientText}`}
              >
                Olá, eu sou o Desenvolvedor
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8">
                Transformando ideias em experiências digitais
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex justify-center gap-4">
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  Ver Projetos
                </Button>
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  Vamos Conversar
                </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* Seção Sobre Atualizada */}
          <section id="sobre" className="min-h-[calc(100vh-4rem)] flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h2 className={`text-4xl font-bold mb-12 text-center ${gradientText}`}>
                Minha Jornada
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold ${gradientText}`}>Sobre Mim</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Com mais de 5 anos de experiência...
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Minha abordagem...
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold ${gradientText}`}>Educação</h3>
                    <div className="space-y-2">
                      <div className="border-l-2 border-blue-500 pl-4">
                        <p className="font-semibold">Análise e Desenvolvimento de Sistemas</p>
                        <p className="text-gray-400">UNICURITIBA • 2019-2022</p>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className={`text-2xl font-bold text-center ${gradientText}`}>Habilidades Técnicas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">Front-end</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.frontend.map((skill) => (
                          <span key={skill} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">Back-end</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.backend.map((skill) => (
                          <span key={skill} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">Ferramentas</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((skill) => (
                          <span key={skill} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Nova Seção: O que eu faço */}
          <section id="servicos" className="min-h-[calc(100vh-4rem)] flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h2 className={`text-4xl font-bold mb-12 text-center ${gradientText}`}>
                O que eu faço
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      {service.icon}
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          
          {/* Seção Projetos */}
          <section id="projetos" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-4xl font-bold mb-8 text-center ${gradientText}`}>
                Projetos em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Projeto 1"
                  description="Descrição do projeto 1"
                  imageUrl="/portfolio1.png"
                  technologies={["React", "Next.js", "TypeScript"]}
                  projectUrl="#"
                />
              </div>
            </motion.div>
          </section>

          {/* Seção Contato */}
          <section id="contato" className="min-h-[calc(100vh-4rem)] flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center"
            >
              <h2 className={`text-4xl font-bold mb-8 ${gradientText}`}>Vamos Trabalhar Juntos?</h2>
              <div className="max-w-md mx-auto">
                <p className="text-gray-300 mb-8 text-lg">
                  Estou sempre aberto a novos projetos e colaborações. 
                  Vamos transformar sua ideia em realidade?
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="hover:scale-105 transition-transform">
                    rafael.g.campi@gmail.com
                  </Button>
                  <Button variant="outline" className="hover:scale-105 transition-transform">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>

          
        </div>
      </div>

      {/* Scroll to top button - ajustado para mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-4 md:right-8 p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
} 