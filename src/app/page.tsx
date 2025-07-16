"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ExperienceItem from "../components/ExperienceItem";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiFolder, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  // Contact form state
  const [form, setForm] = useState({ email: "", message: "" });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  // Project filtering state
  const [projectCategory, setProjectCategory] = useState("All");
  const projectList = [
    {
      name: "TaskFlow",
      tech: "Next.js, TypeScript, Tailwind CSS",
      description: "A productivity app for managing daily tasks and team projects.",
      link: "https://github.com/alrifqi",
      category: "Web",
    },
    {
      name: "DevConnect",
      tech: "React, Node.js, MongoDB",
      description: "A social platform for developers to share projects and connect.",
      link: "https://github.com/alrifqi",
      category: "Web",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      description: "My personal portfolio and blog, built with the latest web technologies.",
      link: "https://alrifqi.com",
      category: "Web",
    },
    {
      name: "ShopEase",
      tech: "Vue.js, Firebase",
      description: "A simple e-commerce platform for small businesses.",
      link: "https://github.com/alrifqi",
      category: "Web",
    },
    {
      name: "MobileFit",
      tech: "React Native, Expo",
      description: "A fitness tracking app for iOS and Android.",
      link: "#",
      category: "Mobile",
    },
    {
      name: "DataViz Tool",
      tech: "Python, Dash",
      description: "A dashboard for visualizing business analytics.",
      link: "#",
      category: "Other",
    },
  ];
  const categories = ["All", "Web", "Mobile", "Other"];
  const filteredProjects =
    projectCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === projectCategory);

  // Experience section data and state
  const experienceList = [
    {
      company: "ganknow.com",
      role: "Senior Sofware Engineer",
      companyUrl: "ganknow.com",
      date: "2023 - 2024",
      details: [
        "Develop & optimize stream alert system, so whenever user donate to creator it will show alert. This feature generates the most revenue to the company compared to other features",
        "Build new api & optimize api with low latency to earth more revenue from application",
        "Collaboration with product manager, other engineer & QA for adding new features & release",
      ],
    },
    {
      company: "99.co",
      role: "Senior Sofware Engineer",
      companyUrl: "99.co",
      date: "2022 - 2023",
      details: [
        "Migrate application to new tech stack. with this migration reduce infrastructure cost, robust performance, more maintainable codebase & decrease error rate",
        "Write unit tests for whole code base to ensure quality of code & application. Unit tests cover 70-80% of the code base",
        "Collaboration with internal teams include product manager & QA to add new features & release it to gain more new users & increase the number of subscribes/paid users",
      ],
    },
    {
      company: "Freelance",
      role: "Software Engineer Intern",
      companyUrl: "#",
      date: "Mar – December 2022",
      details: [
        "Build a digital crypto market (autobitco.com), integrating several crypto currencies for sellers & buyers to trade, or buy crypto coins with money. Write unit tests for the whole code base to ensure quality of code & application. Unit tests cover 65-80% of the code base",
        "Build a financial consolidation platform. This platform makes user easier for users to create financial consolidation & reports from companies & several sub-companies.",
      ],
    },
    {
      company: "QuokkaHR",
      role: "Fullstack engineer",
      companyUrl: "quokkahr.com",
      date: "2020 – 2022",
      details: [
        "Setup & maintenance CI/CD for run test to check all current/new features & auto deployment to dev & staging environment",
        "Build & maintenance OKR app used by users",
        "Design codebase structure so it is modular & easier to add more modules/features make a new joiner easy to work with the application on his first day work",
        "Managed design system architecture & implementation for survey application used by about 500k user per day",
        "Collaborate with internal teams & owner for adding more features",
      ],
    },
    {
      company: "Aersure",
      role: "Software Engineer & founding engineer",
      companyUrl: "aersure.com",
      date: "2018 – 2020",
      details: [
        "Build an mvp that suits market & user needs. When MVP was launched we got orders with a minimum order around 100 orders per day",
        "Add integration to send data & pull data from partners. With this feature we can change from manual send data using excel and with this make our ops team can work more efficiently & faster. Also we can display the real time monitor of the user's order",
        "Managed Design system architecture & implementation to optimize the platform. With this optimization, the platform can handle around 14k orders per day",
        "Collaborate with internal teams and product managers for adding more features/functionalities",
      ],
    },
  ];
  const [selectedExp, setSelectedExp] = useState(0);

  // Noteworthy projects data and state
  const [visibleCount, setVisibleCount] = useState(6);
  const allProjects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      tech: ["Algolia", "WordPress", "PHP"],
      link: "#",
    },
    {
      title: "Time to Have More Fun",
      description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      link: "#",
    },
    {
      title: "Building a Headless Mobile App CMS From Scratch",
      description: "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
      tech: ["Node", "Express", "Firebase", "Vue"],
      link: "#",
    },
    {
      title: "OctoProfile",
      description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
      tech: ["Next.js", "Chart.js", "GitHub API"],
      link: "#",
    },
    {
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with Vue and Firebase.",
      tech: ["Vue", "Firebase"],
      link: "#",
    },
    {
      title: "Apple Music Embeddable Web Player Widget",
      description: "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js. Read more about this project on 9to5Mac.",
      tech: ["MusicKit.js", "JS", "SCSS"],
      link: "#",
    },
    // Add more dummy projects as needed
  ];
  const visibleProjects = allProjects.slice(0, visibleCount);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
    setFormSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      setFormError("Please fill in both fields.");
      setFormSuccess(false);
      return;
    }
    setFormError("");
    setFormSuccess(true);
    setForm({ email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 text-black font-sans relative overflow-x-hidden">
      {/* Neubrutalism Accent Shapes */}
      <div className="hidden md:block absolute top-10 left-[-60px] w-40 h-40 bg-yellow-300 border-4 border-black rounded-2xl rotate-12 z-0" />
      <div className="hidden md:block absolute bottom-20 right-[-80px] w-52 h-52 bg-pink-300 border-4 border-black rounded-full -rotate-6 z-0" />
      {/* Sticky Navigation */}
      <Navbar />

      {/* Social Bar (bottom-right, desktop only) */}
      <motion.div
        className="hidden lg:flex flex-col items-center gap-6 fixed bottom-0 right-8 z-40 bg-white/30 backdrop-blur-md border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      >
        <a href="https://github.com/alrifqi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={28} className="text-black hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com/alrifqi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram size={28} className="text-black hover:text-pink-500 transition" />
        </a>
        <a href="https://twitter.com/alrifqi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={28} className="text-black hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/alrifqi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={28} className="text-black hover:text-blue-700 transition" />
        </a>
        <div className="w-px h-16 mt-2 bg-black/20" />
      </motion.div>

      {/* Main Sections */}
      <main className="max-w-6xl mx-auto px-4 flex flex-col gap-32 py-16 relative z-10">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="min-h-[60vh] flex flex-col justify-center items-start gap-4 bg-white/30 backdrop-blur-lg border-4 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-black mb-2">Hi, I’m <span className="bg-yellow-300 border-2 border-black px-2 rounded-md">Reza</span></h1>
          <p className="text-xl text-black/80 max-w-xl font-semibold">A passionate software engineer crafting modern, performant, and beautiful web experiences.</p>
          <div className="flex gap-4 mt-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border-4 border-black rounded-lg text-base font-bold bg-pink-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-yellow-300 transition">Resume</a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="flex flex-col gap-4 bg-white/30 backdrop-blur-lg border-4 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl font-extrabold mb-2 text-black underline decoration-pink-400 decoration-4">About</h2>
          <p className="max-w-2xl text-black/80 font-medium">I’m a software engineer based in Jakarta, Indonesia. I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on developing accessible, human-centered products at TechNova.</p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="flex flex-col gap-4 bg-white/30 backdrop-blur-lg border-4 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold mb-2 flex items-center gap-4 text-black underline decoration-blue-400 decoration-4">
            Experience
            <span className="flex-1 border-t-4 border-black ml-4" />
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-4">
            {/* Vertical Tabs */}
            <div className="relative flex md:flex-col md:w-48 w-full md:items-start items-center md:gap-0 gap-2">
              {/* <div className="absolute left-0 top-0 h-full w-1 bg-black hidden md:block" /> */}
              <ul className="flex md:flex-col flex-row w-full md:w-auto md:gap-0 gap-2 z-10">
                {experienceList.map((exp, idx) => (
                  <li key={exp.company} className="w-full">
                    <button
                      onClick={() => setSelectedExp(idx)}
                      className={`font-mono text-base px-4 py-2 border-2 border-black rounded-lg md:w-full text-left font-bold transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)]
                        ${selectedExp === idx ? "bg-blue-300 text-black" : "bg-white text-black hover:bg-yellow-200"}`}
                      style={{ borderLeftWidth: selectedExp === idx ? 4 : 2 }}
                    >
                      {exp.company}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Details Panel */}
            <div className="flex-1">
              <div className="font-extrabold text-2xl">
                {experienceList[selectedExp].role} <span className="text-blue-600 font-mono">@ {experienceList[selectedExp].company}</span>
              </div>
              <div className="text-black/60 text-base mb-4 mt-1 font-mono">
                {experienceList[selectedExp].date}
              </div>
              <ul className="list-none space-y-2">
                {experienceList[selectedExp].details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl leading-6 mt-0.5">▸</span>
                    <span className="text-black/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        {/* <motion.section
          id="projects"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-center mt-8">Other Noteworthy Projects</h2>
          <div className="text-center mb-8">
            <Link href="#" className="text-primary font-mono text-base hover:underline">view the archive</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, idx) => (
              <div key={idx} className="relative flex flex-col bg-background rounded-lg border border-foreground/10 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition group">
                <div className="flex items-center justify-between mb-4">
                  <FiFolder size={28} className="text-primary" />
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <FiExternalLink size={20} className="text-foreground/40 group-hover:text-primary transition" />
                  </a>
                </div>
                <div className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition">
                  {project.title}
                </div>
                <div className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto text-xs font-mono text-foreground/50">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {allProjects.length > visibleCount && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="px-6 py-2 border border-primary text-primary rounded font-mono hover:bg-primary/10 transition"
              >
                Show More
              </button>
            </div>
          )}
        </motion.section> */}

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="flex flex-col gap-4 bg-white/30 backdrop-blur-lg border-4 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl font-extrabold mb-2 text-black underline decoration-yellow-400 decoration-4">Contact</h2>
          <p className="max-w-2xl text-black/80 font-medium">Want to work together or have a question? Email me at <a href="mailto:reza.rifqi@gmail.com" className="underline hover:text-blue-600 font-bold">reza.rifqi@gmail.com</a> or use the contact form below.</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 max-w-md mt-2">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleFormChange}
              className="border-4 border-black rounded-lg px-3 py-2 bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleFormChange}
              className="border-4 border-black rounded-lg px-3 py-2 bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              rows={4}
              required
            />
            {formError && <div className="text-red-600 text-sm font-bold">{formError}</div>}
            {formSuccess && <div className="text-green-600 text-sm font-bold">Message sent! (Dummy form)</div>}
            <button
              type="submit"
              className="bg-yellow-300 border-4 border-black text-black px-6 py-2 rounded-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-pink-300 transition"
            >
              Send Message
            </button>
          </form>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-base text-black border-t-4 border-black bg-white/30 backdrop-blur-lg shadow-[0_-4px_0_0_rgba(0,0,0,1)] font-bold">
        © {new Date().getFullYear()} Reza. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
