import Navbar from "@/Components/Navbar/Navbar";
import About from "@/Pages/About/About";
import Blogs from "@/Pages/Blogs/Blogs";
import Contact from "@/Pages/Contact/Contact";
import Experience from "@/Pages/Experience/Experience";
import Home from "@/Pages/Home/Home";
import Projects from "@/Pages/Projects/Projects";
import React from 'react';
export default function Page() {
  return (
    <div>
      <Navbar />  
      <Home />  
      <About />  
      <Projects />
      <Experience />
      <Contact />
      <Blogs />
    </div>
  );
}
