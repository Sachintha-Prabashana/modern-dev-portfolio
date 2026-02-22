import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                About Me
              </p>
              <h2 className="section-heading">
                Engineering scalable{" "}
                <span className="gradient-text">solutions</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                I'm a Full-Stack Developer and Software Engineering student at{" "}
                <strong>IJSE</strong>. My expertise lies in building
                high-performance applications using the{" "}
                <strong>MERN stack</strong>,<strong> Java Spring Boot</strong>,
                and <strong>Python</strong>. I specialize in backend
                architecture and building robust systems that solve real-world
                problems.
              </p>

              <p>
                Currently, I am mastering <strong>Docker</strong>,{" "}
                <strong>Kubernetes</strong>, and <strong>GitHub Actions</strong>
                to streamline deployment and automate development workflows.
              </p>

              <p>
                My portfolio features diverse projects including{" "}
                <strong>AutoCert</strong>, a robust vehicle selling and
                inspection platform powered by <strong>Spring Boot</strong>,{" "}
                <strong>SkillBadge</strong>, a coding challenge system built
                with the <strong>MERN stack</strong>, and{" "}
                <strong>GearUp</strong>, a mobile application for camera
                accessory rentals developed using <strong>React Native</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
