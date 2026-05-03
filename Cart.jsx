import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Update localStorage
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase quantity
  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    updateCart(updatedCart);
  };

  // Remove item
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  // Calculate total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Checkout
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://13.60.64.146:5000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      // Redirect to WhatsApp
      window.open(data.whatsappUrl, "_blank");

      // Show QR
      alert("Scan QR for payment:\n" + data.qrCode);

    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your Cart is Empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          <div>
            <button onClick={() => decreaseQty(index)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => increaseQty(index)}>+</button>
          </div>

          <button
            onClick={() => removeItem(index)}
            style={{ marginTop: "10px", color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button
        onClick={handleCheckout}
        style={{
          padding: "10px 20px",
          background: "purple",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Checkout via WhatsApp
      </button>
    </div>
  );
};

export default Cart;
