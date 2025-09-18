import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Verified } from "lucide-react";

const testimonials = [
  {
    id: 1, 
    name: "Sarah Mitchell", 
    role: "Tech Executive",
    content: "Glow Haven transformed my approach to self-care. The seamless booking, exceptional service, and luxurious environment make every visit feel like a mini vacation.",
    rating: 5, 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=150&h=150&fit=crop&crop=face",
    verified: true, 
    treatments: "Monthly Signature Facial + Massage"
  },
  {
    id: 2, 
    name: "David Park", 
    role: "Creative Director", 
    content: "The attention to detail here is extraordinary. From the moment you enter to the personalized aftercare recommendations, everything exceeds expectations.",
    rating: 5, 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true, 
    treatments: "Therapeutic Deep Tissue Massage"
  },
  {
    id: 3, 
    name: "Maria Santos", 
    role: "Wellness Coach",
    content: "As someone in the wellness industry, I have high standards. Glow Haven not only meets but surpasses them with their holistic approach.",
    rating: 5, 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: true, 
    treatments: "Full Day Wellness Package"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sf-display font-bold text-foreground mb-4 sm:mb-6">
            Trusted by Wellness Seekers
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sf-text leading-relaxed">
            Join thousands who have discovered their sanctuary at Glow Haven Spa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="spa-shadow-soft hover:spa-shadow-medium spa-transition border border-border/50 bg-background/90 backdrop-blur-sm hover:bg-background hover:border-border"
            >
              <CardContent className="p-6">
                {/* Quote Icon & Stars */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-muted-foreground/30" />
                </div>
                
                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-4 leading-relaxed font-sf-text text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                
                {/* Treatment Info */}
                <div className="spa-gradient-secondary rounded-lg p-3 mb-4">
                  <p className="text-xs sm:text-sm font-sf-text font-medium text-foreground dark:text-secondary">
                    {testimonial.treatments}
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover spa-shadow-soft" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <h4 className="font-sf-display font-semibold text-foreground text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <Verified className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-sf-text">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 spa-shadow-soft inline-block bg-secondary/20 border border-border/30">
            <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 flex-wrap">
              <div className="text-center">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-sf-display font-bold text-foreground">
                  4.9
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-sf-text">
                  Average Rating
                </p>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block"></div>
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
    </section>
  );
};

export default Testimonials;