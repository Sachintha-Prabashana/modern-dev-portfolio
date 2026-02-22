export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: "gearup",
    title: "GearUp Mobile App",
    description: "B2C camera accessory rental marketplace developed with React Native and Firebase.",
    fullDescription: "GearUp makes professional camera equipment accessible to everyone. Developed for the mobile marketplace, it allows photographers to rent high-end lenses, bodies, and accessories with real-time availability checking and secure payments.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/GearUp", //
    features: ["Equipment Availability Calendar", "Geo-location based search", "Secure In-app Payments"]
  },
  {
    id: "skillbadge",
    title: "SkillBadge Platform",
    description: "A smart-blogging and coding challenge platform built using the MERN stack.",
    fullDescription: "SkillBadge is a gamified learning platform where developers can write blogs, take coding challenges, and earn badges. It utilizes a MERN stack architecture to bridge the gap between blogging and competitive programming.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/SkillBadge", //
    features: ["In-browser Code Editor", "Rich Text Blogging", "Real-time Leaderboards"]
  },
  {
    id: "autocert",
    title: "AutoCert - Vehicle Inspection",
    description: "Enterprise solution built with Spring Boot to automate vehicle inspection and registration.",
    fullDescription: "A full-stack web application designed to automate vehicle inspection workflows and certification logic. It features RBAC (Role-Based Access Control) and automated report generation for high-throughput automotive environments.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/AutoCert", //
    features: ["Automated Certificate Generation", "RBAC Security", "Inspection Tracking"]
  },
  {
    id: "evera",
    title: "Evera - E-Commerce",
    description: "A modern E-commerce platform for seamless online shopping experiences.",
    fullDescription: "Evera is a sleek, responsive e-commerce application designed to provide a smooth user journey from product discovery to checkout, focusing on performance and modern UI/UX principles.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/Evera",
    features: ["Product Filtering", "Shopping Cart", "Order Management"]
  },
  {
    id: "hotel-web",
    title: "Bootstrap Hotel Web",
    description: "Responsive hotel management and booking website frontend.",
    fullDescription: "A fully responsive hotel website developed using Bootstrap to showcase luxury rooms, services, and online booking options with a focus on mobile-first design.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/Hotel-Web",
    features: ["Responsive Design", "Service Showcases", "Interactive Gallery"]
  },
  {
    id: "zenithmind",
    title: "ZenithMind",
    description: "Mental health therapy management system developed using JavaFX.",
    fullDescription: "A desktop application called ZenithMind designed for managing mental health therapy centers. It streamlines patient records, appointment scheduling, and therapist assignments.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    tags: ["Java", "JavaFX", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/ZenithMind", //
    features: ["Patient Management", "Therapy Scheduling", "Secure Data Storage"]
  },
  {
    id: "inspira",
    title: "Inspira",
    description: "Event planning operations management system built with JavaFX.",
    fullDescription: "A JavaFX-based desktop application for managing event planning operations. It helps organizers track logistics, client requirements, and event schedules efficiently.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    tags: ["Java", "JavaFX", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/Inspira", //
    features: ["Event Logistics Tracking", "Client Portal", "Scheduling Dashboard"]
  }
];
