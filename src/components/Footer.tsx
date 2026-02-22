import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            sp.
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Sachintha Prabashana. Crafted with{" "}
            <span className="text-destructive">♥</span> and lots of coffee.
          </p>

          {/* Back to Top */}
          <motion.a
            href="#"
            whileHover={{ y: -4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
