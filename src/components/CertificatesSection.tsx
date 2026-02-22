import { motion } from "framer-motion";
import { ExternalLink, User, Calendar } from "lucide-react";

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

const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-20"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Achievements
          </p>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading mx-auto">
            Verified skills and professional credentials earned through
            industry-leading platforms.
          </p>
        </motion.div>

        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`min-w-[300px] md:min-w-full group flex flex-col glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 relative ${
                index >= 2 ? "md:hidden lg:flex" : "flex"
              }`}
            >
              <div className="glow-border h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                  {/* Subtle Light Overlay */}
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content Container */}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 group"
          >
            View All Certificates
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
