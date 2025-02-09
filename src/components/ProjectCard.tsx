import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Button
          className="w-full"
          onClick={() => window.open(projectUrl, "_blank")}
        >
          Ver Projeto
        </Button>
      </div>
    </motion.div>
  );
} 