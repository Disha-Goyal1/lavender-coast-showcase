import { motion } from "framer-motion";
import { Heart, Leaf, Palette } from "lucide-react";

const values = [
  { icon: Heart, title: "Made with Love", description: "Every stitch is placed with care and intention, creating pieces that carry warmth and soul." },
  { icon: Leaf, title: "Sustainable Materials", description: "We use organic cotton, recycled yarn, and eco-friendly packaging to protect our beautiful coast." },
  { icon: Palette, title: "Unique Designs", description: "Each piece is one-of-a-kind, inspired by coastal landscapes, lavender fields, and the beauty of nature." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Story</h1>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
              Lavender Coast was born from a love of handmade craft and the peaceful beauty of coastal living. What started as a hobby — crocheting by the sea with a cup of tea — grew into a small business dedicated to creating beautiful, sustainable pieces that bring joy to everyday life.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
              Every item in our collection is handcrafted with care using premium, eco-friendly yarns. We believe that slow fashion is beautiful fashion — each piece takes hours of dedicated work, and no two are exactly alike.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              From cozy scarves to playful plushies, our creations are designed to be treasured. We're grateful for every customer who chooses to support handmade and sustainable craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding lavender-gradient">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 text-center"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
