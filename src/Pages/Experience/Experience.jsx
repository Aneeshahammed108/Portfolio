"use client";

import React, { useEffect, useRef } from "react";
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

const Experience = () => {
  const headerRef = useReveal();
  const exp1Ref = useReveal();
  const exp2Ref = useReveal();

  return (
    <div
      className={`${inter.variable} ${montserrat.variable} font-sans min-h-screen bg-[#050505] text-white`}
    >
      <Navbar />

      {/* ================= HEADER ================= */}
      <section
        ref={headerRef}
        className="pt-36 px-8 md:px-16 max-w-[1100px] mx-auto reveal"
      >
        <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6">
          My <span className="text-emerald-400">Experience</span>
        </h1>

        <p className="font-inter text-gray-300 max-w-2xl text-lg leading-relaxed">
          Hands-on frontend development experience through internships and
          real-world projects, focused on building scalable, responsive, and
          performance-optimized web applications.
        </p>
      </section>

      {/* ================= EXPERIENCE 1 ================= */}
      <section
        ref={exp1Ref}
        className="mt-20 px-8 md:px-16 max-w-[1100px] mx-auto reveal"
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-emerald-400/50 transition">
          <h2 className="font-montserrat text-2xl font-semibold mb-1">
            Frontend Development Intern
          </h2>

          <p className="text-sm text-emerald-400 mb-2">
            Karva Technologies · Oct 2025 – Dec 2025 · Coimbatore, India
          </p>

          <p className="font-inter text-gray-300 leading-relaxed mb-6">
            Worked on real-world frontend applications, including an HRMS
            platform, focusing on scalable UI architecture, REST API integration,
            and performance optimization.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside">
            <li>
              Developed and maintained an HRMS web application using Next.js,
              React.js, and Tailwind CSS
            </li>
            <li>
              Built dashboard-driven UI components for employee management,
              attendance, payroll, leave, and performance modules
            </li>
            <li>
              Implemented reusable, component-based architecture for scalable
              frontend development
            </li>
            <li>
              Integrated REST APIs for dynamic data handling and real-time UI
              updates
            </li>
            <li>
              Optimized frontend performance through improved state management
              and efficient component rendering
            </li>
            <li>
              Ensured responsive design and cross-browser compatibility across
              devices
            </li>
          </ul>
        </div>
      </section>

      {/* ================= EXPERIENCE 2 ================= */}
      <section
        ref={exp2Ref}
        className="mt-20 px-8 md:px-16 max-w-[1100px] mx-auto reveal"
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-emerald-400/50 transition">
          <h2 className="font-montserrat text-2xl font-semibold mb-1">
            Frontend Development Intern
          </h2>

          <p className="text-sm text-emerald-400 mb-2">
            Login360 · May 2025 – Aug 2025 · Coimbatore, India
          </p>

          <p className="font-inter text-gray-300 leading-relaxed mb-6">
            Gained hands-on experience in frontend fundamentals by developing
            CRUD-based applications and integrating REST APIs.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside">
            <li>
              Developed CRUD-based web applications using React.js with a focus
              on component-based architecture
            </li>
            <li>
              Implemented JavaScript (ES6) logic and HTML/CSS to build and style
              user interfaces
            </li>
            <li>
              Integrated REST APIs for create, read, update, and delete
              operations
            </li>
            <li>
              Ensured cross-browser compatibility and responsive behavior
            </li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mt-32 pb-20 text-center px-8">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
          Open to <span className="text-emerald-400">Frontend Opportunities</span>
        </h2>

        <p className="font-inter text-gray-300 max-w-xl mx-auto mb-8">
          I am actively seeking frontend developer (fresher) roles where I can
          contribute to real-world projects, learn from experienced teams, and
          continue growing as a frontend engineer.
        </p>

        <a
          href="/Contact"
          className="inline-block font-montserrat font-bold tracking-wide
                     px-8 py-3 rounded-sm bg-emerald-600 text-white
                     hover:bg-emerald-500 transition"
        >
          Contact Me →
        </a>
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

export default Experience;
