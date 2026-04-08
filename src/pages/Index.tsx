import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const testimonials = [
  { name: "Sophie M.", text: "The most beautiful crochet bag I've ever owned. The quality is incredible!", rating: 5 },
  { name: "Emily R.", text: "Bought the plushie for my daughter — she absolutely loves it. So soft and well-made.", rating: 5 },
  { name: "Claire W.", text: "I wear my crochet top everywhere. Always get compliments! Truly a work of art.", rating: 5 },
];

const Index = () => {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Handmade crochet items" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">Handcrafted with Love</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Handmade with Love, Inspired by the Coast
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Soft Threads, Coastal Dreams — Discover unique, handmade crochet pieces that bring warmth and beauty to your everyday life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/80 text-foreground font-body font-medium text-sm hover:bg-accent transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding crochet-pattern">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">Best Sellers</h2>
            <p className="font-body text-muted-foreground">Our most loved pieces</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="lavender-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Every Stitch Tells a Story
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-6">
              Each piece is handmade with sustainable materials, unique designs, and heartfelt craftsmanship.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">New Arrivals</h2>
            <p className="font-body text-muted-foreground">Fresh from the studio</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
