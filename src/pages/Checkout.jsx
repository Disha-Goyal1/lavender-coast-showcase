import { useState } from "react";

export default function Checkout() {
  const [qr, setQr] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = async () => {
    const res = await fetch("http://localhost:5000/api/order/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart, total }),
    });

    const data = await res.json();

    setQr(data.qrCode);
    setWhatsapp(data.whatsappLink);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      <p>Total: ${total}</p>

      <button onClick={handleCheckout}>Place Order</button>

      {qr && (
        <div>
          <h3>Scan to Pay</h3>
          <img src={qr} alt="QR Code" />
        </div>
      )}

      {whatsapp && (
        <div>
          <a href={whatsapp} target="_blank">
            Send Order on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
