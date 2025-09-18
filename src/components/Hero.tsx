import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Sparkles, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import spaFacial from "@/assets/spa-facial.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";
import spaLounge from "@/assets/spa-lounge.jpg";

const heroSlides = [
  {
    id: 1,
    image: heroImage,
    title: "Relax. Refresh. Rejuvenate.",
    subtitle: "Where luxury meets wellness",
    description: "Experience the ultimate in spa therapy at Glow Haven, where every detail is crafted for your complete relaxation and renewal.",
    icon: Heart,
    cta: "Book Your Escape"
  },
  {
    id: 2,
    image: spaFacial,
    title: "Signature Facial Treatments",
    subtitle: "Advanced skincare solutions",
    description: "Transform your skin with our bespoke facial treatments, using premium ingredients and cutting-edge techniques.",
    icon: Sparkles,
    cta: "Discover Facials"
  },
  {
    id: 3,
    image: spaTreatment,
    title: "Therapeutic Massages",
    subtitle: "Deep healing & restoration",
    description: "Release tension and restore balance with our therapeutic massage treatments performed by certified professionals.",
    icon: Shield,
    cta: "Explore Massages"
  },
  {
    id: 4,
    image: spaLounge,
    title: "Luxury Spa Experience",
    subtitle: "Premium amenities await",
    description: "Indulge in our full-service spa featuring premium amenities, tranquil spaces, and personalized wellness journeys.",
    icon: Heart,
    cta: "Book Full Experience"
  }
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const scrollToBooking = useCallback(() => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full h-screen"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-screen">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat carousel-smooth"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 spa-gradient-hero opacity-80"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <div className={`fade-in ${index === current - 1 ? 'visible' : ''}`}>
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                      <div className="glass-effect rounded-full p-6 spa-shadow-large">
                        <slide.icon className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-sf-display font-light text-foreground mb-6 leading-tight tracking-tighter">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-sf-text font-light tracking-tight">
                      {slide.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-sf-text font-light leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToBooking}
                      variant="hero" 
                      size="xl"
                      className="text-lg px-12 py-6 rounded-full interactive-hover"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 glass-effect border-0 hover:bg-white/20 spa-transition z-20" />
        <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 glass-effect border-0 hover:bg-white/20 spa-transition z-20" />
        
        {/* Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full spa-transition ${
                index === current - 1 
                  ? 'bg-primary spa-shadow-medium' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-white/60 text-sm font-sf-text z-20">
          <div className="flex items-center space-x-2">
            <span>Scroll to explore</span>
            <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;