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
import { Sparkles, Heart, Shield } from "lucide-react";
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

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 6000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full h-screen"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="h-screen">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-screen">
              {/* Background Image with Dark Filter */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 spa-gradient-hero opacity-40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl text-center">
                  <div className={`transition-all duration-700 ease-out ${
                    index === current - 1 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}>
                    
                    {/* Icon */}
                    <div className="mb-6 sm:mb-8 flex justify-center">
                      <div className="glass-effect rounded-full p-4 sm:p-6 spa-shadow-large bg-white/10 backdrop-blur-sm border border-white/20">
                        <slide.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-sf-display font-bold text-white mb-4 sm:mb-6 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6 font-sf-text font-light">
                      {slide.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed font-sf-text max-w-2xl mx-auto">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToBooking}
                      variant="hero" 
                      size="xl"
                      className="text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full interactive-hover"
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
        <CarouselPrevious className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 glass-effect border-0 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300" />
        <CarouselNext className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 glass-effect border-0 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300" />

        {/* Dots Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === current - 1 
                  ? 'bg-primary w-6 sm:w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-white/60 text-xs sm:text-sm font-sf-text z-20">
          <div className="flex items-center space-x-2">
            <span className="hidden sm:block">Scroll</span>
            <div className="w-4 h-6 sm:w-5 sm:h-8 border border-white/30 rounded-full flex justify-center">
              <div className="w-0.5 h-2 bg-white/50 rounded-full mt-1 animate-pulse"></div>
            </div>
          </div>
        </div>

      </Carousel>
    </section>
  );
};

export default Hero;