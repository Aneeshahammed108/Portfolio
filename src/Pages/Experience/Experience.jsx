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
  const expRef = useReveal();
  const learnRef = useReveal();

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
          My journey as a frontend developer, focused on building real-world
          projects, strengthening core fundamentals, and improving UI quality
          through consistent practice.
        </p>
      </section>

      {/* ================= EXPERIENCE BLOCK ================= */}
      <section
        ref={expRef}
        className="mt-20 px-8 md:px-16 max-w-[1100px] mx-auto reveal"
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-emerald-400/50 transition">
          <h2 className="font-montserrat text-2xl font-semibold mb-2">
            Frontend Developer (Self-Driven Projects)
          </h2>

          <p className="text-sm text-emerald-400 mb-4">
            2024 – Present
          </p>

          <p className="font-inter text-gray-300 leading-relaxed mb-6">
            Actively developing frontend applications using modern web
            technologies. Focused on writing clean, maintainable code and
            building responsive user interfaces that reflect real-world
            application behavior.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside">
            <li>Built responsive web applications using React and Next.js</li>
            <li>Designed reusable UI components with Tailwind CSS</li>
            <li>Developed e-commerce and dashboard-style interfaces</li>
            <li>Improved performance, accessibility, and UI consistency</li>
            <li>Followed component-based architecture and clean code practices</li>
          </ul>
        </div>
      </section>

      {/* ================= LEARNING & PRACTICE ================= */}
      <section
        ref={learnRef}
        className="mt-24 px-8 md:px-16 max-w-[1100px] mx-auto reveal"
      >
        <h2 className="font-montserrat text-3xl font-semibold mb-10">
          Learning & Practice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Fundamentals",
              desc: "Strong understanding of HTML, CSS, JavaScript (ES6), and responsive design principles.",
            },
            {
              title: "Modern Frameworks",
              desc: "Hands-on experience with React.js and Next.js for building scalable frontend applications.",
            },
            {
              title: "UI & Performance",
              desc: "Focused on clean UI, smooth animations, accessibility, and performance optimization.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-lg p-6
                         hover:border-emerald-400/60 transition hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              <h3 className="font-montserrat text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="font-inter text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mt-32 pb-20 text-center px-8">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Something <span className="text-emerald-400">Great</span>?
        </h2>

        <p className="font-inter text-gray-300 max-w-xl mx-auto mb-8">
          I’m open to frontend opportunities where I can contribute, learn, and
          grow while building meaningful digital experiences.
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
