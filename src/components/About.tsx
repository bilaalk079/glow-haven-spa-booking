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
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Luxury Meets 
              <span className="text-foreground"> Wellness</span>
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
                  className="text-center group border rounded-2xl p-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mx-auto mb-4 w-16 h-16 spa-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 spa-transition spa-shadow-soft">
                    <IconComponent className="w-8 h-8 text-foreground" />
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
            <div className="text-center">
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 spa-shadow-soft inline-block bg-secondary/20 border border-border/30">
            <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 flex-wrap">
              <div className="text-center">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-sf-display font-bold text-foreground">
                  2K+
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-sf-text">
                  Happy Clients
                </p>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block"></div>
              <div className="text-center">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-sf-display font-bold text-foreground">
                  15+
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-sf-text">
                  Years of Experience
                </p>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block"></div>
              <div className="text-center">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-sf-display font-bold text-foreground">
                  98%
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-sf-text">
                  Return Rate
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;