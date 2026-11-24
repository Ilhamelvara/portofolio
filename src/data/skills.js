/**
 * Technical Skills Data
 * Categorized into 6 core domains with configurable mastery levels.
 */

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Bahasa pemrograman dasar yang digunakan untuk membangun logika sistem dan antarmuka.",
    skills: [
      { name: "HTML", level: "Advanced", percentage: 90, icon: "Code", highlight: "Semantic 5, SEO, Accessibility" },
      { name: "CSS", level: "Advanced", percentage: 85, icon: "Palette", highlight: "Responsive, Flexbox, Grid, Animations" },
      { name: "JavaScript", level: "Intermediate", percentage: 80, icon: "FileCode", highlight: "ES6+, Async/Await, DOM manipulation" },
      { name: "PHP", level: "Intermediate", percentage: 75, icon: "Server", highlight: "OOP, MVC pattern, Backend scripting" },
      { name: "Dart", level: "Beginner", percentage: 60, icon: "Smartphone", highlight: "Mobile app logic, Object-Oriented" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Framework, library, dan alat modern untuk membangun UI web yang responsif dan interaktif.",
    skills: [
      { name: "React.js", level: "Intermediate", percentage: 80, icon: "Atom", highlight: "Hooks, Components, State Management" },
      { name: "Vite", level: "Intermediate", percentage: 85, icon: "Zap", highlight: "Next-gen Fast Build & Bundling" },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 80, icon: "Wind", highlight: "Utility-first design & custom themes" },
      { name: "Bootstrap", level: "Advanced", percentage: 85, icon: "LayoutGrid", highlight: "Responsive Grid & UI components" },
      { name: "Axios", level: "Intermediate", percentage: 80, icon: "ArrowLeftRight", highlight: "HTTP client & API data fetching" },
      { name: "React Router", level: "Intermediate", percentage: 75, icon: "Compass", highlight: "Client-side routing & dynamic paths" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Arsitektur server-side, perancangan REST API, sistem otentikasi, dan keamanan data.",
    skills: [
      { name: "Laravel", level: "Intermediate", percentage: 75, icon: "Box", highlight: "MVC Framework, Eloquent ORM, Routing" },
      { name: "REST API", level: "Intermediate", percentage: 80, icon: "Network", highlight: "Clean endpoints, JSON responses, HTTP verbs" },
      { name: "Laravel Sanctum", level: "Intermediate", percentage: 70, icon: "Key", highlight: "Token-based SPA & API authentication" },
      { name: "Authentication", level: "Intermediate", percentage: 75, icon: "Lock", highlight: "Secure login, password hashing, session tokens" },
      { name: "Authorization", level: "Intermediate", percentage: 70, icon: "ShieldCheck", highlight: "Role-based access control (RBAC), Policies" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Penyimpanan data relasional, pemodelan tabel, dan optimasi kueri basis data.",
    skills: [
      { name: "MySQL", level: "Intermediate", percentage: 80, icon: "Database", highlight: "Relational modeling, Joins, Indexing" },
      { name: "MariaDB", level: "Intermediate", percentage: 75, icon: "HardDrive", highlight: "Structured data storage & migrations" },
      { name: "PostgreSQL", level: "Beginner", percentage: 65, icon: "Layers", highlight: "Advanced relational concepts & queries" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Pengembangan aplikasi mobile multi-platform untuk perangkat Android dan iOS.",
    skills: [
      { name: "Flutter", level: "Beginner", percentage: 60, icon: "Smartphone", highlight: "Cross-platform widgets & responsive mobile UI" },
      { name: "Dart", level: "Beginner", percentage: 60, icon: "Cpu", highlight: "Type-safe asynchronous language for Flutter" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools & Workflow",
    description: "Perangkat lunak dan ekosistem pendukung siklus pengembangan perangkat lunak modern.",
    skills: [
      { name: "VS Code", level: "Advanced", percentage: 90, icon: "Terminal", highlight: "Primary IDE, snippets & extensions" },
      { name: "Git", level: "Intermediate", percentage: 80, icon: "GitBranch", highlight: "Version control, branching, committing" },
      { name: "GitHub", level: "Intermediate", percentage: 80, icon: "Github", highlight: "Collaboration, repository management, PRs" },
      { name: "Postman", level: "Intermediate", percentage: 80, icon: "Send", highlight: "API testing, headers, auth validation" },
      { name: "Figma", level: "Intermediate", percentage: 70, icon: "Figma", highlight: "UI wireframing & developer handoff" },
      { name: "Docker", level: "Beginner", percentage: 55, icon: "Container", highlight: "Basic containerization & environments" },
    ],
  },
];
