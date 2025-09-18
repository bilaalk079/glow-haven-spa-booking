import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair tracking-wide">
              Glow Haven Spa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Your sanctuary for relaxation, rejuvenation, and renewal. Experience luxury wellness treatments in a peaceful haven designed for your comfort.
            </p>
            <Button 
              onClick={openWhatsApp}
              variant="default" 
              size="lg"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-foreground/70 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">+1 (555) 123-4567</div>
                  <div className="text-sm text-muted-foreground">Call or Text</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-foreground/70 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">123 Wellness Avenue</div>
                  <div className="text-sm text-muted-foreground">Luxury District, City 12345</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-6">Hours & Social</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-foreground/70 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Mon - Sat</div>
                  <div className="text-sm text-muted-foreground">9:00 AM - 7:00 PM</div>
                  <div className="font-medium text-foreground mt-1">Sunday</div>
                  <div className="text-sm text-muted-foreground">10:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Glow Haven Spa. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            <button 
              onClick={scrollToTop}
              className="text-foreground hover:text-foreground/80 font-medium text-sm transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
