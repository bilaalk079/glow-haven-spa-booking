import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingFlow from "@/components/BookingFlow";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Index = () => {
  useEffect(() => {
    // Fade in animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
     <Navbar/>
      <Hero />
      <div className="fade-in">
        <Services />
      </div>
      <div className="fade-in">
        <Gallery />
      </div>
      <div className="fade-in">
        <Testimonials />
      </div>
      <div className="fade-in">
        <FAQ />
      </div>
      <div className="fade-in">
        <BookingFlow />
      </div>
      <div className="fade-in">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
