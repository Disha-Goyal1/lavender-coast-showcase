import { Link } from "react-router-dom";
import { Instagram, Mail, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! 💜");
    setEmail("");
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Lavender Coast
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Soft Threads, Coastal Dreams. Handmade crochet pieces crafted with love and care.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/shop", label: "Shop" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/the_lavender_coast" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-3">Newsletter</h4>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> by Lavender Coast © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
