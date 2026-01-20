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

/* ================= Scroll Reveal ================= */
const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("reveal-active"),
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const About = () => {
  const introRef = useReveal();
  const cardsRef = useReveal();

  return (
    <div
      className={`${inter.variable} ${montserrat.variable} font-sans min-h-screen bg-[#050505] text-white`}
    >
      <Navbar />

      {/* ================= HEADER ================= */}
      <section
        ref={introRef}
        className="pt-36 px-8 md:px-16 max-w-[1100px] mx-auto reveal"
      >
        <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6">
          About <span className="text-emerald-400">Me</span>
        </h1>

        {/* Short & strong description */}
        <p className="font-inter text-gray-300 max-w-2xl text-lg leading-relaxed">
          I’m a frontend developer focused on building clean, scalable, and
          high-performance web interfaces using modern frontend technologies.
        </p>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section
        ref={cardsRef}
        className="px-8 md:px-16 max-w-[1100px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal"
      >
        {[
          {
            title: "Frontend Focus",
            text: "Building responsive, user-friendly interfaces with React and Next.js.",
          },
          {
            title: "Clean Code",
            text: "Component-based architecture with maintainable and readable code.",
          },
          {
            title: "Performance & UX",
            text: "Optimized performance, accessibility, and cross-browser support.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group p-6 rounded-xl bg-white/5 border border-white/10
                       hover:border-emerald-400/60 transition-all duration-300
                       hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            <h3 className="font-montserrat text-lg font-semibold mb-2 group-hover:text-emerald-400 transition">
              {item.title}
            </h3>
            <p className="font-inter text-sm text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* ================= SHORT ABOUT TEXT ================= */}
      <section className="px-8 md:px-16 max-w-[1100px] mx-auto mt-20">
        <div className="border-l-2 border-emerald-400 pl-6 max-w-2xl">
          <p className="font-inter text-gray-300 leading-relaxed">
            I work mainly with <span className="text-white">React.js</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>, focusing on
            responsive design, clean UI, and real-world usability. I enjoy
            turning designs into functional, scalable frontend solutions.
          </p>
        </div>
      </section>

      {/* ================= ANIMATION STYLES ================= */}
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

export default About;
