import ScrollReveal from "@/components/ScrollReveal";

const brands = ["Miton", "Caccaro", "Midj", "Tonelli Design"];

const BrandsSection = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {brands.map((brand, i) => (
            <ScrollReveal key={brand} delay={i * 0.1}>
              <span className="font-heading text-2xl md:text-3xl font-light tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default">
                {brand}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
