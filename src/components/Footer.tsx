const Footer = () => {
  return (
    <footer className="bg-[#0B1236] border-t border-border/20 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DOMINE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
