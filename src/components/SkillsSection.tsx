import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
      },
    ],
  },
];

const tabs = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Databases",
  "DevOps & Tools",
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const getFilteredCategories = () => {
    switch (activeTab) {
      case "All":
        return skillCategories;
      case "Full Stack":
        return skillCategories.filter(
          (c) =>
            c.title === "Frontend" ||
            c.title === "Backend" ||
            c.title === "Databases",
        );
      case "Frontend":
        return skillCategories.filter((c) => c.title === "Frontend");
      case "Backend":
        return skillCategories.filter((c) => c.title === "Backend");
      case "Databases":
        return skillCategories.filter((c) => c.title === "Databases");
      case "DevOps & Tools":
        return skillCategories.filter((c) => c.title === "DevOps & Tools");
      default:
        return skillCategories;
    }
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-glow-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Technical Expertise
          </p>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto">
            The tools and technologies I use to bring ideas to life.
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

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories
              .flatMap((c) => c.skills)
              .map((skill, index) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group flex flex-col items-center gap-4 p-6 glass-card rounded-2xl glow-border cursor-pointer"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
