import {
    Server,
    Database,
    Globe,
    Network,
    Code2,
    Cloud, Mail, MessageCircle, MapPin,
} from "lucide-react";
import lento from "../assets/lento.png"
import finmark from "../assets/finmark.png"
import bivas from "../assets/bivas.png"
import mobility from "../assets/mobility.png"


export const personalInfo = {
    name: "Nuwagaba Victor",
    role: "Full-Stack Developer",
    bio: "Specializing in scalable backend architectures, database optimization, robust networking protocols, microservices and modern frontend interfaces.",
    email: "nuwagabavictor197@gmail.com",
    github: "https://github.com/nuwagabavictor",
    linkedin: "https://linkedin.com/in/victor-nuwagaba-047487248",
};

export const skillGroups = [
    {
        title: "Backend Development",
        icon: Server,
        description: "Building scalable REST APIs, enterprise systems, microservices and fintech platforms.",
        skills: [
            "Java",
            "Spring Boot",
            "Apache Fineract",
            "Node.js",
            "TypeScript",
            "REST APIs",
            "JWT Authentication",
            "Hibernate / JPA",
            "Liquibase",
        ],
    },
    {
        title: "Frontend Development",
        icon: Globe,
        description: "Responsive and modern web and mobile user interfaces.",
        skills: [
            "React",
            "Tailwind CSS",
            "Angular",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Responsive Design",
            "Framer Motion",
        ],
    },
    {
        title: "Mobile Development",
        icon: Code2,
        description: "Cross-platform and Android application development.",
        skills: [
            "Kotlin",
            "Jetpack Compose",
            "Compose Multiplatform",
            "Ktor",
            "MVVM Architecture",
        ],
    },
    {
        title: "Databases",
        icon: Database,
        description: "Designing optimized relational databases and multi-tenant schemas.",
        skills: [
            "MariaDB",
            "PostgreSQL",
            "MySQL",
            "SQL Optimization",
            "Database Design",
            "Multi-Tenant Databases",
        ],
    },
    {
        title: "DevOps & Cloud",
        icon: Cloud,
        description: "Deploying production applications on Linux servers.",
        skills: [
            "Linux",
            "Docker",
            "Nginx",
            "HestiaCP",
            "CI/CD",
            "PM2",
            "SSL / HTTPS",
        ],
    },
    {
        title: "Networking & Infrastructure",
        icon: Network,
        description: "Server networking and deployment infrastructure.",
        skills: [
            "TCP/IP",
            "DNS",
            "Reverse Proxy",
            "SSH",
            "Server Management",
            "Systemd Services",
            "Firewall Configuration",
        ],
    },
];


