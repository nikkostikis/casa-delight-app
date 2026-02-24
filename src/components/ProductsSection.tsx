import kitchenImg from "@/assets/hero-kitchen.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import furnitureImg from "@/assets/furniture.jpg";

const products = [
  {
    title: "Κουζίνα",
    brand: "Miton",
    description:
      "Με τα μοντέλα της Miton η σχεδίαση και υλοποίηση της κουζίνας των ονείρων σας είναι εγγυημένη. Άψογο φινίρισμα, ποιοτικά υλικά και καινοτομία στους μηχανισμούς.",
    image: kitchenImg,
  },
  {
    title: "Ντουλάπα",
    brand: "Caccaro",
    description:
      "Με 50 χρόνια εμπειρία στα έπιπλα κρεβατοκάμαρας, η Caccaro αποτελεί σίγουρη επιλογή. Αρμονικός συνδυασμός υπερσύγχρονων μεθόδων παραγωγής με ψυχή και μεράκι.",
    image: wardrobeImg,
  },
  {
    title: "Έπιπλο",
    brand: "Midj · Tonelli",
    description:
      "Δεν υπάρχει ανάγκη που να μην μπορεί να καλυφθεί, γούστο που να μην μπορεί να ικανοποιηθεί. Η Midj και η Tonelli θα γεμίσουν τον χώρο σας με τρόπο μοναδικό.",
    image: furnitureImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-center mb-2 text-foreground">
          Προϊόντα
        </h2>
        <div className="w-16 h-px bg-gold-gradient mx-auto mb-16" />

        <div className="space-y-24">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-primary font-body text-sm tracking-[0.2em] uppercase">
                  {product.brand}
                </p>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
