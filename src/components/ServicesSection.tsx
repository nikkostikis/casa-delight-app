import architectureImg from "@/assets/architecture.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <ScrollReveal className="md:w-1/2">
          <img
            src={architectureImg}
            alt="Architectural design"
            className="w-full h-80 md:h-[450px] object-cover"
          />
        </ScrollReveal>
        <ScrollReveal className="md:w-1/2 space-y-6" delay={0.2}>
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            Services
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
            Architectural Design
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Experienced architects with technical excellence and artistic vision 
            can bring your imagination to life through their designs. 
            Get in touch, share your vision, and we will design your dream space.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get in Touch
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
