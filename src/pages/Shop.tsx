import { useState } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

type Category = "all" | Product["category"];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "accessories", label: "Accessories" },
  { value: "clothing", label: "Clothing" },
  { value: "gifts", label: "Gifts" },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">Our Collection</h1>
            <p className="font-body text-muted-foreground">Every piece, handmade with intention</p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
