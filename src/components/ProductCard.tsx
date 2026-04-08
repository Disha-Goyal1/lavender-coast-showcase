import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart! 💜`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-secondary aspect-square">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNewArrival && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-body font-semibold rounded-full bg-primary text-primary-foreground">
              New
            </span>
          )}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
