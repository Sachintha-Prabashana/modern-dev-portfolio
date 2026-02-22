import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techIcons } from "@/data/techIcons";

interface TechnologyIconProps {
  tag: string;
  className?: string;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  tag,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconUrl = techIcons[tag];

  if (!iconUrl) return null;

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src={iconUrl}
          alt={tag}
          loading="lazy"
          className="w-6 h-6 object-contain transition-all duration-300"
        />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            className="absolute -top-10 left-1/2 px-2 py-1 bg-secondary text-white text-[10px] font-bold rounded shadow-lg pointer-events-none whitespace-nowrap z-50"
          >
            {tag}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnologyIcon;
