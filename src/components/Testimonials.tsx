import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Verified, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    id: 1, name: "Sarah Mitchell", role: "Tech Executive",
    content: "Glow Haven transformed my approach to self-care. The seamless booking, exceptional service, and luxurious environment make every visit feel like a mini vacation.",
    rating: 5, image: "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=150&h=150&fit=crop&crop=face",
    verified: true, treatments: "Monthly Signature Facial + Massage"
  },
  {
    id: 2, name: "David Park", role: "Creative Director", 
    content: "The attention to detail here is extraordinary. From the moment you enter to the personalized aftercare recommendations, everything exceeds expectations.",
    rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true, treatments: "Therapeutic Deep Tissue Massage"
  },
  {
    id: 3, name: "Maria Santos", role: "Wellness Coach",
    content: "As someone in the wellness industry, I have high standards. Glow Haven not only meets but surpasses them with their holistic approach.",
    rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: true, treatments: "Full Day Wellness Package"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sf-display font-light text-foreground mb-6 tracking-tighter">
            Trusted by Wellness Seekers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sf-text font-light leading-relaxed">
            Join thousands who have discovered their sanctuary at Glow Haven Spa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="spa-shadow-medium hover:spa-shadow-xl spa-transition border-0 glass-effect interactive-hover">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-accent/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-sf-text">
                  "{testimonial.content}"
                </p>
                
                <div className="spa-gradient-secondary rounded-lg p-3 mb-6">
                  <p className="text-xs font-sf-text font-medium text-foreground">
                    {testimonial.treatments}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover spa-shadow-medium" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-sf-display font-medium text-foreground">{testimonial.name}</h4>
                        {testimonial.verified && <Verified className="w-4 h-4 text-accent" />}
                      </div>
                      <p className="text-sm text-muted-foreground font-sf-text">{testimonial.role}</p>
                    </div>
                  </div>
                  <ThumbsUp className="w-4 h-4 text-accent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-6 spa-shadow-medium inline-block">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <h4 className="text-2xl font-sf-display font-medium text-foreground">4.9</h4>
                <p className="text-xs text-muted-foreground font-sf-text">Rating</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-sf-display font-medium text-foreground">2K+</h4>
                <p className="text-xs text-muted-foreground font-sf-text">Clients</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-sf-display font-medium text-foreground">98%</h4>
                <p className="text-xs text-muted-foreground font-sf-text">Return Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;