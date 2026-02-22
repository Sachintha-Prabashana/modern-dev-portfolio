import gearupImg from "@/assets/images/gearup.png";
import skillbadgeImg from "@/assets/images/skillbadge.png";
import autocertImg from "@/assets/images/autocert.png";
import everaImg from "@/assets/images/evera.png";
import zenithmindImg from "@/assets/images/zenithmind.png";
import inspiraImg from "@/assets/images/inspira.png";

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
  description: "A scalable B2C rental marketplace for professional photography and videography equipment.", //
  fullDescription: "Developed a scalable B2C mobile application that streamlines the rental lifecycle for professional photography and videography equipment. The platform serves as a digital storefront where creators can discover, book, and securely pay for high-end gear from a centralized inventory.", //
  image: gearupImg,
  tags: ["React Native", "Firebase", "Stripe", "Cloudinary", "Google Maps"], //
  liveUrl: "https://drive.google.com/file/d/1Q2oB3SpcJqj4eSfaKdGmGIhBEaLdBdW3/view?usp=drive_link",
  githubUrl: "https://github.com/Sachintha-Prabashana/gearup-mobile.git", //
  features: [
    "Identity Verification System using Cloudinary for secure storage", //
    "Secure Payment Integration powered by Stripe SDK", //
    "Interactive Store Locator with Google Maps & Expo Location", //
    "Automated Rental Management with QR code confirmations", //
    "Robust Authentication using Firebase with custom data validators" //
  ]
},
  {
  id: "skillbadge",
  title: "SkillBadge Platform",
  description: "An AI-powered technical skill validation and gamified learning platform.", //
  fullDescription: "Developed a scalable, full-stack platform designed to automate technical skill validation and enhance developer learning through AI-driven assessments and competitive gamification.", //
  image: skillbadgeImg,
  tags: ["MERN Stack", "Gemini AI", "Socket.io", "TypeScript", "Monaco Editor"], //
  liveUrl: "https://skillbadge-frontend.vercel.app/", //
  githubUrl: "https://github.com/Sachintha-Prabashana/skillbadge-frontend.git", //
  features: [
    "Advanced Coding Engine with Monaco Editor & Piston API integration", //
    "AI Mock Interviews powered by Gemini-Flash with voice feedback", //
    "AI Content Generation via OpenRouter (Llama 3.3) with Admin Approval", //
    "Real-time community discussions using Socket.io", //
    "Robust RBAC with Multi-provider OAuth (Google/GitHub) & JWT" //
  ]
},
 {
  id: "autocert",
  title: "AutoCert - Vehicle Inspection Marketplace",
  description: "Enterprise-level marketplace bridging the trust gap in the used car industry through automated certification.", //
  fullDescription: "Developed a secure and scalable enterprise-level marketplace designed to bridge the trust gap in the used car industry. The system integrates vehicle listings with a professional inspection ecosystem, ensuring transparency through automated certification and smart resource allocation.", //
  image: autocertImg,
  tags: ["Java 21", "Spring Boot 3.5", "Spring Security", "MySQL", "WebSockets"], //
  liveUrl: "#",
  githubUrl: "https://github.com/Sachintha-Prabashana/Autocert-platform.git", //
  features: [
    "Intelligent Auto-Assignment Algorithm for inspector workload management", //
    "Real-time live chat and image sharing via WebSockets (STOMP)", //
    "Automated PDF report generation and secure storage on Cloudinary", //
    "Sophisticated RBAC security with Spring Security and JWT", //
    "Automated professional communication system using Spring Mail" //
  ]
},
  {
  id: "evera",
  title: "Evera - Electric Mobility Guide",
  description: "A centralized educational platform guiding users through the transition to sustainable electric mobility.", //
  fullDescription: "Evera is a comprehensive digital hub designed to simplify complex automotive technologies and provide actionable insights for both potential buyers and current EV owners, focusing on sustainable transportation.", //
  image: everaImg,
  tags: ["HTML5", "CSS3", "JavaScript", "Firebase", "Sustainable Tech"], //
  liveUrl: "#", 
  githubUrl: "https://github.com/Sachintha-Prabashana/My-Review-Site.git", //
  features: [
    "Comprehensive modules on BEV, PHEV, HEV, and FCEV technologies", //
    "Integrated 'EV Buying' and 'Care & Maintenance' consumer guides", //
    "Engineered with semantic HTML5 and modular CSS3 for high performance", //
    "Mobile-first responsive UI strategy for seamless multi-device experience", //
    "Automated deployment and hosting managed via Firebase and GitHub" //
  ]
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
  title: "ZenithMind - Clinic Management",
  description: "A high-performance desktop application to digitize and automate operations for mental health clinics.", //
  fullDescription: "Developed a high-performance desktop application focusing on solving administrative bottlenecks by centralizing patient data, therapy scheduling, and financial tracking into a secure, unified platform built with JavaFX and Hibernate.", //
  image: zenithmindImg,
  tags: ["Java 21", "JavaFX", "Hibernate", "MySQL", "JasperReports"], //
  liveUrl: "#",
  githubUrl: "https://github.com/Sachintha-Prabashana/Mental-Health-Therapy-System.git", //
  features: [
    "Enterprise-grade Layered Architecture (Controller-Service-DAO)", //
    "RBAC security with BCrypt password hashing for sensitive data", //
    "Advanced Data Modeling with Hibernate managing complex relationships", //
    "Automated JasperReports for dynamic PDF invoices and clinical history", //
    "Modern Material Design UI built with JavaFX and JFoenix components" //
  ]
},
  {
  id: "inspira",
  title: "Inspira - Event Planning System",
  description: "A comprehensive desktop solution to automate and manage end-to-end event planning operations.",
  fullDescription: "Inspira centralizes administrative tasks for event organizers, managing everything from customer bookings to supplier coordination and employee management within a seamless, unified workflow.",
  image: inspiraImg,
  tags: ["Java 21", "JavaFX", "MySQL", "JasperReports", "Javax Mail"],
  liveUrl: "#",
  githubUrl: "https://github.com/Sachintha-Prabashana/Inspira-Event-Planning-System-Desktop-App-Layered-Architecture-.git",
  features: [
    "Advanced Authentication with OTP-based password recovery via Javax Mail",
    "Clean DAO/BO/DTO layered architecture for modularity and scalability",
    "Full Event Lifecycle Management (Customers, Bookings, Suppliers, Services)",
    "Dynamic JasperReports for event coordination and business analysis",
    "Optimized MySQL schema with cascading operations for data consistency"
  ]
},
];
