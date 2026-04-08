import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      toast.success("Order placed successfully! Thank you 💜");
      clearCart();
      setCheckingOut(false);
    }, 1500);
  };

  if (items.length === 0 && !checkingOut) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
          <p className="font-body text-muted-foreground mb-6">Discover our handmade collection</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm"
          >
            Browse Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 bg-card rounded-xl p-4 border border-border"
              >
                <Link to={`/product/${item.product.id}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" loading="lazy" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.product.id}`} className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
                    {item.product.name}
                  </Link>
                  <p className="font-body text-sm text-primary font-semibold mt-1">${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 border border-border rounded-lg">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 hover:bg-accent rounded-l-lg transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-body text-xs font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 hover:bg-accent rounded-r-lg transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-xl p-6 border border-border h-fit" style={{ boxShadow: "var(--shadow-soft)" }}>
            <h2 className="font-display text-lg font-bold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground font-medium">Free</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-body">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-bold text-primary text-lg">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {checkingOut ? "Processing..." : "Checkout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
