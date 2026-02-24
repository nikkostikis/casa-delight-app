import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Luxury Italian kitchen by Casa Van.I"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 overlay-hero" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-4 animate-fade-in-up text-foreground">
          CASA <span className="text-gold-gradient font-medium">VAN.I</span>
        </h1>
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Αρχιτεκτονικός Σχεδιασμός · Ιταλικά Έπιπλα
        </p>
        <div className="flex gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#products" className="px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Προϊόντα
          </a>
          <a href="#contact" className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300">
            Επικοινωνία
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-px h-16 bg-primary/40 mx-auto mb-2" />
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
