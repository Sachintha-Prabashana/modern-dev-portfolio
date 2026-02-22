import { motion } from "framer-motion";
import { ExternalLink, User, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const certifications = [
  {
    name: "Spring Boot 2.0 Essential Training",
    issuer: "LinkedIn Learning",
    date: "2026",
    link: "#",
    verifyUrl: "/certificates/LinkedIn Learning Certificate.pdf",
    image: "/certificates/LinkedIn Learning Certificate.png",
  },
  {
    name: "Crash Course: Docker For Absolute Beginners",
    issuer: "KodeKloud",
    date: "2026",
    link: "#",
    verifyUrl: "/certificates/docker-crash-course-for-beginners.pdf",
    image: "/certificates/docker-crash-course-for-beginners.png",
  },
  {
    name: "React Essential Training",
    issuer: "LinkedIn Learning",
    date: "2026",
    link: "#",
    verifyUrl: "/certificates/LinkedIn Learning Certificate -react.pdf",
    image: "/certificates/LinkedIn Learning Certificate -react.png",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Achievements
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            All <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A comprehensive list of professional credentials and technical
            certifications earned throughout my career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 relative"
            >
              <div className="glow-border h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-4 relative z-10">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 min-h-[3.5rem] flex items-center">
                    {cert.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <User className="w-4 h-4 text-primary" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href={cert.verifyUrl || cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-sm font-semibold group/btn"
                    >
                      Verify Certificate
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
