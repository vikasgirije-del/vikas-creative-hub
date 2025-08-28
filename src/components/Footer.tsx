import { ExternalLink, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface/80 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Vikas Giri</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate graphic designer and video editor creating compelling visual experiences 
              that bring brands to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:vikas@example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                vikas@example.com
              </a>
              <a 
                href="https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Behance Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2024 Vikas Giri. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and passion for design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;