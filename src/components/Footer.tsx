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
              <a href="#" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
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
