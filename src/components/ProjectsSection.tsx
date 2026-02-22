import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projectsData";

const techIcons: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-left"
          >
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              Featured Work
            </p>
            <h2 className="section-heading">
              Selected <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group cursor-pointer"
            >
              View All Projects{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid - 3 Column on Desktop */}
        <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {projects.slice(0, 6).map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="min-w-[300px] md:min-w-full glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
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

              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <div key={tag} className="group/icon relative">
                      <img
                        src={techIcons[tag]}
                        alt={tag}
                        className="w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity"
                      />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-bold bg-secondary text-white rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
