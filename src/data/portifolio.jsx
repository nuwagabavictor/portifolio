export const skills = [
    {
        category: 'Backend',
        icon: 'server',
        color: 'from-primary-500 to-primary-700',
        items: [
            'Node.js', 'Express', 'Java', 'SpringBoot', 'Kotlin',
            'REST APIs', 'GraphQL', 'JWT Auth', 'Redis', 'WebSockets',
        ],
    },
    {
        category: 'Database',
        icon: 'database',
        color: 'from-blue-500 to-indigo-700',
        items: [
            'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQLite',
            'Prisma', 'SQL Optimization', 'Schema Design', 'Indexing',
        ],
    },
    {
        category: 'Frontend',
        icon: 'monitor',
        color: 'from-sky-500 to-blue-700',
        items: [
            'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
            'Vite', 'Responsive Design', 'Accessibility', 'Animations',
        ],
    },
    {
        category: 'Networks',
        icon: 'network',
        color: 'from-blue-600 to-primary-900',
        items: [
            'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Sockets', 'Nginx',
            'Docker', 'Load Balancing', 'Reverse Proxy', 'CDN',
        ],
    },
];

export const projects = [
    {
        title: 'E-Commerce API',
        description:
            'Scalable REST API with authentication, Stripe payments, order management, and Redis caching. Handles 10k+ requests per minute.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
        github: 'https://github.com/yourusername/ecommerce-api',
        demo: '',
        category: 'Backend',
    },
    {
        title: 'Real-Time Chat App',
        description:
            'WebSocket-based chat with rooms, typing indicators, and message persistence. JWT authentication and MongoDB storage.',
        tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
        github: 'https://github.com/yourusername/chat-app',
        demo: 'https://chat-demo.vercel.app',
        category: 'Full-Stack',
    },
    {
        title: 'Analytics Dashboard',
        description:
            'Full-stack dashboard visualizing business metrics with interactive charts, filters, and CSV export. Optimized SQL for fast aggregation.',
        tech: ['React', 'TypeScript', 'Django', 'PostgreSQL'],
        github: 'https://github.com/yourusername/analytics',
        demo: 'https://analytics-demo.vercel.app',
        category: 'Full-Stack',
    },
    {
        title: 'Network Scanner Tool',
        description:
            'CLI tool that scans local networks, discovers devices, and maps open ports using raw sockets and multi-threaded scanning.',
        tech: ['Python', 'Sockets', 'TCP/IP', 'CLI'],
        github: 'https://github.com/yourusername/netscan',
        demo: '',
        category: 'Networks',
    },
    {
        title: 'Task Manager PWA',
        description:
            'Offline-first progressive web app with drag-and-drop boards, service workers, background sync, and installability.',
        tech: ['React', 'IndexedDB', 'PWA', 'Vite'],
        github: 'https://github.com/yourusername/tasks-pwa',
        demo: 'https://tasks-demo.vercel.app',
        category: 'Frontend',
    },
    {
        title: 'Microservices Blog',
        description:
            'Blog platform split into auth, content, and comment microservices communicating via RabbitMQ message queue behind Nginx.',
        tech: ['Node.js', 'RabbitMQ', 'MongoDB', 'Nginx'],
        github: 'https://github.com/yourusername/micro-blog',
        demo: '',
        category: 'Backend',
    },
];