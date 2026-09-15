import {
    Server,
    Database,
    Globe,
    Network,
    Code2,
    Cloud,
} from "lucide-react";
import img from "../assets/img.png"
import img2 from "../assets/img_1.png"


export const personalInfo = {
    name: "Nuwagaba Victor",
    role: "Full-Stack Developer",
    bio: "Specializing in scalable backend architectures, database optimization, robust networking protocols, and modern frontend interfaces.",
    email: "nuwagabavictor197@gmail.com",
    github: "https://github.com/nuwagabavictor",
    linkedin: "https://linkedin.com/in/victor-nuwagaba-047487248",
};

export const skillGroups = [
    {
        title: "Backend Development",
        icon: Server,
        description: "Building scalable REST APIs, enterprise systems and fintech platforms.",
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
            "Koin DI",
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
            "GitHub Actions",
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
            "Ubuntu Server",
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
        image: img,
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
            "Liquibase",
            "JWT"
        ],

        github: "",
        live: "https://lento.com"
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
        title: "Bivas Mobility Backend",
        subtitle: "Transport & Mobility REST API",
        category: "Backend",
        image: img2,
        description:
            "Node.js backend powering a mobility platform with authentication, categories, uploads and user management.",

        highlights: [
            "JWT authentication and refresh tokens.",
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
        title: "Restart Expense Tracker",
        subtitle: "Personal Finance Mobile App",
        category: "Mobile",
        image: img,
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

        github: "",
        live: ""
    }
];

export const testimonials = [
    {
        name: "Client Name",
        role: "Project Manager",
        company: "Company Name",
        initials: "CN",
        message:
            "Victor demonstrated strong technical ability and a clear understanding of the project requirements. He was able to turn complex requirements into practical software solutions.",
    },
    {
        name: "Client Name",
        role: "Technology Lead",
        company: "Company Name",
        initials: "CN",
        message:
            "Working with Victor was a great experience. He approached technical challenges professionally and consistently focused on building reliable and maintainable solutions.",
    },
    {
        name: "Client Name",
        role: "Business Owner",
        company: "Company Name",
        initials: "CN",
        message:
            "Victor understood our needs and translated them into a working solution. His attention to detail and willingness to solve problems made the project much easier to deliver.",
    },
];