import { useState } from "react";
import "./App.css";
import HeroSession from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/Features";
import CommunicateSection1 from "./components/Communicate1";
import CommunicateSection2 from "./components/Communicate2";
import AboutSection from "./components/About";
import TeamSection from "./components/Team";
import TestimonialsSection from "./components/Testimonials";
import BlogSection from "./components/Blog";
import ContactSection from "./components/ContactUs";
import FooterSection from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSession />

      <section className="pt-6 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="features">
        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-slate-900 text-center">
          Imagine <span className="text-sky-600">Features</span>
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-5 max-w-2xl mx-auto text-center font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
      </section>

      <FeaturesSection />

      <CommunicateSection1 />
      <CommunicateSection2 />
      <CommunicateSection1 />
      <CommunicateSection2 />
      <AboutSection />

      <section className="pt-6 sm:pt-27 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-slate-900 text-center">
          Our <span className="text-sky-600">Team</span>
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-5 max-w-2xl mx-auto text-center font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
      </section>

      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
