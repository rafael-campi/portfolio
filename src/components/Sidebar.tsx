"use client";

import { motion } from "framer-motion";
import { Home, User, FolderGit2, Mail, Code, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { id: "home", icon: Home, label: "Início" },
    { id: "sobre", icon: User, label: "Sobre" },
    { id: "servicos", icon: Code, label: "Serviços" },
    { id: "projetos", icon: FolderGit2, label: "Projetos" },
    { id: "contato", icon: Mail, label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 h-16 bg-[#111827]/95 backdrop-blur-sm hidden md:flex items-center px-4 z-50 border-b border-gray-800/50"
      >
        {/* Logo */}
        <div className="w-1/3 flex items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl heading-gradient">Portfolio</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {menuItems.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="group relative"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
            >
              <div
                className={`px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-gray-700 ${
                  activeSection === id
                    ? "bg-gray-700 text-white"
                    : "text-gray-400"
                }`}
              >
                {label}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="h-16 bg-[#111827]/95 backdrop-blur-sm flex justify-between items-center px-4 border-b border-gray-800/50"
        >
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl heading-gradient">Portfolio</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-0 right-0 bg-[#111827]/95 backdrop-blur-sm border-b border-gray-800/50"
          >
            {menuItems.map(({ id, icon: Icon, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                <div
                  className={`flex items-center gap-2 px-4 py-3 ${
                    activeSection === id
                      ? "bg-gray-700 text-white"
                      : "text-gray-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
} 