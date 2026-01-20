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

/* ================= BLOG DATA (RESUME-BASED) ================= */
const BLOGS = [
  {
    title: "Building an HRMS Dashboard with Next.js & React",
    excerpt:
      "My experience working on a real-world HRMS application during my internship, focusing on dashboards, reusable components, and REST API integration.",
    date: "Coming Soon",
    tag: "Next.js",
  },
  {
    title: "How I Structured a Fitness E-Commerce Frontend (Muscle-Hub)",
    excerpt:
      "An overview of how I designed and built the Muscle-Hub e-commerce frontend with a focus on clean UI, responsiveness, and scalability.",
    date: "Coming Soon",
    tag: "E-Commerce",
  },
  {
    title: "CRUD Applications in React: Lessons from My Internship",
    excerpt:
      "What I learned while building CRUD-based applications using React, JavaScript (ES6), and REST APIs during my frontend internship.",
    date: "Coming Soon",
    tag: "React",
  },
  {
    title: "Component-Based Architecture: Writing Maintainable Frontend Code",
    excerpt:
      "How component-based architecture helped me write clean, reusable, and scalable frontend code in real-world projects.",
    date: "Coming Soon",
    tag: "Frontend",
  },
  {
    title: "What Frontend Internships Taught Me About UI & Performance",
    excerpt:
      "Key takeaways from my frontend internships related to UI consistency, performance optimization, and cross-browser compatibility.",
    date: "Coming Soon",
    tag: "Experience",
  },
];

const Blogs = () => {
  const headerRef = useReveal();
  const blogsRef = useReveal();

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
          My <span className="text-emerald-400">Blogs</span>
        </h1>

        <p className="font-inter text-gray-300 max-w-2xl text-lg leading-relaxed">
          I write about my frontend development journey, real-world project
          experience, and lessons learned while working with modern frontend
          technologies.
        </p>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section
        ref={blogsRef}
        className="mt-20 px-8 md:px-16 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal"
      >
        {BLOGS.map((blog) => (
          <div
            key={blog.title}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-400/60 transition hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            {/* TAG */}
            <span className="inline-block mb-4 text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400">
              {blog.tag}
            </span>

            {/* TITLE */}
            <h3 className="font-montserrat text-lg font-semibold mb-3 leading-snug">
              {blog.title}
            </h3>

            {/* EXCERPT */}
            <p className="font-inter text-gray-300 text-sm leading-relaxed mb-6">
              {blog.excerpt}
            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{blog.date}</span>
              <span className="text-emerald-400">Read →</span>
            </div>
          </div>
        ))}
      </section>

      {/* ================= NOTE ================= */}
      <section className="mt-32 pb-20 text-center px-8">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
          Writing in Progress ✍️
        </h2>

        <p className="font-inter text-gray-300 max-w-xl mx-auto">
          I’m currently converting my real project experience and internship
          learnings into detailed articles. New blog posts will be published
          soon.
        </p>
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

export default Blogs;
