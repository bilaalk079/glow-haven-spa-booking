import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Waves, Hand, Scissors, Flower, Star } from "lucide-react";

const services = [
  {
    id: "facial",
    title: "Signature Facial",
    description: "Rejuvenating facial treatment with premium skincare products and relaxing techniques",
    price: "$120",
    icon: Sparkles,
    duration: "60 min"
  },
  {
    id: "massage",
    title: "Swedish Massage",
    description: "Full body relaxation massage to relieve tension and promote deep relaxation",
    price: "$150",
    icon: Waves,
    duration: "90 min"
  },
  {
    id: "manicure",
    title: "Luxury Manicure",
    description: "Complete nail care with premium polishes and hand treatments",
    price: "$65",
    icon: Hand,
    duration: "45 min"
  },
  {
    id: "pedicure",
    title: "Spa Pedicure",
    description: "Relaxing foot treatment with exfoliation, massage, and perfect polish",
    price: "$75",
    icon: Star,
    duration: "60 min"
  },
  {
    id: "body-scrub",
    title: "Body Scrub",
    description: "Exfoliating body treatment leaving your skin silky smooth and radiant",
    price: "$90",
    icon: Flower,
    duration: "45 min"
  },
  {
    id: "waxing",
    title: "Waxing Services",
    description: "Professional hair removal services using gentle, skin-friendly products",
    price: "From $35",
    icon: Scissors,
    duration: "30-60 min"
  }
];

const Services = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 spa-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Signature Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Indulge in our carefully curated treatments designed to restore your natural glow and inner peace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="spa-shadow-soft hover:spa-shadow-medium spa-transition group cursor-pointer border-0 bg-background/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 spa-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 spa-transition">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{service.duration}</span>
                    <span className="text-accent font-semibold text-lg">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToBooking}
            variant="premium" 
            size="lg"
            className="text-lg"
          >
            Book Your Treatment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;