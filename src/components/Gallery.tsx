import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Sparkles, ZoomIn, X } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import spaFacial from "@/assets/spa-facial.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";
import spaLounge from "@/assets/spa-lounge.jpg";

const galleryImages = [
  { id: 1, src: heroImage, title: "Serene Spa Entrance", category: "Ambiance", description: "Welcome to tranquility" },
  { id: 2, src: spaFacial, title: "Signature Facial Suite", category: "Treatments", description: "Advanced skincare technology" },
  { id: 3, src: spaTreatment, title: "Therapeutic Massage Room", category: "Treatments", description: "Deep healing environment" },
  { id: 4, src: spaLounge, title: "Premium Relaxation Lounge", category: "Facilities", description: "Post-treatment sanctuary" },
  { id: 5, src: heroImage, title: "Private Couple's Suite", category: "Facilities", description: "Intimate wellness experience" },
  { id: 6, src: spaFacial, title: "Luxury Product Collection", category: "Products", description: "Premium spa-grade skincare" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-32 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sf-display font-light text-foreground mb-6 tracking-tighter">
            Experience Our Sanctuary
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sf-text font-light leading-relaxed">
            Step into spaces designed for complete relaxation, where every detail has been carefully crafted to enhance your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`group overflow-hidden spa-shadow-medium hover:spa-shadow-xl spa-transition cursor-pointer border-0 interactive-hover ${
                index % 3 === 0 ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0 relative">
                <div className={`overflow-hidden ${index % 3 === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}>
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 spa-transition-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 spa-transition">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-sf-text font-medium text-white/80 mb-2 block uppercase tracking-wide">
                        {image.category}
                      </span>
                      <h3 className="font-sf-display font-medium text-lg mb-2 tracking-tight">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/90 font-sf-text">
                        {image.description}
                      </p>
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="glass-effect rounded-full p-2">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20 ">
          <div className="glass-effect inline-flex items-center gap-4 px-8 py-6 rounded-full spa-shadow-medium bg-secondary">
            <Camera className="w-6 h-6 text-foreground" />
            <span className="text-foreground font-sf-text font-medium">Virtual tour available upon request</span>
            <Sparkles className="w-6 h-6 text-foreground" />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button variant="ghost" size="icon" className="absolute -top-12 right-0 text-white hover:bg-white/20" onClick={() => setSelectedImage(null)}>
              <X className="w-6 h-6" />
            </Button>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto rounded-lg spa-shadow-xl" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;