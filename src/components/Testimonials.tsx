import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    treatment: "Signature Facial & Massage",
    rating: 5,
    text: "Absolutely divine experience! The attention to detail and the serene atmosphere made my day perfect. I left feeling completely renewed and glowing.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Chen",
    treatment: "Spa Pedicure & Body Scrub",
    rating: 5,
    text: "The most relaxing spa experience I've ever had. The staff is incredibly professional and the treatments are top-notch. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jessica Williams",
    treatment: "Full Day Package",
    rating: 5,
    text: "Glow Haven Spa exceeded all my expectations. From the moment I walked in, I felt pampered and cared for. The perfect place to unwind and rejuvenate.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 spa-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why our guests choose Glow Haven Spa for their wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="spa-shadow-soft hover:spa-shadow-medium spa-transition bg-background/90 backdrop-blur-sm border-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 spa-shadow-soft"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 spa-gradient-primary rounded-2xl spa-shadow-medium">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-muted-foreground">
              Join our community of satisfied clients and experience luxury like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;