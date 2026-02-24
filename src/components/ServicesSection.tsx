import architectureImg from "@/assets/architecture.jpg";

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="md:w-1/2">
          <img
            src={architectureImg}
            alt="Αρχιτεκτονικός σχεδιασμός"
            className="w-full h-80 md:h-[450px] object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            Υπηρεσίες
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
            Αρχιτεκτονικός Σχεδιασμός
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Έμπειροι αρχιτέκτονες με τεχνική αρτιότητα και καλλιτεχνική διάθεση 
            μπορούν με τα σχέδιά τους να δώσουν όψη στη φαντασία σας. 
            Επικοινωνήστε μαζί μας, μοιραστείτε τη σκέψη σας και θα σχεδιάσουμε 
            το όνειρό σας.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Επικοινωνήστε μαζί μας
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
