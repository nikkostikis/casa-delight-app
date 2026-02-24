const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-xl tracking-wider text-foreground">
          CASA <span className="text-primary">VAN.I</span>
        </p>
        <p className="font-body text-xs tracking-widest text-muted-foreground uppercase">
          © {new Date().getFullYear()} Casa Van.I — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
