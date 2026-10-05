"use strict";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projectsData";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Home,
  User,
  Code,
  BookOpen,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import TechnologyIcon from "@/components/TechnologyIcon";
import NotFound from "./NotFound";

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

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
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card glow-border font-semibold hover:bg-secondary/50 transition-all"
                  >
                    <Github className="w-4 h-4" /> {project.githubLabel || "View Source"}
                  </a>
                )}
                {project.secondaryGithubUrl && project.secondaryGithubUrl !== "#" && (
                  <a
                    href={project.secondaryGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card glow-border font-semibold hover:bg-secondary/50 transition-all"
                  >
                    <Github className="w-4 h-4" /> {project.secondaryGithubLabel || "Microservices Repo"}
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechnologyIcon key={tag} tag={tag} />
              ))}
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <section className="space-y-4 text-left">
              <h2 className="text-2xl font-bold">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription || project.description}
              </p>
            </section>

            {project.features && (
              <section className="space-y-4 text-left">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground text-left"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectDetails;
