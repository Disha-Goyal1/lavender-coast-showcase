const BASE_URL = "http://13.60.64.146:5000"; // your backend EC2 IP

// Checkout API
export const checkout = async (cart) => {
  try {
    const response = await fetch(`${BASE_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
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
