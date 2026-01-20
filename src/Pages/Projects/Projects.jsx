"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "../../Components/Navbar/Navbar";

/* ================= Fonts ================= */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

/* ================= Scroll Reveal Hook ================= */
const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("reveal-active"),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

/* ================= PROJECT DATA ================= */
const PROJECTS = [
  {
    title: "Muscle-Hub – Fitness E-Commerce Platform",
    description:
      "A modern e-commerce frontend for purchasing gym accessories, fitness equipment, workout outfits, and supplements with a focus on clean UI and responsive design.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    image:
      "/images/gym.avif",
    live: "https://muscle-hub-six.vercel.app",
    github: "https://github.com/Aneeshahammed108/Muscle-hub",
  },
  {
    title: "Frontend Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image:
      "/images/portfolio.avif",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce UI",
    description:
      "A responsive e-commerce UI featuring product listings and reusable components.",
    tech: ["React", "CSS", "JavaScript"],
    image:
      "/images/E-commerce.avif",
    live: "#",
    github: "#",
  },
  {
    title: "Dashboard Interface",
    description:
      "A clean admin dashboard interface focusing on layout structure and performance.",
    tech: ["React", "Tailwind CSS"],
    image:
      "/images/dashboard.avif",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const introRef = useReveal();
  const projectsRef = useReveal();

  return (
    <div
      className={`${inter.variable} ${montserrat.variable} font-sans min-h-screen bg-[#050505] text-white`}
    >
      <Navbar />

      {/* ================= HEADER ================= */}
      <section
        ref={introRef}
        className="pt-36 px-8 md:px-16 max-w-[1200px] mx-auto reveal"
      >
        <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6">
          My <span className="text-emerald-400">Projects</span>
        </h1>

        <p className="font-inter text-gray-300 max-w-2xl text-lg leading-relaxed">
          A selection of projects that showcase my frontend development skills,
          UI expertise, and real-world problem solving.
        </p>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section
        ref={projectsRef}
        className="px-8 md:px-16 max-w-[1200px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 reveal"
      >
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl overflow-hidden bg-white/5 border border-white/10
                       hover:border-emerald-400/60 transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h3 className="font-montserrat text-xl font-semibold mb-3 group-hover:text-emerald-400 transition">
                {project.title}
              </h3>

              <p className="font-inter text-gray-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="text-sm font-semibold text-white border border-white/30
                             px-5 py-2 rounded-sm hover:border-emerald-400
                             hover:text-emerald-400 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-sm font-semibold text-white border border-white/30
                             px-5 py-2 rounded-sm hover:border-emerald-400
                             hover:text-emerald-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style jsx global>{`
        .font-montserrat {
          font-family: var(--font-montserrat), sans-serif;
        }
        .font-inter {
          font-family: var(--font-inter), sans-serif;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Projects;
