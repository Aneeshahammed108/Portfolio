"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About Me", "Projects", "Contact", "Blogs"];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/5 animate-slide-down">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="text-2xl font-extrabold tracking-tighter cursor-pointer group font-montserrat">
            <span className="text-white group-hover:text-emerald-400 transition-colors duration-500">
              A
            </span>
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">
              .
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-10 text-sm font-semibold text-gray-300 font-inter">
            {menuItems.map((item, index) => (
              <li
                key={item}
                className="relative group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className="group-hover:text-white transition duration-300">
                  {item}
                </span>

                {/* underline */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden rounded-full px-7 py-3 text-xs font-bold tracking-widest text-white group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600 w-[300%] transition-transform duration-1000 group-hover:animate-liquid-flow"></div>
              <span className="relative z-10 flex items-center gap-2">
                LET’S TALK →
              </span>
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-6 animate-fade-in">
            <ul className="flex flex-col gap-5 text-gray-300 font-semibold">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-emerald-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full rounded-full py-3 font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition">
              LET’S TALK →
            </button>
          </div>
        )}
      </nav>

      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes liquid-flow {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }

        .group:hover .group-hover\\:animate-liquid-flow {
          animation: liquid-flow 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
