const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-2 text-foreground">
          Καλωσήρθατε
        </h2>
        <div className="w-16 h-px bg-gold-gradient mx-auto mb-10" />
        <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
          Η Casa Van.I με τις συνεργασίες που έχει συνάψει με μεγάλους Ιταλικούς οίκους 
          είναι σίγουρο ότι μπορεί να καλύψει κάθε ανάγκη για οικιακό εξοπλισμό επίπλου. 
          Κουζίνες της Miton, κρεβατοκάμαρες και ντουλάπες της Caccaro, τραπεζαρίες Midj 
          και κρυστάλλινα έπιπλα της Tonelli Design — κάθε προϊόν μοναδικό, άριστο ποιοτικά 
          και προσαρμοσμένο στις δικές σας ανάγκες και γούστο.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
