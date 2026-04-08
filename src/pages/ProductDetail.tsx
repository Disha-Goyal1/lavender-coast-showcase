import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <Link to="/shop" className="font-body text-primary hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart! 💜`);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl overflow-hidden bg-secondary aspect-square">
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col justify-center">
            {product.isNewArrival && (
              <span className="inline-block w-fit px-3 py-1 text-xs font-body font-semibold rounded-full bg-primary text-primary-foreground mb-4">
                New Arrival
              </span>
            )}
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="font-body text-2xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-sm font-medium text-foreground">Quantity:</span>
              <div className="flex items-center gap-2 border border-border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-accent rounded-l-lg transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-body text-sm font-medium w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-accent rounded-r-lg transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </button>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
