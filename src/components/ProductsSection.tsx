import kitchenImg from "@/assets/hero-kitchen.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import furnitureImg from "@/assets/furniture.jpg";

const products = [
  {
    title: "Kitchen",
    brand: "Miton",
    description:
      "With Miton's models, designing and building your dream kitchen is guaranteed. Impeccable finishes, premium materials, and innovative mechanisms deliver a result that is both elegant and fully functional.",
    image: kitchenImg,
  },
  {
    title: "Wardrobe",
    brand: "Caccaro",
    description:
      "With 50 years of experience in bedroom furniture, Caccaro is a trusted choice for your space. The Italian house combines cutting-edge production methods with the soul and passion of its craftspeople.",
    image: wardrobeImg,
  },
  {
    title: "Furniture",
    brand: "Midj · Tonelli",
    description:
      "No need that can't be met, no taste that can't be satisfied. Midj and Tonelli will fill your space in a truly unique way with refined Italian design and craftsmanship.",
    image: furnitureImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-center mb-2 text-foreground">
          Products
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
