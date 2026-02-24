import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-2 text-foreground">
          Contact
        </h2>
        <div className="w-16 h-px bg-gold-gradient mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Address
              </p>
              <p className="font-body text-foreground">
                Nikanoros 32<br />
                54250, Thessaloniki
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Phone
              </p>
              <a href="tel:+302310000000" className="font-body text-foreground hover:text-primary transition-colors">
                +30 2310 000 000
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Email
              </p>
              <a href="mailto:info@casavani.gr" className="font-body text-foreground hover:text-primary transition-colors">
                info@casavani.gr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
