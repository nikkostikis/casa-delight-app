import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-2 text-foreground">
            Welcome
          </h2>
          <div className="w-16 h-px bg-gold-gradient mx-auto mb-10" />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
            Casa Van.I partners with prestigious Italian design houses to fulfill every 
            home furnishing need. From Miton kitchens and Caccaro wardrobes to Midj dining 
            furniture and Tonelli Design crystal creations — every piece is unique, 
            crafted with the finest quality, and tailored to your taste and lifestyle.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
