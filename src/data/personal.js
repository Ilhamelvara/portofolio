/**
 * Personal Identity and Configuration
 * Mohammad Ilham Putra Irawan — Junior Web Developer
 * 
 * Edit this file to update your personal details, contact info, and status.
 */

import profilePhoto from '../assets/profile.jpg';

export const personalData = {
  fullName: "Mohammad Ilham Putra Irawan",
  shortName: "Ilham",
  monogram: "MI",
  professionalTitle: "Junior Web Developer",
  statusBadge: "OPEN TO WORK & COLLABORATION",
  isAvailableForHire: true,
  // User Profile Photo
  avatarUrl: profilePhoto,

  hero: {
    greeting: "HELLO, I'M",
    headline: "Building Modern Web Experiences Through Code.",
    description:
      "I'm a passionate Junior Web Developer focused on creating modern, responsive, and functional web applications. I enjoy exploring new technologies, solving technical challenges, and turning ideas into digital solutions.",
    cvDownloadUrl: "#contact", // Ganti dengan URL / file CV PDF Anda (misal: "/resume.pdf")
  },

  about: {
    heading: "A Little About Myself",
    subheading: "Passionate about full-stack web architectures, clean code, and user experience.",
    descriptionParagraphs: [
      "Saya adalah seorang Junior Web Developer yang berfokus pada pengembangan website modern, perancangan REST API yang terstruktur, pengelolaan database yang efisien, dan pembuatan antarmuka pengguna yang ramah dan intuitif.",
      "Fokus saya saat ini adalah memperdalam ekosistem JavaScript modern (React.js, Node.js) serta backend berbasis PHP (Laravel). Saya senang memecahkan masalah komputasi dunia nyata, menerapkan best practices dalam clean code, dan berkolaborasi dalam tim software engineering.",
      "Saya terbuka untuk peluang kerja sebagai Junior Web Developer (Full-time, Kontrak, Freelance, maupun Remote) untuk berkontribusi langsung pada proyek-proyek teknologi nyata serta terus berkembang bersama engineer profesional."
    ],
    infoGrid: [
      {
        label: "Full Name",
        value: "Mohammad Ilham Putra Irawan",
      },
      {
        label: "Professional Role",
        value: "Junior Web Developer",
      },
      {
        label: "Education",
        value: "Student in Computer & Software Engineering",
        note: "[Placeholder - Silakan ubah nama sekolah/institusi]",
      },
      {
        label: "Location",
        value: "Indonesia",
        note: "Available for On-site, Hybrid, & Remote",
      },
      {
        label: "Current Focus",
        value: "React.js, Laravel, REST APIs & Modern Web Stack",
      },
      {
        label: "Career Goal",
        value: "Junior Web Developer & Fullstack Engineer",
      },
    ],
    quickStats: [
      { label: "Completed Projects", value: "6+", highlight: "Web & Mobile" },
      { label: "Technologies Explored", value: "15+", highlight: "Front & Backend" },
      { label: "Dedication & Passion", value: "100%", highlight: "Continuous Growth" },
      { label: "Availability", value: "Open", highlight: "Full-time & Contract" },
    ],
    primaryInterests: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "REST API Development",
      "Database Management",
      "Software Engineering",
    ],
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Ilhamelvara",
      icon: "Github",
      username: "@Ilhamelvara",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
      username: "Mohammad Ilham Putra Irawan",
    },
    {
      name: "Email",
      url: "mailto:ilhamputra.dev@example.com",
      icon: "Mail",
      username: "ilhamputra.dev@example.com",
    },
  ],

  contact: {
    heading: "Let's Build Something Together.",
    description:
      "I'm currently open to job opportunities, full-time roles, and technical collaborations. Feel free to reach out if you have an opportunity or project to discuss.",
    email: "ilhamputra.dev@example.com",
    location: "Indonesia",
    availability: "Available for Full-time, Freelance, & Project Opportunities",
  },
};
