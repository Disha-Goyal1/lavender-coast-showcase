import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon 💜");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">Get in Touch</h1>
            <p className="font-body text-muted-foreground">We'd love to hear from you</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card rounded-xl p-6 sm:p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="font-body text-sm text-muted-foreground">Follow us on Instagram</p>
            <a
              href="https://www.instagram.com/the_lavender_coast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" /> @the_lavender_coast
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
