import { Button } from "@/components/ui/button";
import { Award, Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our certified therapists bring years of expertise and passion to every treatment."
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "We believe in nurturing both body and soul for complete rejuvenation."
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Every detail is designed to provide you with an unforgettable spa journey."
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Each treatment is tailored to your unique needs and preferences."
    }
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Luxury Meets 
              <span className="text-accent"> Wellness</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Glow Haven Spa, we create a sanctuary where time slows down and tranquility takes center stage. 
              Our mission is to provide you with an escape from the everyday, where every sense is awakened 
              and every moment is designed for your complete relaxation and renewal.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Founded with a passion for wellness and beauty, we combine traditional spa techniques with 
              modern luxury to deliver treatments that not only pamper your body but also restore your spirit. 
              Every visit to Glow Haven Spa is a journey towards your most radiant self.
            </p>
            
            <Button 
              onClick={scrollToBooking}
              variant="elegant" 
              size="lg"
              className="text-lg"
            >
              Begin Your Journey
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mx-auto mb-4 w-16 h-16 spa-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 spa-transition spa-shadow-soft">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 spa-transition">
                1000+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 spa-transition">
                5+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 spa-transition">
                15+
              </div>
              <div className="text-muted-foreground">Premium Treatments</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 spa-transition">
                98%
              </div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;