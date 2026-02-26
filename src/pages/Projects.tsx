"use strict";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projectsData";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Home,
  User,
  Code,
  BookOpen,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import TechnologyIcon from "@/components/TechnologyIcon";

const tabs = ["All", "Full Stack", "Mobile", "Desktop"];

const Projects = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;

    // Check if any of the project's tags match the category
    // We do simple loose matching based on common tech stacks
    const lowerTags = project.tags.map((t) => t.toLowerCase());

    if (activeTab === "Full Stack") {
      // AutoCert has Spring Boot + HTML/JS/CSS frontend
      if (project.id === "autocert") return true;

      // Ensure explicitly frontend-only projects never show in Full Stack
      if (project.id === "evera" || project.id === "hotel-web") return false;

      // For Full Stack, check if it has both frontend and backend elements,
      // or if it explicitly implies it (like MERN)
      const hasFrontend = lowerTags.some((t) =>
        ["react", "html", "css", "next", "vue"].some((f) => t.includes(f)),
      );
      const hasBackend = lowerTags.some((t) =>
        [
          "node",
          "java",
          "python",
          "mysql",
          "mongodb",
          "spring",
          "firebase",
        ].some((b) => t.includes(b)),
      );
      const isMERN = lowerTags.some((t) => t.includes("mern"));

      return isMERN || (hasFrontend && hasBackend);
    }

    if (activeTab === "Mobile") {
      // gearup is explicitly mobile
      if (project.id === "gearup") return true;

      return lowerTags.some((t) =>
        ["react native", "flutter", "android", "ios", "mobile"].some((m) =>
          t.includes(m),
        ),
      );
    }

    if (activeTab === "Desktop") {
      return lowerTags.some((t) =>
        ["javafx", "desktop"].some((d) => t.includes(d)),
      );
    }

    return false;
  });

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Code className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/#skills",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "/#education",
      icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: (
        <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-20 md:pt-32">
      <div className="md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>

      <div className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-12 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-4 group"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive look at my technical journey, from enterprise Java
            solutions to creative front-end experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-grow text-left">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <TechnologyIcon key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default Projects;
