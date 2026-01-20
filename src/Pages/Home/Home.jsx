"use client";

import React from "react";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "../../Components/Navbar/Navbar";

/* ================== Fonts ================== */
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

const Home = () => {
  return (
    <div
      className={`${inter.variable} ${montserrat.variable} font-sans relative min-h-screen bg-[#050505] overflow-hidden`}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/suitimage.jpeg"
          alt="Aneesh Ahammed"
          fill
          priority
          quality={100}
          className="object-cover object-center brightness-125 contrast-105 saturate-105 animate-zoom-in"
        />

        {/* Base readability shadows */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10 z-10" />

        {/* ✅ BEST BOTTOM SHADOW (BLACK + SUBTLE EMERALD CHARM) */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] z-20 pointer-events-none">
          {/* Black foundation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
          {/* Emerald charm (subtle) */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/18 via-transparent to-transparent" />
        </div>

        {/* Edge glow (kept away from face) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-10 right-[-180px] w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-180px] left-[-180px] w-[520px] h-[520px] bg-cyan-400/10 rounded-full blur-[150px]" />
        </div>
      </div>

      <Navbar />

      {/* ================= HERO ================= */}
      <main className="relative z-30 flex items-center min-h-screen px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="md:col-span-7 space-y-8 mt-24 md:mt-0">
            <h1>
              {/* I AM – bright and clear */}
              <span
                className="block font-montserrat font-extrabold text-5xl md:text-8xl
                           tracking-tighter leading-[0.9] text-white
                           drop-shadow-[0_4px_22px_rgba(255,255,255,0.35)]
                           opacity-0 animate-slide-up"
              >
                I AM
              </span>

              {/* NAME */}
              <span
                className="block font-montserrat font-extrabold text-5xl md:text-8xl
                           tracking-tighter leading-[0.9]
                           opacity-0 animate-slide-up delay-200"
              >
                <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                  ANEESH <br /> AHAMMED
                </span>
              </span>
            </h1>

            <p
              className="font-inter text-gray-100 max-w-xl leading-relaxed text-base md:text-lg
                         font-light tracking-wide border-l-2 border-emerald-400 pl-6
                         drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]
                         opacity-0 animate-slide-up delay-400"
            >
              I build responsive, high-performance web applications with a strong
              focus on clean UI, accessibility, and user experience.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-5 pt-6 opacity-0 animate-slide-up delay-600">
              <button className="font-montserrat bg-emerald-600 hover:bg-emerald-500
                                 text-white px-8 py-3.5 rounded-sm font-bold tracking-wider
                                 text-sm transition-all hover:scale-105 shadow-lg">
                Download Resume ↓
              </button>

              <button className="font-montserrat px-8 py-3.5 rounded-sm font-bold tracking-wider
                                 text-sm text-white border border-white/40
                                 hover:border-emerald-400 hover:text-emerald-400
                                 transition backdrop-blur-sm bg-white/5">
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT – FRONTEND DEVELOPER (LOWER PLACEMENT) */}
          <div
            className="hidden md:flex md:col-span-5 justify-end items-end
                       mt-56 pb-4 opacity-0 animate-slide-left delay-800"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-14 bg-emerald-500/20 blur-[70px] rounded-full" />

              <div className="relative text-right">
                <div className="font-montserrat text-4xl md:text-5xl
                                font-bold text-white/90 tracking-tighter">
                  A FRONTEND
                </div>
                <div className="font-montserrat text-4xl md:text-5xl
                                font-bold text-white tracking-tighter
                                flex items-center justify-end gap-3 mt-2">
                  DEVELOPER
                  <span className="text-emerald-400 animate-pulse">{'</>'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ================= ANIMATIONS ================= */}
      <style jsx global>{`
        .font-montserrat { font-family: var(--font-montserrat), sans-serif; }
        .font-inter { font-family: var(--font-inter), sans-serif; }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-left {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes zoom-in {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-slide-left {
          animation: slide-left 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-zoom-in {
          animation: zoom-in 1.5s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

export default Home;
