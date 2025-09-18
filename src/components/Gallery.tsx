import spaLounge from "@/assets/spa-lounge.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";
import spaFacial from "@/assets/spa-facial.jpg";

const Gallery = () => {
  const images = [
    {
      src: spaLounge,
      alt: "Relaxing spa lounge area with comfortable seating",
      title: "Relaxation Lounge"
    },
    {
      src: spaTreatment,
      alt: "Professional massage treatment room",
      title: "Treatment Rooms"
    },
    {
      src: spaFacial,
      alt: "Luxurious facial treatment setup",
      title: "Facial Suite"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience Our Sanctuary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step into our world of tranquility and discover spaces designed for your ultimate relaxation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl spa-shadow-soft hover:spa-shadow-strong spa-transition-slow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 spa-transition-slow"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 spa-transition">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-muted-foreground">
            <div className="w-16 h-px bg-accent"></div>
            <span className="text-sm font-medium tracking-wide">GLOW HAVEN SPA</span>
            <div className="w-16 h-px bg-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;