export const projects = [
    {
        title: "Lento FinMark ERP",
        subtitle: "Enterprise Resource Planning Platform",
        category: "ERP",
        image: finmark,
        description:
            "A multi-tenant ERP platform supporting Finance, Education, Inventory, HR and Commerce modules for schools and businesses.",

        highlights: [
            "Multi-tenant architecture using Spring Boot.",
            "Student invoicing and fee management.",
            "Inventory, sales and accounting modules.",
            "Role-based authentication and permissions.",
            "Liquibase migrations and MariaDB."
        ],

        tech: [
            "Spring Boot",
            "Java 17",
            "React",
            "MariaDB",
            "Docker",
        ],

        github: "",
        live: "https://lentofinmark.com/login"
    },

    {
        title: "Fineract Core Banking",
        subtitle: "Apache Fineract Customization",
        category: "FinTech",
        image: "image",
        description:
            "Enterprise banking platform built on Apache Fineract for SACCOs and financial institutions in Uganda.",

        highlights: [
            "SMS notification engine.",
            "Mobile Money integrations.",
            "USSD Banking.",
            "Savings and Loan products.",
            "Business Events automation."
        ],

        tech: [
            "Apache Fineract",
            "Spring Boot",
            "Java",
            "MariaDB",
            "Docker"
        ],

        github: "",
        live: ""
    },

    {
        title: "Bivas Mobility",
        subtitle: "Transport & Mobility Web App",
        category: "Web App",
        image: mobility,
        description:
            "Node.js backend powering a mobility platform with authentication, categories, uploads and user management.",

        highlights: [
            "JWT authentication and refresh tokens.",
            "Fuel Management and Tracking",
            "User management, roles, and permissions.",
            "Cloudflare R2 storage.",
            "TypeORM + PostgreSQL.",
            "REST API architecture."
        ],

        tech: [
            "Node.js",
            "TypeScript",
            "Express",
            "PostgreSQL",
            "Cloudflare R2"
        ],

        github: "",
        live: "https://mobility.bivastechnologies.com"
    },

    {
        title: "Expense Tracker",
        subtitle: "Personal Finance Mobile App",
        category: "Mobile",
        image: "image",
        description:
            "A Kotlin Compose Multiplatform mobile app for tracking income, expenses and spending analytics.",

        highlights: [
            "Secure authentication.",
            "Category management.",
            "Transaction history.",
            "MVVM architecture with Koin.",
            "Node.js backend integration."
        ],

        tech: [
            "Kotlin",
            "Compose Multiplatform",
            "Ktor",
            "Node.js",
            "PostgreSQL"
        ],

        github: "https://github.com/nuwagabavictor/restart-mobile.git",
        live: ""
    },
    {
        title: "LentoFinMark",
        subtitle: "Software Company Portfolio Website",
        category: "Website",
        image: lento,

        description:
            "A modern corporate website showcasing the LentoFinMark enterprise platform, its Finance, Education, HR, Inventory, and Commerce solutions, with a focus on product presentation, pricing, and customer onboarding.",

        highlights: [
            "Responsive landing pages for desktop and mobile.",
            "Product showcase for ERP and FinTech modules.",
            "Modern UI with reusable React components.",
            "Contact and lead generation sections.",
            "Optimized performance and SEO-ready structure."
        ],

        tech: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Framer Motion",
            "Vite"
        ],

        github: "",
        live: "https://lentofinmark.com",
    },

    {
        title: "Bivas Technologies",
        subtitle: "Software Company Portfolio Website",
        category: "Website",
        image: bivas,

        description:
            "A professional company website for Bivas Technologies presenting software development services, enterprise solutions, mobile applications, cloud infrastructure, and digital transformation offerings.",

        highlights: [
            "Clean and responsive business website design.",
            "Services, projects, and company portfolio pages.",
            "Interactive contact and inquiry sections.",
            "Modern animations and smooth navigation.",
            "Optimized for performance and user experience."
        ],

        tech: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Framer Motion",
            "Vite"
        ],

        github: "",
        live: "https://bivastechnologies.com",
    }
];

export const testimonials = [
    {
        name: "Kamakalha Alfred",
        role: "Founder & CEO",
        company: "LentoFinmark Ltd",
        initials: "KA",
        message:
            "Victor demonstrated strong technical ability and a clear understanding of the project requirements. He was able to turn complex requirements into practical software solutions.",
    },
    {
        name: "Juuko Jackson",
        role: "Founder & CEO",
        company: "Bivastechnologies Ltd",
        initials: "CN",
        message:
            "Working with Victor was a great experience. He approached technical challenges professionally and consistently focused on building reliable and maintainable solutions.",
    },
    // {
    //     name: "Client Name",
    //     role: "Business Owner",
    //     company: "Company Name",
    //     initials: "CN",
    //     message:
    //         "Victor understood our needs and translated them into a working solution. His attention to detail and willingness to solve problems made the project much easier to deliver.",
    // },
];

export const coreTechnologies = [
    "Java",
    "Spring Boot",
    "Apache Fineract",
    "Node.js",
    "TypeScript",
    "React",
    "Angular",
    "Tailwind CSS",
    "Kotlin",
    "Jetpack Compose",
    "MariaDB",
    "PostgreSQL",
    "Docker",
    "Linux",
    "Nginx",
    "Git",
    "GitHub",

]

export const contacts = [
    {
        icon: Mail,
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+256 770 7599 15",
        href: "https://wa.me/256770759915",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Kampala, Uganda",
        href: null,
    },
];