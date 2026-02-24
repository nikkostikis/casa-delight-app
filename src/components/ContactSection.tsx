import { MapPin, Phone, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-2 text-foreground">
            Contact
          </h2>
          <div className="w-16 h-px bg-gold-gradient mx-auto mb-16" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: MapPin,
              label: "Address",
              content: <p className="font-body text-foreground">Nikanoros 32<br />54250, Thessaloniki</p>,
            },
            {
              icon: Phone,
              label: "Phone",
              content: <a href="tel:+302310000000" className="font-body text-foreground hover:text-primary transition-colors">+30 2310 000 000</a>,
            },
            {
              icon: Mail,
              label: "Email",
              content: <a href="mailto:info@casavani.gr" className="font-body text-foreground hover:text-primary transition-colors">info@casavani.gr</a>,
            },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4">
                <item.icon className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2">
                    {item.label}
                  </p>
                  {item.content}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
