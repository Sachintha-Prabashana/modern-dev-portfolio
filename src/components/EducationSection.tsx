import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "DevOps & Cloud Engineering (Self-Paced)",
    institution: "KodeKloud",
    duration: "2026 - Present",
    description: "Currently mastering Docker, Kubernetes, and Infrastructure as Code (IaC) to enhance full-stack deployment workflows and containerization strategies.",
    achievements: ["DevOps & Cloud Engineering", "Docker", "Kubernetes", "Infrastructure as Code (IaC)"],
  },
  {
    degree: "Software Engineering (Higher National Diploma)",
    institution: "IJSE - Institute of Software Engineering",
    year: "Feb 2024 - Present",
    description:
      "Gaining hands-on experience in full-stack development, specializing in modern architectures including the MERN stack and Java Spring Boot.",
    achievements: ["Full-Stack Development", "System Design", "RESTful APIs"],
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "MR/Thelijjawila Central College",
    year: "Graduated Jan 2022",
    description:
      "Completed secondary education with a focus on core academic foundations before transitioning into specialized software engineering studies.",
    achievements: ["Southern Province", "Academic Foundation"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Background
          </p>
          <h2 className="section-heading">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Education Timeline */}
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative pl-4 sm:pl-8 pb-8 border-l-2 border-border last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] shadow-glow" />

              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-primary font-medium">
                      {item.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-mono text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </span>
                </div>

                <p className="text-muted-foreground">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      <Award className="w-3 h-3" />
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
