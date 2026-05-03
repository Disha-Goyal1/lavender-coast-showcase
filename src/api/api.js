const BASE_URL = "http://13.60.64.146:5000";

export const checkout = async (cart) => {
  try {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const response = await fetch(`${BASE_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        total: total,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to checkout");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
