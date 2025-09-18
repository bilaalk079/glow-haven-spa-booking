import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Waves, Hand, Scissors, Flower, Star } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import spaFacial from "@/assets/spa-facial.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";
import spaLounge from "@/assets/spa-lounge.jpg";


const services = [
  {
    id: "facial",
    title: "Signature Facial",
    description: "Rejuvenating facial treatment with premium skincare products and relaxing techniques",
    price: "$120",
    icon: Sparkles,
    duration: "60 min",
    image: spaFacial
  },
  {
    id: "massage",
    title: "Swedish Massage",
    description: "Full body relaxation massage to relieve tension and promote deep relaxation",
    price: "$150",
    icon: Waves,
    duration: "90 min",
    image: heroImage
  },
  {
    id: "manicure",
    title: "Luxury Manicure",
    description: "Complete nail care with premium polishes and hand treatments",
    price: "$65",
    icon: Hand,
    duration: "45 min",
    image: spaTreatment
  },
  {
    id: "pedicure",
    title: "Spa Pedicure",
    description: "Relaxing foot treatment with exfoliation, massage, and perfect polish",
    price: "$75",
    icon: Star,
    duration: "60 min",
    image: spaLounge
  },
  {
    id: "body-scrub",
    title: "Body Scrub",
    description: "Exfoliating body treatment leaving your skin silky smooth and radiant",
    price: "$90",
    icon: Flower,
    duration: "45 min",
    image: heroImage
  },
  {
    id: "waxing",
    title: "Waxing Services",
    description: "Professional hair removal services using gentle, skin-friendly products",
    price: "From $35",
    icon: Scissors,
    duration: "30-60 min",
    image: heroImage
  }
];

const Services = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sf-display font-bold text-foreground mb-4 sm:mb-6">
            Our Signature Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Indulge in our carefully curated treatments designed to restore your natural glow and inner peace.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="spa-shadow-soft hover:spa-shadow-medium spa-transition group cursor-pointer border border-border/50 bg-background/90 backdrop-blur-sm hover:bg-background hover:border-border overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 spa-transition"
                  />
                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-10 h-10 sm:w-12 sm:h-12 spa-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                  </div>
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base font-bold shadow-lg">
                    {service.price}
                  </div>
                </div>
                
                <CardHeader className="text-center pb-3 sm:pb-4">
                  {/* Title */}
                  <CardTitle className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  
                  {/* Duration */}
                  <div className="flex justify-center">
                    <span className="bg-secondary/50 px-3 py-1 rounded-full text-xs sm:text-sm text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 pb-4 sm:pb-6">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <Button 
            onClick={scrollToBooking}
            variant="elegant" 
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Book Your Treatment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;