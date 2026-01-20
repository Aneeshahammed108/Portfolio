"use client";

import React, { useEffect, useRef, useState } from "react";
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

const Contact = () => {
  const headerRef = useReveal();
  const formRef = useReveal();
  const infoRef = useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          Get in <span className="text-emerald-400">Touch</span>
        </h1>

        <p className="font-inter text-gray-300 max-w-2xl text-lg leading-relaxed">
          Have a question, opportunity, or project in mind? Feel free to reach
          out. I’m always open to discussing frontend roles, collaborations, and
          ideas.
        </p>
      </section>

      {/* ================= FORM + INFO ================= */}
      <section
        className="mt-20 px-8 md:px-16 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* CONTACT FORM */}
        <div
          ref={formRef}
          className="reveal bg-white/5 border border-white/10 rounded-xl p-8"
        >
          <h2 className="font-montserrat text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3
                         text-sm text-white placeholder-gray-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3
                         text-sm text-white placeholder-gray-400
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-3
                         text-sm text-white placeholder-gray-400 resize-none
                         focus:outline-none focus:border-emerald-400 transition"
            />

            <button
              type="button"
              className="font-montserrat font-bold tracking-wide text-sm
                         px-8 py-3 rounded-sm bg-emerald-600 text-white
                         hover:bg-emerald-500 transition"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div
          ref={infoRef}
          className="reveal space-y-8 bg-white/5 border border-white/10 rounded-xl p-8"
        >
          <h2 className="font-montserrat text-2xl font-semibold">
            Contact Information
          </h2>

          <div className="space-y-5 text-gray-300 text-sm">
            <p>
              <span className="text-white font-semibold">Email:</span>{" "}
              aneesh@example.com
            </p>
            <p>
              <span className="text-white font-semibold">Location:</span> India
            </p>
            <p>
              <span className="text-white font-semibold">Availability:</span>{" "}
              Open to frontend opportunities
            </p>
          </div>

          <div className="pt-4">
            <h3 className="font-montserrat text-lg font-semibold mb-4">
              Find Me Online
            </h3>

            <div className="flex gap-4">
              {[
                { name: "GitHub", link: "#" },
                { name: "LinkedIn", link: "#" },
                { name: "Portfolio", link: "/" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm px-4 py-2 border border-white/30 rounded-sm
                             hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mt-28 pb-20 text-center px-8">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something <span className="text-emerald-400">Together</span>
        </h2>

        <p className="font-inter text-gray-300 max-w-xl mx-auto mb-8">
          Whether you’re hiring, collaborating, or just want to connect — I’d
          love to hear from you.
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

export default Contact;
