"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ExperienceItem from "../components/ExperienceItem";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiCodepen } from "react-icons/si";
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
      link: "https://github.com/alexjohnson/taskflow",
      category: "Web",
    },
    {
      name: "DevConnect",
      tech: "React, Node.js, MongoDB",
      description: "A social platform for developers to share projects and connect.",
      link: "https://github.com/alexjohnson/devconnect",
      category: "Web",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      description: "My personal portfolio and blog, built with the latest web technologies.",
      link: "https://alexjohnson.dev",
      category: "Web",
    },
    {
      name: "ShopEase",
      tech: "Vue.js, Firebase",
      description: "A simple e-commerce platform for small businesses.",
      link: "https://github.com/alexjohnson/shopease",
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
      company: "Upstatement",
      role: "Creative Technologist Co-op",
      companyUrl: "#",
      date: "July – December 2015",
      details: [
        "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
        "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
      ],
    },
    {
      company: "Apple",
      role: "Software Engineer Intern",
      companyUrl: "#",
      date: "Jan – June 2015",
      details: [
        "Worked on internal tools for the iCloud team",
        "Collaborated with cross-functional teams to deliver new features",
      ],
    },
    {
      company: "Scout Studio",
      role: "Web Developer",
      companyUrl: "#",
      date: "2014 – 2015",
      details: [
        "Built and maintained websites for student organizations",
        "Led a team of 3 developers for a campus project",
      ],
    },
    {
      company: "Starry",
      role: "QA Engineer",
      companyUrl: "#",
      date: "2013 – 2014",
      details: [
        "Tested web and mobile applications for bugs and usability",
        "Wrote automated test scripts in Selenium",
      ],
    },
    {
      company: "MullenLowe",
      role: "Creative Technologist Co-op",
      companyUrl: "#",
      date: "July – December 2015",
      details: [
        "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
        "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
      ],
    },
  ];
  const [selectedExp, setSelectedExp] = useState(experienceList.length - 1);

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
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Social Bar (bottom-right, desktop only) */}
      <motion.div
        className="hidden lg:flex flex-col items-center gap-6 fixed bottom-0 right-8 z-40"
        // animate={{ y: [0, -20, 0] }}
        // transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} className="text-foreground/60 hover:text-blue-400 transition" />
        </a>
        <a href="https://instagram.com/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram size={24} className="text-foreground/60 hover:text-pink-400 transition" />
        </a>
        <a href="https://twitter.com/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} className="text-foreground/60 hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} className="text-foreground/60 hover:text-blue-600 transition" />
        </a>
        <a href="https://codepen.io/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="CodePen">
          <SiCodepen size={24} className="text-foreground/60 hover:text-gray-400 transition" />
        </a>
        <div className="w-px h-16 mt-2" />
      </motion.div>

      {/* Main Sections */}
      <main className="max-w-6xl mx-auto px-4 flex flex-col gap-32 py-16">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="min-h-[60vh] flex flex-col justify-center items-start gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">Hi, I’m Alex Johnson</h1>
          <p className="text-lg text-foreground/80 max-w-xl">A passionate web developer crafting modern, performant, and beautiful web experiences.</p>
          <div className="flex gap-4 mt-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded text-sm font-medium hover:bg-foreground hover:text-background transition">Resume</a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="max-w-2xl text-foreground/80">I’m a software engineer based in Jakarta, Indonesia. I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on developing accessible, human-centered products at TechNova.</p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-4">
            Experience
            <span className="flex-1 border-t border-foreground/10 ml-4" />
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-4">
            {/* Vertical Tabs */}
            <div className="relative flex md:flex-col md:w-48 w-full md:items-start items-center md:gap-0 gap-2">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/60 hidden md:block" />
              <ul className="flex md:flex-col flex-row w-full md:w-auto md:gap-0 gap-2 z-10">
                {experienceList.map((exp, idx) => (
                  <li key={exp.company} className="w-full">
                    <button
                      onClick={() => setSelectedExp(idx)}
                      className={`font-mono text-sm px-4 py-2 md:border-l-2 border-primary/0 md:w-full text-left transition-colors
                        ${selectedExp === idx ? "text-primary border-primary bg-primary/10" : "text-foreground/60 hover:text-primary"}`}
                      style={{ borderLeftWidth: selectedExp === idx ? 2 : 2 }}
                    >
                      {exp.company}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Details Panel */}
            <div className="flex-1">
              <div className="font-semibold text-lg">
                {experienceList[selectedExp].role} <span className="text-primary font-mono">@ {experienceList[selectedExp].company}</span>
              </div>
              <div className="text-foreground/60 text-sm mb-4 mt-1 font-mono">
                {experienceList[selectedExp].date}
              </div>
              <ul className="list-none space-y-2">
                {experienceList[selectedExp].details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary text-lg leading-6 mt-0.5">▸</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
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
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="max-w-2xl text-foreground/80">Want to work together or have a question? Email me at <a href="mailto:alex.johnson@email.com" className="underline hover:text-blue-600">alex.johnson@email.com</a> or use the contact form below.</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 max-w-md mt-2">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleFormChange}
              className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
            {formError && <div className="text-red-600 text-sm">{formError}</div>}
            {formSuccess && <div className="text-green-600 text-sm">Message sent! (Dummy form)</div>}
            <button
              type="submit"
              className="bg-primary text-[#0a192f] px-4 py-2 rounded font-medium hover:bg-primary/80 transition"
            >
              Send Message
            </button>
          </form>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-foreground/60 border-t border-foreground/10">
        © {new Date().getFullYear()} Alex Johnson. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
