import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 spa-gradient-primary opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in visible">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Relax. <br />
            <span className="text-accent">Refresh.</span> <br />
            Rejuvenate.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Experience the ultimate luxury at Glow Haven Spa, where wellness meets elegance in perfect harmony.
          </p>
          
          <Button 
            onClick={scrollToBooking}
            variant="hero" 
            size="xl"
            className="text-lg animate-pulse hover:animate-none"
          >
            Book Your Escape Now
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;