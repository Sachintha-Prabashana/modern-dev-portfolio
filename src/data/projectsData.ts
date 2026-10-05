import fitbuddyImg from "@/assets/images/fitbuddy.png";
import loanriskImg from "@/assets/images/loanrisk.png";
import gearupImg from "@/assets/images/gearup.png";
import skillbadgeImg from "@/assets/images/skillbadge.png";
import autocertImg from "@/assets/images/autocert.png";
import ecosyncImg from "@/assets/images/ecosync.png";
import identysafeImg from "@/assets/images/identysafe.png";
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
  secondaryGithubUrl?: string;
  githubLabel?: string;
  secondaryGithubLabel?: string;
  features?: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: "fitbuddy",
    title: "FitBuddy - Cloud-Native Fitness Microservices Platform",
    description: "A distributed microservices fitness ecosystem built with Spring Cloud, Java 25, GCP Cloud Storage, OpenPDF, and polyglot databases.",
    fullDescription: "FitBuddy is a cloud-native, distributed microservices platform engineered for scalable fitness and workout lifecycle management. Powered by Spring Cloud and Java 25, it incorporates Netflix Eureka for dynamic service discovery, Spring Cloud Config Server for centralized property management, and Spring Cloud Gateway for edge proxy routing. The platform features polyglot persistence across PostgreSQL and MongoDB, in-memory PDF telemetry compilation with OpenPDF, and direct Google Cloud Storage bucket integration.",
    image: fitbuddyImg,
    tags: ["Spring Cloud", "Java 25", "Microservices", "Google Cloud", "PostgreSQL", "MongoDB", "React", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/Fitbuddy-Platform.git",
    secondaryGithubUrl: "https://github.com/Sachintha-Prabashana/Fitbuddy-Services.git",
    githubLabel: "Platform Repo",
    secondaryGithubLabel: "Services Repo",
    features: [
      "Enterprise Spring Cloud Ecosystem with Gateway (8000), Config Server (8888), and Eureka Discovery (9000)",
      "Polyglot Microservices Persistence leveraging PostgreSQL for member profiles and MongoDB for routines",
      "In-memory dynamic PDF Report Generation using OpenPDF streamed to Google Cloud Storage (GCS)",
      "Inter-service load-balanced HTTP communication via Spring RestClient",
      "Full Docker Compose monorepo orchestration for platform and domain services",
      "Modern React + TypeScript web application with Zod validation and interactive workout tracking"
    ]
  },
  {
    id: "loan-risk-ai",
    title: "CreditRisk AI - Loan Risk Prediction & Underwriting Engine",
    description: "A polyglot ML-driven credit underwriting system with real-time risk assessment, FastAPI inference, and Spring Boot fallback resilience.",
    fullDescription: "CreditRisk AI is an end-to-end automated loan underwriting and credit risk assessment platform. It couples a high-throughput Python FastAPI machine learning inference service with a robust Spring Boot orchestration backend and a reactive TypeScript interface. The system computes custom domain features in real-time, estimates default probability, explains key risk factors, and includes an automated rule-based fallback mechanism ensuring zero downtime.",
    image: loanriskImg,
    tags: ["FastAPI", "Python", "Scikit-Learn", "Spring Boot", "Java 21", "React", "MySQL", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sachintha-Prabashana/Loan-Risk-Prediction-System.git",
    features: [
      "High-Performance ML Inference Pipeline with 92.4% accuracy and 18ms latency",
      "Real-time Feature Engineering (DTI ratios, monthly interest cost, dynamic credit tiers)",
      "Resilient Backend Orchestration with Spring Boot 4 and reactive Spring WebFlux WebClient",
      "Intelligent Rule-Based Policy Fallback when ML inference server is offline",
      "Comprehensive Assessment Audit History persisted in MySQL with UUID keys",
      "Interactive Underwriting Dashboard with risk probability meters and feature diagnostics"
    ]
  },
  {
  id: "ecosync",
  title: "EcoSync - Smart Greenhouse Automation",
  description: "A cloud-native, polyglot microservices platform for real-time smart greenhouse automation with IoT integration.",
  fullDescription: "EcoSync-AGMS is a production-grade, event-driven Smart Greenhouse Automation System built with a polyglot microservices architecture. The system continuously monitors environmental conditions through IoT sensors, evaluates them against zone-specific thresholds, and automatically triggers climate control decisions — all without manual intervention.",
  image: ecosyncImg,
  tags: ["Spring Boot", "Spring Cloud", "Node.js", "Python", "Docker", "MongoDB"],
  liveUrl: "#",
  githubUrl: "https://github.com/Sachintha-Prabashana/EcoSync-AGMS.git",
  features: [
    "Real-Time IoT Pipeline with sensor telemetry polled every 10 seconds",
    "Intelligent Python-based Automation Engine with configurable zone thresholds",
    "Polyglot Architecture — Java, Node.js (TypeScript), and Python services",
    "Spring Cloud Infrastructure with Config Server, Eureka Discovery & API Gateway",
    "Containerized deployment with Docker Compose and multi-database strategy (PostgreSQL, MongoDB, MySQL)"
  ]
},
{
  id: "identysafe",
  title: "IdentySafe - Digital Document Vault",
  description: "A secure, full-stack digital document vault with enterprise-grade OAuth2 authentication and controlled document sharing.",
  fullDescription: "IdentySafe is a production-ready, enterprise-grade document management platform that allows users to securely upload, store, and organize sensitive documents in a personal vault. It leverages Asgardeo (WSO2) for OAuth2/OpenID Connect authentication and Cloudinary for secure, scalable cloud storage. Users can generate temporary, revokable share links to grant controlled public access to specific documents.",
  image: identysafeImg,
  tags: ["Spring Boot 3", "React", "TypeScript", "Docker", "OAuth2", "Cloudinary"],
  liveUrl: "#",
  githubUrl: "https://github.com/Sachintha-Prabashana/IdentySafe.git",
  features: [
    "Enterprise-grade OAuth2/OIDC authentication via Asgardeo (WSO2) with JWT validation",
    "Secure cloud document storage and CDN delivery powered by Cloudinary",
    "Controlled document sharing with UUID-based, time-limited, revokable share links",
    "Full-stack monorepo with decoupled React 19 SPA and Spring Boot 3 REST API",
    "Containerized deployment with Docker Compose (MySQL, Spring Boot, Nginx)"
  ]
},
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
