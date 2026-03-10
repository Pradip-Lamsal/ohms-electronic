import About from "@/views/About";
import CTA from "@/views/CTA";
import Footer from "@/views/Footer";
import Gallery from "@/views/Gallery";

import Hero from "@/views/Hero";
import Navbar from "@/views/Navbar";
import Projects from "@/views/Projects";
import Testimonials from "@/views/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
}
